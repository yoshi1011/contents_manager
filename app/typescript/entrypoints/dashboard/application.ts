import { type Component } from 'vue'
import { mountApp } from '../application.ts'
import DashboardView from '../../components/pages/dashborad/DashboardView.vue'

mountApp(DashboardView as Component)
