import nodeResolve  from 'rollup-plugin-node-resolve'
import commonjs from 'rollup-plugin-commonjs'
import buble from 'rollup-plugin-buble'
import riot from 'rollup-plugin-riot'
import uglify from 'rollup-plugin-uglify-es'

export default {  
  input: 'src/js/main.js',
  output: {
    file: 'dist/js/main.js',
    format: 'iife'
  },
  // external: [
  //   'jquery',
  //   'whatwg-fetch',
  //   'feature.js',
  //   'bootstrap',
  //   'promise-polyfill',
  //   'riot',
  //   'animejs',
  //   'p5',
  //   'scrollmagic',
  //   'slick-carousel'
  // ],
  // globals: {
  //   jquery: '$',
  //   jqyery: 'jQuery',
  //   riot: 'riot',
  //   p5: 'p5',
  //   slick: 'slickCarousel',
  //   Promise: 'promisePolyfill',
  //   scrollmagic: 'ScrollMagic',
  //   animejs: 'anime',
  // },
  name: 'main',
  sourcemap: true,
  plugins: [
    riot({
      style: 'scss'
    }),
    nodeResolve({ jsnext: true }),
    commonjs(),
    buble({
      exclude: 'node_modules/**'
    }),
    uglify()
  ]
}