import { type Component, createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'

// Vuetify
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import '@mdi/font/css/materialdesignicons.css'

import App from '../components/pages/App.vue'

const mountApp = (component: Component): void => {
  const vuetify = createVuetify({
    components,
    directives,
    icons: {
      defaultSet: 'mdi'
    }
  })
  const app = createApp((App as Component), getDataJson())
  app.use(vuetify)
  app.component('CurrentPageComponent', component)
  app.mount('#app')
}

const mountAppWithRouter = (component: Component, routes: Array<{ path: string, component: any }>): void => {
  const vuetify = createVuetify({
    components,
    directives,
    icons: {
      defaultSet: 'mdi'
    }
  })
  const app = createApp((App as Component), getDataJson())
  const router = createRouter({
    history: createWebHistory(),
    routes
  })
  app.use(router)
  app.use(vuetify)
  app.component('CurrentPageComponent', component)
  app.mount('#app')
}

const getDataJson = (): string => {
  const element = document.getElementById('app')
  const data = element.getAttribute('data')
  if (data == null) {
    return {}
  }

  return JSON.parse(data)
}

export { mountApp, mountAppWithRouter }
