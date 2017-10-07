import nodeResolve  from 'rollup-plugin-node-resolve'
import commonjs from 'rollup-plugin-commonjs'
import uglify from 'rollup-plugin-uglify-es'

export default {  
  input: 'src/js/vendor.js',
  output: {
    file: 'dist/js/vendor.js',
    format: 'iife'
  },
  name: 'main',
  sourcemap: true,
  plugins: [
    nodeResolve({ jsnext: true }),
    commonjs(),
    // uglify()
  ],
  external: [
    'jquery',
    'whatwg-fetch',
    'feature.js',
    'bootstrap',
    'promise-polyfill',
    'riot',
    'animejs',
    'p5',
    'scrollmagic',
    'slick-carousel'
  ],
  globals: {
    jquery: '$',
    jqyery: 'jQuery',
    riot: 'riot',
    p5: 'p5',
    slickCarousel: 'slick',
    promisePolyfill: 'Promise',
    scrollmagic: 'ScrollMagic',
    animejs: 'anime',
  }
}