// @ts-check
import anime from './anime.es.js'
import MyApp from './my-app.riot.js'
import RawHtml from './raw-html.riot.js'
import UiIcon from './ui-icon.riot.js'

/* eslint-disable no-undef */
// @ts-ignore
riot.register('my-app', MyApp)
// @ts-ignore
riot.register('raw-html', RawHtml)
// @ts-ignore
riot.register('ui-icon', UiIcon)
/* eslint-enable no-undef */

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

// @ts-ignore
// eslint-disable-next-line no-undef
riot.install((component) => {
  component.getObjectFromLocationSearch = getObjectFromLocationSearch
  component.classNames = classNames
  component.styleAttribute = styleAttribute
  component.id = instanceId++
  component.anime = anime

  return component
})

// @ts-ignore
// eslint-disable-next-line no-undef
riot.mount('[data-riot]')
