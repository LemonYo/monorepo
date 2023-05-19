import { IApi } from 'father'

// 产物里面里面的less文件后缀 替换成css
const transformImportLess2Css: Required<IApi['config']>['extraBabelPlugins'][0] = () => {
	return {
		name: 'transform-import-less-to-css',
		visitor: {
			ImportDeclaration(path: any) {
				console.log(path)
				const re = /\.less$/
				if (re.test(path.node.source.value)) {
					path.node.source.value = path.node.source.value.replace(re, '.css')
				}
			},
		},
	}
}

export default transformImportLess2Css