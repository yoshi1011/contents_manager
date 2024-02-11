import { type Component } from 'vue'
import { mountApp } from '../application.ts'
import Home from '../../components/pages/home/HomeView.vue'

mountApp(Home as Component)
