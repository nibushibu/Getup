import fs from 'fs'
import path from 'path'
import { glob } from 'glob'
import { mkdirp } from 'mkdirp'
import render from '@riotjs/ssr'

const srcDirPathFromProjectRoot = 'src/html/pages'
const outputDir = 'public'

const files = await glob(`${srcDirPathFromProjectRoot}/**/*.riot`)

for await (const file of files) {
  fs.readFile(file, 'utf-8', (err, data) => {
    if (err) throw err

    import(`../${file}`).then((riotHtml) => {
      const renderedHtml = render('html', riotHtml.default)
      const dir = path.join(
        outputDir,
        file
          .replace(new RegExp(`${srcDirPathFromProjectRoot}/`), '')
          .replace(/riot$/, 'html')
      )
      mkdirp(path.parse(dir).dir).then(() => {
        fs.writeFile(dir, renderedHtml, (err) => {
          if (err) throw err
        })
      })
    })
  })
}
