import type App from '../components/pages/App.vue'
import vuetify from './vuetify.ts'
import { createRouter, createWebHistory } from 'vue-router'

export const registerPlugins = (app: App<Element>): App<Element> => {
  app.use(vuetify)
  return app
}

export const registerPluginsWithRouter = (app: App<Element>, routes: Array<{ path: string, component: any }>): App<Element> => {
  const router = createRouter({
    history: createWebHistory(),
    routes
  })
  app.use(router)
  app.use(vuetify)
  return app
}
