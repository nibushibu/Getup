// @ts-check
import MyApp from './components/my-app.js'
import RawHtml from './components/raw-html.js'
import UiIcon from './components/ui-icon.js'
import define from '@riotjs/custom-elements'

// @ts-ignore
define('my-app', MyApp)
// @ts-ignore
define('raw-html', RawHtml)
// @ts-ignore
define('ui-icon', UiIcon)

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
  return (
    Object.entries(classes)
      // @ts-ignore
      .reduce((acc, item) => {
        const [key, value] = item
        if (value) return [...acc, key]
        return acc
      }, [])
      .join(' ')
  )
}

/**
 * Convert object attributes constructs into strings
 * @param   {Object} attributes - style attributes as object
 * @returns {string} a string with all the attributes and their values
 */
function styleAttribute(attributes) {
  return (
    Object.entries(attributes)
      // @ts-ignore
      .reduce((acc, item) => {
        const [key, value] = item
        return [...acc, `${key}: ${value}`]
      }, [])
      .join(';')
  )
}

/**
 * @type {number} インスタンスのID
 */
let instanceId = 0

const rootPath = '/'
