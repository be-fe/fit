import path from 'path'
import find from 'find'
import fs from 'fs'
import format from 'format-json'
import resolveFile from '../../../resolve'
import _ from 'lodash'
import {relativePathToComponentPath} from './utils'

const root = process.cwd()

const rules = [
    // import * as xxx from 'xxx'
    `(import\\s\\*\\sas\\s{0,}(?:[\\$_a-zA-Z\\-\\{\\}]{1,}\\s{1,}from\\s{1,}){0,1}['\\"]([\\w\\-]{1,})(?:[/\\w\\.\\-]{1,}){0,1}['\"])`,
    // import {a,b,c} from 'xxx'
    `(import\\s\\{\\s{0,}[\\w,_\\s]{1,}\\}\\s{0,}from\\s{0,}['\"]([\\w\\-]{1,})(?:[/\\w\\.\\-]{1,}){0,1}['\"])`,
    // import x from 'xxx'
    `(import\\s{0,}(?:[\\$_a-zA-Z\\-\\{\\}]{1,}\\s{1,}from\\s{1,}){0,1}['\"]([\\w\\-]{1,})(?:[/\\w\\.\\-]{1,}){0,1}['\"])`
]

const regex = new RegExp(rules.join('|'), 'g')

const getPackageJSON = (filePath)=> {
    return JSON.parse(fs.readFileSync(path.join(filePath, 'package.json')))
}

const writePackageJSON = (filePath, name, obj) => {
    let json = getPackageJSON(filePath)
    json[name] = obj
    fs.writeFileSync(path.join(filePath, 'package.json'), format.plain(json))
}

export default  (modules) => {
    const rootJSON = getPackageJSON(root)
    const rootDependencies = rootJSON.dependencies
    const devDependencies = rootJSON.devDependencies

    modules.forEach((info) => {
        const filePath = path.join(__dirname, `../../..`, `lib/${info.categoryName}/${info.module.path}`)
        let dependencies = []
        let depenObj = {}

        const files = find.fileSync(filePath)

        let srcFiles = files.filter((val) => {
            return /src[\/\w-]+.(js|tsx)$/.test(val)
        })

        srcFiles.forEach((file) => {
            let code = fs.readFileSync(file).toString()
            // 将所有 fit 组件的引用还原
            code = code.replace(/import\s(\w|[\{\w,\}]|\*\sas\s)*\sfrom\s\'(..\/){3,}([\w-]*\/)?([\w-]*)\/src\'/g, (word, match1, match2, match3, match4)=> {
                const componentInfo = relativePathToComponentPath(match2, match4, info)
                return `import ${_.capitalize(_.camelCase(componentInfo.name))} from '${componentInfo.prefix}-${componentInfo.name}'`
            })

            let match

            while ((match = regex.exec(code)) != null) {
                if (match.index === regex.lastIndex) {
                    ++regex.lastIndex
                }

                let matched = match[2] || match[4] || match[6]

                if (matched && dependencies.indexOf(matched) < 0) {
                    dependencies.push(matched)
                }
            }
        })

        dependencies.forEach((dep) => {
            let depen = rootDependencies[dep] || devDependencies[dep]

            if (depen) {
                depenObj[dep] = depen
            }
            else if (dep in resolveFile.alias) {
                depenObj[dep] = '^' + getPackageJSON(resolveFile.alias[dep].replace('/src', '')).version
            }
        })

        writePackageJSON(filePath, 'dependencies', depenObj)
    })

    process.chdir(root)
}