import 'core-js'
import '@webcomponents/template'
import * as riot from 'riot'
import App from '../riot/my-app.riot'
import SmileFace from '../riot/smile-face.riot'
import RawHtml from '../riot/raw-html.riot'

riot.register('my-app', App)
riot.register('smile-face', SmileFace)
riot.register('raw-html', RawHtml)

riot.mount('#my-app')