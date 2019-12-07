import { register, mount, install } from 'riot'
import { Route, Router } from '@riotjs/route'
import App from '../riot/my-app.riot'

register('my-app', App)
register('app-route', Route)
register('app-router', Router)

mount('#my-app')