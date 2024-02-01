import { mountAppWithRouter } from "../application.ts";
import Organization from "./Organization.vue";
import RegisterOrganization from "./register/RegisterOrganization.vue";

const routes: { path: string; component: any }[] = [
  { path: '/organizations/new', component: RegisterOrganization }
]

mountAppWithRouter(Organization, routes)
