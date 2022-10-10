import { register, mount, install } from 'riot'
import App from './components/src/riot/my-app.riot.js'
import RawHtml from './components/src/riot/raw-html.riot.js'
import ParentTag from './components/src/riot/parent-tag.riot.js'
import ChildTag from './components/src/riot/child-tag.riot.js'
import ChildTag2 from './components/src/riot/child-tag-2.riot.js'
import anime from '../../node_modules/animejs/lib/anime.es.js'

// @ts-ignore
register('my-app', App)
// @ts-ignore
register('raw-html', RawHtml)
// @ts-ignore
register('parent-tag', ParentTag)
// @ts-ignore
register('child-tag', ChildTag)
// @ts-ignore
register('child-tag-2', ChildTag2)

/**
 * GETパラメーターをObjectとして返す関数
 * @return {object}
 */
function getObjectFromLocationSearch() {
  const paramsString = window.location.search.replace('?', '')
  if (!paramsString) return {}
  const paramsArray = paramsString.split('&')
  const resultObject = {}
  paramsArray.forEach((param) => {
    const array = param.split('=')
    resultObject[array[0]] = array[1]
  })
  return resultObject
}

/**
 * Convert object class constructs into strings
 * @param   {Object} classes - class list as object
 * @returns {string} return only the classes having a truthy value
 */
function classNames(classes) {
  return Object.entries(classes)
    .reduce((acc, item) => {
      const [key, value] = item
      if (value) return [...acc, key]
      return acc
    }, [])
    .join(' ')
}

/**
 * Convert object attributes constructs into strings
 * @param   {Object} attributes - style attributes as object
 * @returns {string} a string with all the attributes and their values
 */
function styleAttribute(attributes) {
  return Object.entries(attributes)
    .reduce((acc, item) => {
      const [key, value] = item
      return [...acc, `${key}: ${value}`]
    }, [])
    .join(';')
}

/**
 * @type {number} インスタンスのID
 */
let instanceId = 0

install((component) => {
  // @ts-ignore
  component.getObjectFromLocationSearch = getObjectFromLocationSearch
  // @ts-ignore
  component.classNames = classNames
  // @ts-ignore
  component.styleAttribute = styleAttribute
  // @ts-ignore
  component.id = instanceId++
  // @ts-ignore
  component.anime = anime

  return component
})

mount('[data-riot]')
