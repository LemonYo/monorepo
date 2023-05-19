import less from 'less'
import { resolve, dirname } from 'path'
import { promises as fs } from "fs"
import glob from 'fast-glob'

// 编译less to css
const sourceDir = resolve(__dirname, '../src')
const esDir = resolve(__dirname, '../dist/es')
const libDir = resolve(__dirname, '../dist/lib')

const buildLess = async () => {

    //获取打包后.less文件目录(lib和es一样)
    const lessFils = await glob("**/*.less", { cwd: sourceDir, onlyFiles: true })
    //遍历含有less的目录
    for (const _path in lessFils) {
        const filePath = `${sourceDir}/${lessFils[_path]}`
        //获取less文件字符串
        const lessCode = await fs.readFile(filePath, 'utf-8')
        //将less解析成css

        const code = await less.render(lessCode, {
            //指定src下对应less文件的文件夹为目录
            paths: [sourceDir, dirname(filePath)]
        })

        //拿到.css后缀path
        const cssPath = lessFils[_path].replace('.less', '.css')
        //将css写入对应目录
        fs.writeFile(resolve(esDir, cssPath), code.css)
        fs.writeFile(resolve(libDir, cssPath), code.css)
    }

}
buildLess()



