import Vue from 'vue';
import App from './App.vue';
import router from './router';

const HEALTH_CHECK_API_URL = 'https://grinnode.live:8080/healthcheck';
const PEERS_API_URL = 'https://grinnode.live:8080/peers';
const AGENTS_API_URL = 'https://grinnode.live:8080/agents';

const shared = new Vue({
  data: {
    apiStatus: 'offline',
    peers: [],
    peersTime: 0,
    agents: [],
    agentsTime: 0,
  },
  methods: {
    healthCheck() {
      fetch(HEALTH_CHECK_API_URL)
          .then(response => response.json())
          .then((result) => {
            this.apiStatus = 'offline';
            if (result.ok) this.apiStatus = 'online';
          });
    },
    getPeers() {
      let start_time = Date.now();
      fetch(PEERS_API_URL)
          .then(response => response.json())
          .then((result) => {
            let end_time = Date.now();
            let ping = Math.round((end_time - start_time)/2);
            this.peersTime = ping + 'ms';
            this.peers = result;
          });
    },
    getAgents() {
      let start_time = Date.now();
      fetch(AGENTS_API_URL)
          .then(response => response.json())
          .then((result) => {
            let end_time = Date.now();
            let ping = Math.round((end_time - start_time)/2);
            this.agentsTime = ping + 'ms';
            this.agents = result;
          });
    },
  },
  computed: {
    statusStyle() {
      return (this.$dao.apiStatus === 'online') ? ({ backgroundColor: 'rgb(5, 205, 30)' }) : ({ backgroundColor: 'rgb(205, 5, 30)' });
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
