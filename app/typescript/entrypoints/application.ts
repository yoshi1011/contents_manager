// To see this message, add the following to the `<head>` section in your
// views/layouts/application.html.erb
//
//    <%= vite_client_tag %>
//    <%= vite_javascript_tag 'application' %>
import { Component, createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'

// Vuetify
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import '@mdi/font/css/materialdesignicons.css'

import App from './App.vue'

const mountApp = (component: component): void => {
  const vuetify = createVuetify({
    components,
    directives,
    icons: {
      defaultSet: 'mdi',
    },
  })
  const app = createApp(App)
  app.use(vuetify)
  app.component('Component', component)
  app.mount('#app')
}

const mountAppWithRouter = (component: Component, routes: { path: string; component: any }[]): void => {
  const vuetify = createVuetify({
    components,
    directives,
    icons: {
      defaultSet: 'mdi',
    },
  })
  const app = createApp(App)
  const router = createRouter({
    history: createWebHistory(),
    routes,
  })
  app.use(router)
  app.use(vuetify)
  app.component('Component', component)
  app.mount('#app')
}

export { mountApp, mountAppWithRouter }
