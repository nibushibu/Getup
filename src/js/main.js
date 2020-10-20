import 'core-js'
import '@webcomponents/template'
import { register, mount, install } from 'riot'
import App from './components/my-app.js'

register('my-app', App)

mount('#my-app')