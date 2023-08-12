import fs from 'fs'
import path from 'path'
import { Glob } from 'glob'
import { mkdirp } from 'mkdirp'
import render from '@riotjs/ssr'
import register from '@riotjs/register'

const srcDirFromRoot = 'src/html/pages'
const outputDir = 'dist'

register({ exts: ['.html'] })

const files = new Glob(`${srcDirFromRoot}/**/*.riot.html`, {
  withFileTypes: true
})
for (const file of files) {
  const Root = import(`../${srcDirFromRoot}/${file.name}`)
  const html = render('html', Root)
  const dir = path.join(outputDir, file.name.replace(/riot\.html$/, 'html'))

  mkdirp(path.parse(dir).dir).then(() => {
    fs.writeFile(dir, html, (err) => {
      if (err) throw err
    })
  })
}
