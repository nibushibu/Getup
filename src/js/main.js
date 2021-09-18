import 'core-js'
import '@webcomponents/template'
import { register, mount, install } from 'riot'

import App from './components/src/riot/my-app.js'
import RawHtml from './components/src/riot/raw-html.js'

register('my-app', App)
register('raw-html', RawHtml)

install((component) => {
  /**
   * GETパラメーターをObjectとして返す関数
   * @return {object}
   */
  component.getObjectFromLocationSearch = () => {
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

  return component
})

mount('[data-riot]')
