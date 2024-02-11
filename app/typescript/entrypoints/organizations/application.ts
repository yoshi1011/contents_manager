import { type Component } from 'vue'
import { mountAppWithRouter } from '../application.ts'
import Organization from '../../components/pages/organizations/OrganizationRoot.vue'
import RegisterOrganization from '../../components/pages/organizations/new/RegisterOrganization.vue'
import OrganizationDetails from '../../components/pages/organizations/show/OrganizationDetails.vue'

const routes: Array<{ path: string, component: any }> = [
  { path: '/organization/new', component: RegisterOrganization },
  { path: '/organization/', component: OrganizationDetails }
]

mountAppWithRouter((Organization as Component), routes)
