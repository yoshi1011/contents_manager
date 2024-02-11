import { mountAppWithRouter } from "../application.ts";
import Organization from "../../components/pages/organizations/Organization.vue";
import RegisterOrganization from "../../components/pages/organizations/new/RegisterOrganization.vue";
import OrganizationDetails from "../../components/pages/organizations/show/OrganizationDetails.vue";

const routes: { path: string; component: any }[] = [
  { path: '/organization/new', component: RegisterOrganization },
  { path: '/organization/', component: OrganizationDetails }
]

mountAppWithRouter(Organization, routes)
