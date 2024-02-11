import { type Component } from 'vue'
import { mountApp } from '../entrypoints/application.ts'
import Login from '../../components/pages/login/LoginView.vue'

mountApp(Login as Component)
