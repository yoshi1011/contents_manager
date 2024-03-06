import { type Component, createApp } from 'vue'

import App from '../components/pages/App.vue'
import { registerPlugins, registerPluginsWithRouter } from '../plugins'

const mountApp = (component: Component): void => {
  const app = registerPlugins(createApp((App as Component), getDataJson()))
  app.component('CurrentPageComponent', component)
  app.mount('#app')
}

const mountAppWithRouter = (component: Component, routes: Array<{ path: string, component: any }>): void => {
  const app = registerPluginsWithRouter(createApp((App as Component), getDataJson()), routes)
  app.component('CurrentPageComponent', component)
  app.mount('#app')
}

const getDataJson = (): string => {
  const element = document.getElementById('app')
  const data = element.getAttribute('data')
  if (data == null) {
    return '{}'
  }

  return JSON.parse(data)
}

export { mountApp, mountAppWithRouter }
