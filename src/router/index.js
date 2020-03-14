import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import Challenge from "@/views/Challenge";

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
];

const router = new VueRouter({
  mode: 'history',
  routes,
});

export default router;
