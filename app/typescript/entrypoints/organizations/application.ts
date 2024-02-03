import { mountAppWithRouter } from "../application.ts";
import Organization from "../../components/pages/organizations/Organization.vue";
import RegisterOrganization from "../../components/pages/organizations/register/RegisterOrganization.vue";

const routes: { path: string; component: any }[] = [
  { path: '/organizations/new', component: RegisterOrganization }
]

mountAppWithRouter(Organization, routes)
