import { register, mount, install } from 'riot'
import App from '../riot/my-app.riot'

register('my-app', App)

mount('#my-app')