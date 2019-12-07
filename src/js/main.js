import { register, mount, install } from 'riot'
import { route, router } from '@riotjs/route'
import App from '../riot/my-app.riot'

register('my-app', App)

mount('#my-app')