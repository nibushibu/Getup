import fs from 'fs'
import path from 'path'
import { Glob } from 'glob'
import { mkdirp } from 'mkdirp'
import render from '@riotjs/ssr'

const srcDirFromRoot = 'src/html/pages'
const outputDir = 'dist'

const files = new Glob(`${srcDirFromRoot}/**/*.riot`, {
  withFileTypes: false
})

for await (const file of files) {
  console.log(file)
  import(`../${file}`).then((riotHTML) => {
    // console.log(riotHTML)
    const html = render('html', riotHTML)
    console.log(html)
    const dir = path.join(
      outputDir,
      file
        .replace(new RegExp(`${srcDirFromRoot}/`), '')
        .replace(/riot$/, 'html')
    )
    console.log(dir)
    mkdirp(path.parse(dir).dir).then(() => {
      fs.writeFile(dir, html, (err) => {
        if (err) throw err
      })
    })
  })
}
