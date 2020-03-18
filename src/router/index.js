import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import Challenge from "@/views/Challenge";
import Stats from "@/views/Stats";
import FAQ from "@/views/FAQ";
import ToS from "@/views/ToS";
import PrivacyPolicy from "@/views/PrivacyPolicy";

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
  },
  {
    path: '/challenge',
    name: 'challenge',
    component: Challenge,
  },
  {
    path: '/stats',
    name: 'stats',
    component: Stats,
  },
  {
    path: '/faq',
    name: 'faq',
    component: FAQ,
  },
  {
    path: '/terms-of-service',
    name: 'tos',
    component: ToS,
  },
  {
    path: '/privacy-policy',
    name: 'pos',
    component: PrivacyPolicy,
  },
];

const router = new VueRouter({
  mode: 'history',
  routes,
});

export default router;
