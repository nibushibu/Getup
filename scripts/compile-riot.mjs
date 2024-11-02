import fs from 'fs'
import path from 'path'
import { glob } from 'glob'
import { mkdirp } from 'mkdirp'
import { compile } from '@riotjs/compiler'

const srcDir = 'src/riot'
const outputDir = 'src/js/components'

const srcFiles = await glob(`${srcDir}/**/*.html`)
const oldFiles = await glob(`${outputDir}/**/*.html`)

for await (const file of oldFiles) {
  fs.unlink(file, (err) => {
    if (err) throw err
  })
}

for await (const file of srcFiles) {
  const fileName = file.match(/[^\/]*$/)[0]
  const fileNameNoExt = fileName.replace('.html', '')

  fs.readFile(file, 'utf-8', (err, data) => {
    if (err) throw err
    // console.log(file)

    const { code, map } = compile(data, {
      scopedCss: false
    })
    map.sources = [file.replace('src/', '../../')]
    map.file = fileName
    // console.log(code, map)

    // save the compiled code
    const dir = path.join(outputDir, `${fileNameNoExt}.js`, '')
    mkdirp(path.parse(dir).dir).then(() => {
      fs.writeFile(dir, code, (err) => {
        if (err) throw err
      })
    })

    // save the sourcemap
    const mapDir = path.join(outputDir, `${fileNameNoExt}.js.map`, '')
    mkdirp(path.parse(mapDir).dir).then(() => {
      // map を string に変換

      fs.writeFile(mapDir, JSON.stringify(map, null, 2), (err) => {
        if (err) throw err
      })
    })
  })
}
