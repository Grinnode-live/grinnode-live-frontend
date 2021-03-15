import Vue from 'vue';
import VueScrollTo from 'vue-scrollto'
import App from './App.vue';
import router from './router';
import vuetify from "@/plugins/vuetify";
import Vuetify from "vuetify";
import 'material-design-icons-iconfont/dist/material-design-icons.css'

// const HEALTH_CHECK_API_URL = 'https://grinnode.live:8080/healthcheck';
const HEALTH_CHECK_API_URL = 'http://172.104.134.155:3000/healthcheck';

const PEERS_API_URL = 'https://grinnode.live:8080/peers';
const AGENTS_API_URL = 'https://grinnode.live:8080/agents';
const IO_API_URL = 'https://grinnode.live:8080/io';

// const GLOBAL_HEALTH_CHECK_API_URL = 'https://grinnode.live:8080/globalhealthcheck';
const GLOBAL_HEALTH_CHECK_API_URL = 'http://172.104.134.155:3000/globalhealthcheck';
const GRIN_HEALTH_SCORE_URL = "http://172.104.134.155:3000/healthscore";

const shared = new Vue({
  data: {
    apiStatus: 'offline',
    globalHealthCheck: {
      checks: {
        lastUpdated: 0,
        result: {
          grinnode_live_api: false,
          grinnode_live_site: false,
          grinnode_wallet_api: false,
          grinnode_sync_1: false,
          grinnode_sync_2: false,
          grinnode_donation_wallet: false,
        }
      },
      downtimes: {
        lastUpdated: 0,
        result: [],
      },
    },
    peers: [],
    peersTime: 0,
    agents: [],
    agentsTime: 0,
    io: {
      lastUpdate: 0,
      result: {
        inbound: 0,
        outbound: 0
      }
    },
    grinHealthScoreData:{},
    currentBlockHeight:0,
    ioTime: 0,
    stickyNav: false,
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
    ioCheck() {
      let start_time = Date.now();
      fetch(IO_API_URL)
          .then(response => response.json())
          .then((result) => {
            let end_time = Date.now();
            let ping = Math.round((end_time - start_time)/2);
            this.ioTime = ping + 'ms';
            this.io = result;
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
    getGlobalHealthCheck() {
      fetch(GLOBAL_HEALTH_CHECK_API_URL)
          .then(response => response.json())
          .then((result) => {
            this.globalHealthCheck = result;
          });
    },
      getBlockHeight(){
          fetch("https://grinnode.live:3413/v2/owner",
              {
                  method: 'POST',
                  body: JSON.stringify({
                      "jsonrpc": "2.0",
                      "method": "get_status",
                      "params": [],
                      "id": 1
                  })
              })
              .then(response => response.json()).then( (data)=>{
                      if(data){
                          this.currentBlockHeight= data.result.Ok.tip.height;
                      }
                  });

      },
     getGrinHealthScore(){
        fetch(GRIN_HEALTH_SCORE_URL)
            .then(response=>response.json()
                .then(data=>{
                    this.grinHealthScoreData  = data;
                }));
     }
  },
  computed: {
    statusStyle() {
      return (this.$dao.apiStatus === 'online') ? ({ backgroundColor: 'rgb(5, 205, 30)' ,cursor:'pointer'}) : ({ backgroundColor: 'rgb(205, 5, 30)' ,cursor:'pointer'});
    },
  },
});

shared.install = function () {
  Object.defineProperty(Vue.prototype, '$dao', {
    get() { return shared; },
  });
};

Vue.use(Vuetify);
Vue.use(VueScrollTo)
Vue.use(shared);
Vue.config.productionTip = false;

new Vue({
  router,
    vuetify,
  render(h) { return h(App); },
}).$mount('#app');
