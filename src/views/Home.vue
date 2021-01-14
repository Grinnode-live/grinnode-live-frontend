<template>


  <v-row class="text-center">
    <v-col cols="10" offset="1">
      <h1 class="text-h4 mb-6 text-center ">Grinnode.live high-available GRIN-API & Sync-Service</h1>
      <p class="text-justify">Grin is a privacy-preserving digital currency built openly by developers distributed all
        over the world. The grin network consists of <a
            href="https://github.com/mimblewimble/docs/wiki/How-to-run-a-Grin-node">nodes</a> processing transaction
        requests and forwarding them to the <a
            href="https://github.com/mimblewimble/docs/wiki/How-to-mine-Grin">miners</a>. Without access to a running
        node you cannot access the grin network, which is required for example for syncing your <a
            href="https://github.com/mimblewimble/docs/wiki/How-to-use-the-Grin-wallet">grin-wallet</a>.</p>

      <p class="text-justify">We needed a grin-node running 24/7 for our own purposes and eventually we setup a series
        of nodes and connected them together. Project went public and new features such as API access and CORE GRIN_DNS
        Seeds have been added. To encourage growth of this network we even organized a
        <router-link exact :to="{name: 'challenge'}">uptime challenge</router-link>
        . This is the brief story behind the grinnode.live project, a high-available API and Sync-Service for Grin
        digital currency.
      </p>

      <p class="text-justify pb-6">If you are a Grin beginner and don't yet have your own node up and running feel free
        to use this service to
        <router-link :to="{name: 'tutorials', hash: '#tutorial-wallet-connect'}">connect and sync your Grin wallet
        </router-link>
        . Keep in mind having your own node provides you with better security and privacy so long term you should
        consider setting it up. If you already have your node up and running consider
        <router-link :to="{name: 'tutorials', hash: '#tutorial-node-connect'}">joining our node network</router-link>
        . More examples of usage are available on the
        <router-link exact :to="{name: 'tutorials'}">tutorials page</router-link>
        . If you have questions make sure you check the
        <router-link exact :to="{name: 'faq'}">frequently asked questions page</router-link>
        and if you don't find answers check the
        <router-link exact :to="{name: 'contact'}">contact page</router-link>
        and reach us!
      </p>
      <v-divider class="mt-6"></v-divider>
<!--      UPDATES-->
      <h2 class="text-h4 mt-12 mb-6 text-center">Updates</h2>

      <h6 class="text-h6 mb-3 grey--text">01/2021</h6>
      <p>
        The Grinnode.live Winter 2020 Bug Bash Challenge has concluded. After two weeks of work, 9 testers have performed 50 tests. No critical security vulnerabilities have been discovered during the tests. We distributed the overall of €2,070.00 EUR in BTC/Grin! For more details please visit <a href="/challenge/0">page! </a>

      </p>

      <h6 class="text-h6 mb-3 grey--text">12/2020</h6>
      <p>Grinnode.live Winter 2020 Bug Bash Challenge has begun with lots of prizes and giveaways. Both new and experienced users are welcome to participate.
        Visit our <a href="https://github.com/Grinnode-live/2020-grin-bug-bash-challenge">github page</a> for details.</p>

      <p>Grinnode.live is updated to a responsive design with interactive data tables. </p>

      <h6 class="text-h6 mt-12 mb-3 grey--text">07/2020</h6>
      <p> All our Grin-Nodes will be upgraded to <a href="https://github.com/mimblewimble/grin/tree/current/4.0.x">Grin-Node
        version 4.0.x</a></p>

      <p><strong>We will deprecate the APIv1 prior to the next Hardfork v5.0.x</strong></p>

      <v-card elevation="0" id="hardforkclock">
        <flip-countdown deadline="2021-01-17 02:37:00"></flip-countdown>
        <p class="text-center text-h5 ">

          <span style="color:var(--v-primary-base);">{{ 1048320 - current_height }} </span> blocks remaining...</p>


      </v-card>


      <h6 class="text-h6 mt-12 mb-3 grey--text">05/2020</h6>
      <p>Grinnode.live is now part of the Grin-Node DNS Seed list:<a
          href="https://github.com/mimblewimble/grin/pull/3282"> pull request</a></p>
      <p>Added Seed-Node: "mainnet-seed.grinnode.live" (29.03.2020) </p>
      <p>We enabled GRIN API v2 on our high-available GRIN-Node's</p>
      <p>new Website done by <a href="https://github.com/WarmBeer/">@WarmBeer</a>, <a
          href="https://github.com/stakervali">@StakerVali</a>
        &nbsp;
      <p style="text-decoration: underline;">Use Blocks not Bombs</p>
      <p><img width="200" height="190" src="images/blocks-not-bombs-512.jpg" alt="Use Blocks not Bombs "/></p>

    </v-col>

  </v-row>


</template>

<script>
import FlipCountdown from 'vue2-flip-countdown'


export default {
  name: "Home",
  components: {
    FlipCountdown
  },
  data: function () {
    return {
      current_height: 0,
      number_of_testers:32,
      number_of_tests:57,
      overall_prize:120,

    }
  },
  mounted() {
    this.updateRemainingBlocks();
    setInterval(this.updateRemainingBlocks, 15000);
  },
  methods: {
    updateRemainingBlocks() {
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
          .then(response => {

            response.json().then(data=>{
              if(data){
                this.current_height = data.result.Ok.tip.height;
              }
            })
          });
    }
  }


}
</script>

<style scoped>
ul {
  list-style: inside;
}
</style>
