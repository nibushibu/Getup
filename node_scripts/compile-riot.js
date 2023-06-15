const fs = require('fs')
const path = require('path')
const { Glob } = require('glob')
const { mkdirp } = require('mkdirp')
import { compile } from '@riotjs/compiler'

console.log(process.argv)
