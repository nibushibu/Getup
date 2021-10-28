import 'core-js'
import '@webcomponents/template'
import { register, mount, install } from 'riot'

import App from './components/src/riot/my-app.js'
import RawHtml from './components/src/riot/raw-html.js'

register('my-app', App)
register('raw-html', RawHtml)

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

install((component) => {
  component.getObjectFromLocationSearch = getObjectFromLocationSearch
  component.classNames = classNames
  component.styleAttribute = styleAttribute
  return component
})

mount('[data-riot]')
