import anime from './anime.es.js'

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

riot.install((component) => {
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

riot.compile().then(() => {
  riot.mount('[data-riot]')
})
