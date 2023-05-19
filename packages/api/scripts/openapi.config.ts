import { generateService } from '@umijs/openapi'
import { resolve } from 'path'
import glob from 'fast-glob'
import { promises as fs } from 'fs'
import * as nunjucks from 'nunjucks'

// 请求的库
const requestLibPath = `import request from 'axios'`
// 请求增加的前缀
const apiPrefix = ''
// Swagger 2.0 或 OpenAPI 3.0 的地址
const schemaPath = 'http://127.0.0.1:4523/export/openapi?projectId=1257591&specialPurpose=openapi-generator'
// 生成的api存放的目录
const serversPath = './src'
// api 当前所在实际目录， 生成的时候 会放在 serversPath的 api 目录下
const apiSrc = `${serversPath}/api`

const generatorOpenApi = async () => {
	await generateService({
		requestLibPath,
		schemaPath,
		serversPath,
		apiPrefix,
		namespace: 'dipeakApi',
		hook: {
			customFunctionName: (data) => {
				// 生成api名称 如 Get /api/engine/pTable  => apiEnginePTableGet
				const functionName = genDefaultFunctionName(data.path, apiPrefix) + toUpperFirstLetter(data.method)
				/** 
				 * 兼容错误命名如 /user/:id/:name
				 * 直接将{}删除，例如 apiClusterDelete{id}Delete => apiClusterDeleteDelete
				 * */
				return functionName.replace(/{(.*?)}/g, '')
			},
		},
	})

	const apiPath = resolve(__dirname, '..', apiSrc)
	let filesList = await glob('**/*.ts', { cwd: apiPath, onlyFiles: true })
	// 过滤掉 index.ts typings.d.ts
	if (filesList.length > 0) {
		filesList = filesList.filter((item) => {
			return item !== 'index.ts' && item !== 'typings.d.ts'
		})
	} else {
		return
	}
	// console.log(filesList)
	const data = []
	let allFunctionsName = <any>[]
	for (const index in filesList) {
		const filePath = `${apiPath}/${filesList[index]}`
		const content = await fs.readFile(filePath, 'utf-8')
		// 正则匹配所有的函数名
		const regex = /function\s+(\w+)\s*\(/g
		const functionNames = []
		let match
		while ((match = regex.exec(content.toString())) !== null) {
			functionNames.push(match[1])
		}
		allFunctionsName = allFunctionsName.concat(functionNames)
		data.push({
			functionNames,
			fileName: filesList[index].replace('.ts', ''),
		})
	}
	// console.log(data)
	// 输出新的index.ts 文件
	const template = resolve('./scripts/template/serviceIndex.njk')
	// 设置输出不转义
	nunjucks.configure({
		autoescape: false,
	})
	const code = nunjucks.render(template, { data, allFunctionsName }).toString()
	fs.writeFile(apiPath + '/index.ts', code)
}

generatorOpenApi()

function genDefaultFunctionName(path: any, pathBasePrefix: any): string {
	if (!path) {
		return ''
	}
	const _path = pathBasePrefix + path
	const func = _path
		.split('/')
		.slice(1)
		.map((str: string, index: number) => {
			return index === 0 ? str : toUpperFirstLetter(str)
		})
		.join('')
	return func
}

// 字符串第一个字符转大写
function toUpperFirstLetter(text: string): string {
	return text.charAt(0).toUpperCase() + text.slice(1)
}

// // node 获取某个dir 下所有的file
// async function getAllFiles(dir: string) {
//   const filePath = resolve(__dirname, '..', dir)

//   return filesList
// }

// // 获取模版字符串
// function getTempStr(data) {
//   const importStr = data.map(item => {
//     return `import {
//       ${item.fun}
//     } from ./${item.fileName}`
//   })
// }
