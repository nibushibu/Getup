import fs from 'fs'
import path from 'path'
import { glob } from 'glob'
import { mkdirp } from 'mkdirp'
import { compile } from '@riotjs/compiler'
import render from '@riotjs/ssr'

const srcDirPathFromProjectRoot = 'src/html/pages'
const componentsDirPathFromProjectRoot = 'src/html/components'
const outputDir = 'dist'

const componentFiles = await glob(
  `${componentsDirPathFromProjectRoot}/**/*.riot`
)

for await (const componentFile of componentFiles) {
  // console.log(componentFile)
  fs.readFile(componentFile, 'utf-8', (err, data) => {
    if (err) throw err
    // console.log(data)
    const { code, map } = compile(data)
    // console.log(code)

    const compiledFilePath = componentFile
      .replace(new RegExp(`${componentsDirPathFromProjectRoot}/`), '')
      .replace(/riot$/, 'js')
    // console.log(compiledFilePath)
    fs.writeFile(
      `${componentsDirPathFromProjectRoot}/${compiledFilePath}`,
      code,
      (err) => {
        if (err) throw err
      }
    )
  })
}

const files = await glob(`${srcDirPathFromProjectRoot}/**/*.riot`)

for await (const file of files) {
  // console.log(file)
  fs.readFile(file, 'utf-8', (err, data) => {
    if (err) throw err
    // console.log(data)
    const { code, map } = compile(data)
    // console.log(code)

    const compiledFilePath = file
      .replace(new RegExp(`${srcDirPathFromProjectRoot}/`), '')
      .replace(/riot$/, 'js')
    // console.log(compiledFilePath)
    fs.writeFile(
      `${srcDirPathFromProjectRoot}/${compiledFilePath}`,
      code,
      (err) => {
        if (err) throw err
      }
    )

    import(`../${srcDirPathFromProjectRoot}/${compiledFilePath}`).then(
      (riotHtml) => {
        const renderedHtml = render('html', riotHtml.default)
        const dir = path.join(
          outputDir,
          file
            .replace(new RegExp(`${srcDirPathFromProjectRoot}/`), '')
            .replace(/riot$/, 'html')
        )
        console.log(dir)
        mkdirp(path.parse(dir).dir).then(() => {
          fs.writeFile(dir, renderedHtml, (err) => {
            if (err) throw err
          })
        })
      }
    )
  })
}
