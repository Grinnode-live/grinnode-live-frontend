import Vue from 'vue';
import VueRouter from 'vue-router';
import GrinnodeHome from '../views/GrinnodeHome.vue';
import GrinnodeTutorials from "@/views/GrinnodeTutorials";
import GrinnodeChallenge from "@/views/GrinnodeChallenge";
import GrinnodeStats from "@/views/GrinnodeStats";
import FAQ from "@/views/FAQ";
import GrinnodeContact from "@/views/GrinnodeContact";
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
    component: GrinnodeHome,
  },
  {
    path: '/tutorials',
    name: 'tutorials',
    component: GrinnodeTutorials,
  },
  {
    path: '/challenge/:tabid?',
    name: 'challenge',
    component: GrinnodeChallenge,
  },
  {
    path: '/stats',
    name: 'stats',
    component: GrinnodeStats,
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
  {
    path: '/contact',
    name: 'contact',
    component: GrinnodeContact,
  },
];

const router = new VueRouter({
  base: SITE_SUB_FOLDER,
  scrollBehavior (to, from, savedPosition) {
    if (to.hash) {
      return document.querySelector(to.hash).scrollIntoView({ behavior: 'smooth' });
    } else {
      return savedPosition || { x: 0, y: 0 }
    }
  },
  mode: 'history',
  routes,
});

export default router;
