import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import Challenge from "@/views/Challenge";
import Stats from "@/views/Stats";
import FAQ from "@/views/FAQ";
import ToS from "@/views/ToS";
import PrivacyPolicy from "@/views/PrivacyPolicy";
import GlobalHealthCheck from "@/views/GlobalHealthCheck";

const SITE_SUB_FOLDER = process.env.NODE_ENV === 'production'
    ? (process.env.SITE_SUB_FOLDER || '/')
    : '/';

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
  {
    path: '/global-health-check',
    name: 'ghc',
    component: GlobalHealthCheck,
  },
];

const router = new VueRouter({
  base: SITE_SUB_FOLDER,
  scrollBehavior() {
    return { x: 0, y: 0 };
  },
  mode: 'history',
  routes,
});

export default router;
