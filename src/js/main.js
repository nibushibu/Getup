import '@webcomponents/template'
import { register, mount, install } from 'riot'

import App from './components/my-app.js'
register('my-app', App)

import RawHtml from './components/raw-html.js'
register('raw-html', RawHtml)

mount('[data-riot]')