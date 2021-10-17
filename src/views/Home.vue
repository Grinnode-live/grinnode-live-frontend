<template>


  <v-row class="text-center">

    <v-col col="12">

      <v-banner elevation="0"  app outlined color="#1CBDFF" dark  transition="slide-y-transition" shaped v-model="banner">

        <h4 class="text-h5 ">

          Update on transfer of  grinmint  ownership

        </h4>


        <blockquote class="pt-6 pb-0 mx-6 text-justify">
          <p>
            Acquisition  of <a style="color:white" href="https://grinmint.com/"> grinmint </a>  by Grinnode.live is expected to close by the end of 2021. Grinnode.live is a high-available public and free API service which aims to help the grin community and enhance the grin ecosystem since 2019. We are excited about this move and will continue investing in the improvement of grinmint services.
          </p>
          <p>We would like to invite goblinpool users to try our service not only for reliable servers and profitable mining rewards but a decentralized and healthy grin ecosystem.</p>

          <p class="text-right"> Grinnode.live  </p>


        </blockquote>

<!--        <template v-slot:actions="{ dismiss }">-->
<!--          <v-btn text color="primary" @click="dismiss">Dismiss</v-btn>-->

<!--        </template>-->
      </v-banner>
    </v-col>

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

      <h6 class="text-h6 mb-3 grey--text">08/2021</h6>
      <h6 class="text-h6 grey--text text--darken-2 " >API endpoint for block height</h6>
      <p>
        We have added a new endpoint for block height of grin chain and current emission. There may be a latency for up to 30 minutes, like all other endpoints, there is a timestamp field in the api response.
      </p>

      <h6 class="text-h6 mb-3 grey--text">07/2021</h6>
      <h6 class="text-h6 grey--text text--darken-2 " >Wallet address check</h6>
      <p>
        We have updated wallet address check tool for better usability, now you can enter directly your grin wallet address starting with <i>grin1...</i>. Current grin emmission is presented besides block height on stats page. Also you can share info on grinnode.live tutorials and faq pages with  <v-icon>M3.9,12C3.9,10.29 5.29,8.9 7,8.9H11V7H7C4.24,7 2,9.24 2,12C2,14.76 4.24,17 7,17H11V15.1H7C5.29,15.1 3.9,13.71 3.9,12M8,13H16V11H8V13M17,7H13V8.9H17C18.71,8.9 20.1,10.29 20.1,12C20.1,13.71 18.71,15.1 17,15.1H13V17H17C19.76,17 22,14.76 22,12C22,9.24 19.76,7 17,7Z</v-icon> buttons.
      </p>

      <h6 class="text-h6 mb-3 grey--text">04/2021</h6>
      <h6 class="text-h6 grey--text text--darken-2 " >Health score</h6>
      <p>
        We are happy to announce that grinnode.live is updated with new health score API and much more. You can read the details <a href="https://grinnode-live.medium.com/grinnode-live-new-site-update-with-health-score-api-world-map-more-1050ad5c74ea"> here</a>.

      </p>

      <h6 class="text-h6 mb-3 grey--text">01/2021</h6>
        <h6 class="text-h6 grey--text text--darken-2 " >Grin 5.0 network upgrade</h6>
      <p>
         Grin network reached block height of 1,048,320 which was set as a target for Hard Fork 4. New upgrade brings better transcation fee calculation and difficulty adjustment algorithm. Please note that Grin API v1 is depreceated, users should move to <a href="https://github.com/mimblewimble/grin-rfcs/blob/master/text/0007-node-api-v2.md">Grin API v2. </a>.
      </p>
      <h6 class="text-h6 grey--text text--darken-2" >Grinnode.live Winter 2020 Bug Bash Challenge </h6>
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



export default {
  name: "Home",
  components: {

  },
  data: function () {
    return {
      current_height: 0,
      number_of_testers:32,
      number_of_tests:57,
      overall_prize:120,
      deadlineEpoch:0,
      deadline:"2021-01-16 02:48:00"

    }
  },
  computed:{

    // deadline: function(){
    //
    //
    //   let remainingBlockCount = 0;
    //   if(current_height>0){
    //     remainingBlockCount = 1048320- blockHeight;
    //   }
    //   let t =   new Date(Date.now()+ remainingBlockCount*60000) ;
    //   console.log(t);
    //   //2021-01-16 02:48:00
    //   let tarih = `${t.getFullYear()}-${t.getMonth()+1}-${t.getDay()} ${t.getHours()}:${t.getMinutes()}:${t.getSeconds()}`
    //   console.log(tarih);
    //   return tarih;
    // }
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

                let newDeadlineEpoch = new Date().getTime() + ( 1048320-this.current_height) *60000;
                if (Math.abs(newDeadlineEpoch-this.deadlineEpoch)>1000*30){
                    this.deadlineEpoch = newDeadlineEpoch;
                    let t = new Date(this.deadlineEpoch);
                    this.deadline = `${t.getFullYear()}-${t.getMonth()+1}-${t.getDate()} ${t.getHours()}:${t.getMinutes()}:${t.getSeconds()}`;
                }
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
