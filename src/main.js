import Vue from 'vue';
import App from './App.vue';
import router from './router';

const PEERS_API_URL = 'https://grinnode.live:8080/peers';
const AGENTS_API_URL = 'https://grinnode.live:8080/agents';

const shared = new Vue({
  data: {
    peers: [],
    agents: [],
  },
  methods: {
    getPeers() {
      fetch(PEERS_API_URL)
          .then(response => response.json())
          .then((result) => {
            this.peers = result;
          });
    },
    getAgents() {
      fetch(AGENTS_API_URL)
          .then(response => response.json())
          .then((result) => {
            this.agents = result;
          });
    },
  },
});

shared.install = function () {
  Object.defineProperty(Vue.prototype, '$dao', {
    get() { return shared; },
  });
};

Vue.use(shared);
Vue.config.productionTip = false;

new Vue({
  router,
  render(h) { return h(App); },
}).$mount('#app');
