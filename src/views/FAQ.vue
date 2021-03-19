<template>

  <v-row>
    <v-col  cols="12"   align="center">
      <h1 class="text-h4 mb-6 "  >Frequently asked Questions</h1>
      <h4 class="text-h6 text-left grey--text">Table of Contents</h4>



      <v-list
          class="nav text-left">

        <v-list-group
            :value="true"
            no-action
            sub-group
        >
          <template v-slot:activator>
            <v-list-item link to="" v-scroll-to="'#faq-general'" >
              <v-list-item-title class="text-h6">
                <a >General questions</a>
              </v-list-item-title>
            </v-list-item>
          </template>


          <v-list-item link to="" v-scroll-to="'#faq-general-grin'">
            <v-list-item-action>
              <a >What is Grin?</a>
            </v-list-item-action>
          </v-list-item>

          <v-list-item link to="" v-scroll-to="'#faq-general-node'">
            <v-list-item-title>
              <a  >What is a grin node?</a>
            </v-list-item-title>
          </v-list-item>

          <v-list-item link to="" v-scroll-to="'#faq-general-motivation-grinnode-live'">
            <v-list-item-title >
              <a  class="text-wrap"   >
                <span >Can I use my wallet with a grinnode.live node instead of running my own?</span></a>
            </v-list-item-title>
          </v-list-item>

          <v-list-item link to="" v-scroll-to="'#faq-motivation-node'">
            <v-list-item-title>
              <a class="text-wrap">If grinnode.live can act as my node, why would I want to run my own?</a>
            </v-list-item-title>
          </v-list-item>


        </v-list-group>


        <v-list-group
            :value="true"
            no-action
            sub-group
        >

          <template v-slot:activator>
            <v-list-item link to="" v-scroll-to="'#faq-technical'">
              <v-list-item-title class="text-h6">
                <a  >Technical questions</a>
              </v-list-item-title>
            </v-list-item>
          </template>
          <v-list-item link to="" v-scroll-to="'#faq-technical-tor'">
            <v-list-item-title>
              <a  >Check TOR address</a>
            </v-list-item-title>
          </v-list-item>



          <v-list-item link to="" v-scroll-to="'#faq-tor-block'">
            <v-list-item-title>
              <a>Tor is blocked in my country, How can I send/receive grin?</a>
            </v-list-item-title>
          </v-list-item>

          <v-list-item link to="" v-scroll-to="'#faq-technical-node'">
            <v-list-item-title>
              <a  >How to run a Grin-Node?</a>
            </v-list-item-title>
          </v-list-item>

          <v-list-item link to="" v-scroll-to="'#faq-technical-uptime'">
            <v-list-item-title>
              <a class="text-wrap"  >How are we calculating your Grin-Node uptime?</a>
            </v-list-item-title>
          </v-list-item>

          <v-list-item link to="" v-scroll-to="'#faq-technical-public-api'">
            <v-list-item-title>
              <a >Public API</a>
            </v-list-item-title>
          </v-list-item>

          <v-list-item link to="" v-scroll-to="'#faq-technical-rank'">
            <v-list-item-title>
              <a  >Where can I see my Grin-Node rank?</a>
            </v-list-item-title>
          </v-list-item>

          <v-list-item link to=""  v-scroll-to="'#faq-technical-api-secret'">
            <v-list-item-title>
              <a  >Do I need an API secret?</a>
            </v-list-item-title>
          </v-list-item>


          <v-list-item link to="" v-scroll-to="'#faq-technical-debian-vps'">
            <v-list-item-title>
              <a class="text-wrap"  >How to install and run a Grin Node with a DebianVPS</a>
            </v-list-item-title>
          </v-list-item>


          <v-list-item link to="" v-scroll-to="'#faq-technical-ip-twice'">
            <v-list-item-title>
              <a  >Why is my IP address listed twice?</a>
            </v-list-item-title>
          </v-list-item>


        </v-list-group>

      </v-list>
      <h3 class="text-h4 grey--text text--darken-2   my-12"  id="faq-general">General questions</h3>

      <h3 class="text-h6 grey--text text--darken-3 my-2" id="faq-general-grin">What is Grin?</h3>
      <span class="">Grin is a privacy-preserving digital currency built openly by developers distributed all over the world. It provides electronic transactions for all without censorship or restrictions. <router-link to="/https://grin.mw/">official website</router-link> for more information.</span>

      <v-divider class="my-12"></v-divider>

      <h3 class="text-h6 grey--text text--darken-3 my-2" id="faq-general-node">What is a grin node?</h3>
      <span>The Grin digital currency is a decentralized network of grin nodes. Those are the entry points to the network. Whenever you want to submit a new transaction or even simply check your balance, you must connect to a synced node.</span>
      <v-divider class="my-12"></v-divider>

      <h3 class="text-h6 grey--text text--darken-3 my-2" id="faq-general-motivation-grinnode-live">Can I use my wallet with a grinnode.live node instead of running my own?</h3>
      <span>Yes! Check our <router-link to="/tutorials">tutorials page</router-link> for instructions.</span>


      <v-divider class="my-12"></v-divider>

      <h3 class="text-h6 grey--text text--darken-3 my-2" id="faq-motivation-node">If grinnode.live can act as my node, why would I want to run my own?</h3>
      <span>First of all, grinnode.live is a network of nodes run by other users, so if nobody wants to run own node and <router-link to="/tutorials" v-scroll-to="'#tutorial-node-connect'">connect it</router-link> then grinnode.live would not provide node to anyone. Second of all, running own node provides a lot more security and privacy. The more nodes the healthier Grin network is. Our project was never intended to be a default solution for everyone, rather a backup plan in case of problems with running own node or a quick start solution for new users.</span>

      <v-divider class="my-12"></v-divider>

      <h3 class="text-h4 grey--text text--darken-2   my-12"  id="faq-technical">Technical questions</h3>

      <h3 class="text-h6 grey--text text--darken-3 my-2" id="faq-technical-tor">Check TOR address  </h3>
      <span  >Check if the receiving TOR address is available. </span><br/>

        <v-form class="pt-4" @submit.prevent="checkWallet" >
          <v-text-field outlined :loading="is_checking"  v-model="wallet_address"   label="Enter wallet's address" />
        </v-form>
        <p class="success-message " v-if="walletCheckSuccess">Wallet is reachable and listening</p>
        <p class="error-message" v-if="walledCheckFail">Wallet address is not valid or not listening</p>
          <v-btn class="mt-2 mb-8" flat color="primary" @click.prevent="checkWallet"  >Check</v-btn>

      <ul  class="text-left mt-4">
        <li>via HTTP <a class="ml-4" href="https://grinchck.uber.space">https://grinchck.uber.space/ </a> </li>
        <li>via TOR <a class="ml-4" href="http://grinchck.ahcbagldgzdpa74g2mh74fvk5zjzpfjbvgqin6g3mfuu66tynv2gkiid.onion/">http://grinchck.ahcbagldgzdpa74g2mh74fvk5zjzpfjbvgqin6g3mfuu66tynv2gkiid.onion/</a>  </li>
      </ul>
      <p class="mt-4 caption">by: <a href="https://github.com/davidtavarez/grinaddresschecker">David Tavarez</a></p>

      <v-divider class="my-12"></v-divider>

      <h3 class="text-h6 grey--text text--darken-3 my-2" id="faq-tor-block">Tor is blocked in my country, How can I send/receive grin?</h3>
      <span >You can use bridges via Grin++ wallet to circumvent blockage on publicly listed tor nodes. More info on <a href="https://davidtavarez.github.io/2020/bypass-internet-censorship-and-filtering-grinplusplus/">David Tavarez's blog.</a></span>




      <v-divider class="my-12"></v-divider>


      <h3 class="text-h6 grey--text text--darken-3 my-2" id="faq-technical-node">How to run a Grin-Node?</h3>
      <span >There are different Grin-Nodes you can be running to participate in this challenge:</span>


      <ul   class="text-left mt-4 ">
        <li >Core Grin-Node Linux (<a  href="https://github.com/mimblewimble/docs/wiki/How-to-run-a-Grin-node">https://github.com/mimblewimble/docs/wiki/How-to-run-a-Grin-node</a>)</li>
        <li>Core Grin-Node Windows (<a href="https://github.com/MCM-Mike/grinnode.live/blob/master/documentation/node/winodws-how-to-run-node.md">https://github.com/MCM-Mike/grinnode.live/blob/master/documentation/node/winodws-how-to-run-node.md</a>)</li>
        <li>Core Grin-Node on Google-Cloud (<a href="https://github.com/mimblewimble/docs/wiki/How-to:-Run-a-Grin-node-on-Google-Cloud-for-free">https://github.com/mimblewimble/docs/wiki/How-to:-Run-a-Grin-node-on-Google-Cloud-for-free</a>)</li>
        <li><a href="https://grinplusplus.github.io/#/" target="_blank">Grin++</a></li>
      </ul>


      <v-divider class="my-12"></v-divider>

      <h3  class="text-h6 grey--text text--darken-3 my-2" id="faq-technical-uptime">How are we calculating your Grin-Node uptime?</h3>
      <span>We are querying our publicly available Grin-API <router-link exact to="/home">https://grinnode.live</router-link> every 10 minutes. These results will be stored in a database and compared.</span>


      <v-divider class="my-12"></v-divider>

      <h3 class="text-h6 grey--text text--darken-3 my-2" id="faq-technical-public-api">Public API</h3>
      <ul class="text-left">
        <li> HEALTH_CHECK_API_URL : <a href="https://grinnode.live:8080/healthcheck"> https://grinnode.live:8080/healthcheck </a></li>
        <li> PEERS_API_URL : <a href="https://grinnode.live:8080/peers">https://grinnode.live:8080/peers </a></li>
        <li> AGENTS_API_URL : <a href="https://grinnode.live:8080/agents">https://grinnode.live:8080/agents</a></li>
        <li> HEALTHSCORE_API_URL : <a href="https://grinnode.live:8080/healthscore">https://grinnode.live:8080/healthscore</a></li>
        <li> PEERSCOUNTRIES_API_URL : <a href="https://grinnode.live:8080/peerscountries">https://grinnode.live:8080/peerscountries</a></li>
        <li> WALLETCHECK_API_URL : <a href="https://grinnode.live:8080/walletcheck/cgodjue5g7ebqv3bgrt6sfwbvq4ricibnxjwkqimu2apbdyn7c752iyd">https://grinnode.live:8080/walletcheck/your_wallet_address_</a></li>

      </ul>

      <v-divider class="my-12"></v-divider>
      <h3 class="text-h6 grey--text text--darken-3 my-2" id="faq-technical-rank">Where can I see my Grin-Node rank?</h3>
      <span>You can view the current leaderboard <router-link exact to="/challenge">here</router-link>.</span>


      <v-divider class="my-12"></v-divider>

      <h3 class="text-h6 grey--text text--darken-3 my-2" id="faq-technical-api-secret">Do I need an API secret?</h3>
      <span>No. All API's can be used without any API secret or owner secrets. No basic-auth must be set to use it. </span>
      <v-divider class="my-12"></v-divider>



      <h3 class="text-h6 grey--text text--darken-3 my-2" id="faq-technical-debian-vps">How to install and run a Grin Node with a DebianVPS</h3>
      <span>Tutorial: <a href="https://medium.com/@28e6d94f/how-to-install-and-run-a-grin-node-with-a-debianvps-dab8dcbe88d8">https://medium.com/@28e6d94f/how-to-install-and-run-a-grin-node-with-a-debianvps-dab8dcbe88d8</a> </span>

      <v-divider class="my-12"></v-divider>

      <h6 class="text-h6 grey--text text--darken-3 mt-2 mb-4" id="faq-technical-ip-twice">Why is my IP address listed twice?</h6>

      <v-card outlined dark  color="grey darken-3" class="px-4 py-2 mb-4">
        <div class="code text-left">
          <span class=""> [::ffff:213.239.215.236]:3414</span><br/>
        </div>
      </v-card>

      <span>This means your Grin-Node is connected to us as an inbound peer.</span>

      <v-card outlined dark  color="grey darken-3" class="px-4 py-2 my-4">
        <div class="code text-left">
          <span class=""> 213.239.215.236:3414</span><br/>
        </div>
      </v-card>

      <span> This means your Grin-Node is connected to us as an outbound peer.</span><br/> <br/>
      <span >Your highest Average Uptime will win.</span>



    </v-col>
  </v-row>


</template>

<script>
export default {
  name: "FAQ",
  data(){
    return {
      text:'',
      wallet_address:"",
      is_wallet_valid:"",
      is_checking:false
    }
  },
  methods:{

    checkWallet(){

      this.is_wallet_valid="";

      if (this.wallet_address.length>0){
        this.is_checking=true;
          // remove .onion from end of string
          if (this.wallet_address.endsWith(".onion")){
            this.wallet_address = this.wallet_address.replace(".onion","");
          }

          // If user enters an ordinary url, check stucks so it needs to be removed
          this.wallet_address = this.wallet_address.replace("http://","").replace("https://","").replace("/")

          fetch("http://172.104.134.155:3000/walletcheck/"+ this.wallet_address).then(response => response.json())
            .then((result) => {
              if(result.isWalletValid){
                  this.is_wallet_valid = "success";
              }else{
                this.is_wallet_valid = "fail";
              }
              this.is_checking=false;
            }).catch((err)=>{
              console.error(err);
              this.is_wallet_valid = "error"
              this.is_checking=false;
          });
      }else{
        this.is_wallet_valid = "";
        this.is_checking=false;
      }
    }
  },
  computed:{
    walletCheckSuccess(){
       return this.is_wallet_valid==='success';
    },
    walledCheckFail() {
      return this.is_wallet_valid === 'fail'
    }

  }
}
</script>

<style scoped>

.success-message{
  border: green solid thin;
  border-radius: 4px;
  color: green;
  /*background-color: darkgreen;*/
  font-size: larger;
  width: 50%;
  padding:6px;
  cursor:default;
}

.error-message{
  border:  red solid thin;
  border-radius: 4px;
  color:  red;
  /*background-color: orangered;*/
  font-size: larger;
  width: 50%;
  padding:6px;
  cursor:default;
}

ul{
  list-style: none;
}

</style>
