import { type Component, createApp } from 'vue'
import { getDataJson } from '../lib/utils.ts'

import App from '../components/pages/App.vue'
import { registerPlugins, registerPluginsWithRouter } from '../plugins'

const mountApp = (component: Component): void => {
  const app = registerPlugins(createApp((App as Component), getDataJson('app')))
  app.component('CurrentPageComponent', component)
  app.mount('#app')
}

const mountAppWithRouter = (component: Component, routes: Array<{ path: string, component: any }>): void => {
  const app = registerPluginsWithRouter(createApp((App as Component), getDataJson('app')), routes)
  app.component('CurrentPageComponent', component)
  app.mount('#app')
}

export { mountApp, mountAppWithRouter }
