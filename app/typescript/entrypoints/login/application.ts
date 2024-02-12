import { type Component } from 'vue'
import { mountApp } from '../application.ts'
import LoginView from '../../components/pages/login/LoginView.vue'

mountApp(LoginView as Component)
