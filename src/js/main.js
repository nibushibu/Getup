import 'core-js/stable'
import '@webcomponents/template'
import { register, mount, install } from 'riot'

import App from './components/src/riot/my-app.js'
register('my-app', App)

import RawHtml from './components/src/riot/raw-html.js'
register('raw-html', RawHtml)

mount('[data-riot]')
