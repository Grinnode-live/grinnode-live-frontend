<template>
  <v-row>
    <v-col cols="12">
      <h1 class="text-h4 text-center mb-6">Tutorials</h1>


      <v-list class="nav text-left">

        <v-list-group
            :value="true"
            no-action
            sub-group
        >
          <template v-slot:activator>
            <v-list-item link to="" v-scroll-to="'#tutorial-grinnode'">
              <v-list-item-title class="text-h6">
                <a>How to use Grinnode.live</a>
              </v-list-item-title>
            </v-list-item>
          </template>

          <v-list-item link to="" v-scroll-to="'#tutorial-wallet-connect'">
            <v-list-item-title>
              <a>Connect your GRIN-Wallet to
                Grinnode.live
              </a>
            </v-list-item-title>
          </v-list-item>

          <v-list-item link to="" v-scroll-to="'#tutorial-seed'">
            <v-list-item-title>
              <a>Use Grinnode.live High-Available
                Seed-Node
              </a>
            </v-list-item-title>
          </v-list-item>

          <v-list-item link to="" v-scroll-to="'#tutorial-node-connect'">
            <v-list-item-title>
              <a>Connect your GRIN-Node to
                Grinnode.live
              </a>
            </v-list-item-title>
          </v-list-item>

          <v-list-item link to="" v-scroll-to="'#tutorial-api-examples'">
            <v-list-item-title>
              <a>Public Grinnode.live API
                examples
              </a>
            </v-list-item-title>
          </v-list-item>


          <!--            <li><router-link to="" v-scroll-to="'#tutorial-wallet-connect'">Connect your GRIN-Wallet to Grinnode.live</router-link></li>-->
          <!--            <li><router-link to="" v-scroll-to="'#tutorial-seed'">Use Grinnode.live High-Available Seed-Node</router-link></li>-->
          <!--            <li><router-link to="" v-scroll-to="'#tutorial-node-connect'">Connect your GRIN-Node to Grinnode.live</router-link></li>-->
          <!--            <li><router-link to="" v-scroll-to="'#tutorial-api-examples'">Public Grinnode.live API examples</router-link></li>-->


        </v-list-group>


        <v-list-group
            no-action
            sub-group
            prepend-icon=""

        >
          <template v-slot:activator>
            <v-list-item link to="" v-scroll-to="'#tutorial-api-documentation'">
              <v-list-item-title class="text-h6">
                <a>GRIN API documentation</a>
              </v-list-item-title>
            </v-list-item>
          </template>


        </v-list-group>

      </v-list>


    </v-col>

    <v-col cols="12" offset="0" align="center">

      <h2 class="text-h4   my-12" id="tutorial-grinnode">
        How to use Grinnode.live
      </h2>


      <h3 class="text-h6 grey--text text--darken-2 text-left my-4" id="tutorial-wallet-connect">

        Connect your GRIN-Wallet to Grinnode.live&nbsp; <LinkButton copy-link="https://grinnode.live/tutorials#tutorial-wallet-connect"/> </h3>

      <p class="text-left"> There are two options to use grin-wallet with connecting to grinnode.live.</p>

      <p class="text-start">a) First option is to specify that you want to connect grinnode.live with -r flag.</p>

      <span class="blockquote">
        <p><strong>CLI:<br/></strong>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;grin-wallet -r "https://grinnode.live:3413" info  &nbsp; &nbsp; </p>
        <p>&nbsp;</p>
      </span>
      <p class="text-left"> b) Second option is to add it into the <a href="">wallet.toml</a> config file which can be found in wallet directory like below. </p>

      <span class="blockquote">
        <p> <strong>grin-wallet.toml</strong>&nbsp;:<br/>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; check_node_api_http_addr = "https://grinnode.live:3413"</p>
        <p>&nbsp;</p>
      </span>

      <p class="text-left" >Here are some examples to use grin-wallet</p>
      <h4 class="text-h6 text-left">Initialize wallet</h4>
      <p class="text-left">
        Following command creates a new folder named <b>orange</b>  on your desktop and initialize a wallet for Windows operating system. You can create and use more than one wallet for testing and other purposes by this way.
        (Don't forget to save your recovery phrase)
      </p>
      <v-card outlined dark color="grey darken-3" class="pa-4 my-4">
        <div class="code text-left">
          <span> grin-wallet -r https://grinnode.live:3413 -t C:\Users\YOUR_WINDOWS_ACCOUNT_NAME\Desktop\orange init</span><br/>
        </div>
      </v-card>


      <p class="text-left">You can get an error for not being able to request and connect to node. This is a known issue, ignore for the time being.</p>


      <h4 class="text-h6 text-left">Get info </h4>

      <v-card outlined dark color="grey darken-3" class="pa-4 my-4">
        <div class="code text-left">
          <span> grin-wallet -r https://grinnode.live:3413 -t C:\Users\YOUR_WINDOWS_ACCOUNT_NAME\Desktop\orange info</span><br/>
        </div>
      </v-card>

      <h4 class="text-h6 text-left">Listen for transcation </h4>

      <v-card outlined dark color="grey darken-3" class="pa-4 my-4">
        <div class="code text-left">
          <span> grin-wallet -r https://grinnode.live:3413 -t C:\Users\YOUR_WINDOWS_ACCOUNT_NAME\Desktop\orange listen</span><br/>
        </div>
      </v-card>

      <h4 class="text-h6 text-left">Send grin </h4>
      <p class="text-left">Following command sends 2 grin to grin donation wallet. Change the grin address after -d flag to send to the desired address.</p>
      <v-card outlined dark color="grey darken-3" class="pa-4 my-4">
        <div class="code text-left">
          <span> grin-wallet -r https://grinnode.live:3413 -t C:\Users\YOUR_WINDOWS_ACCOUNT_NAME\Desktop\orange send -d grin1zxwrf5yaxlyps4mpx3n7j9kp4su3gzgpdhfk2sgv56q0prcdlzls9e6e0y 2</span><br/>
        </div>
      </v-card>

      <p class="text-justify"> More Grin-Wallet example commands can be found <a
          href="https://github.com/MCM-Mike/grinnode.live/blob/master/linux-grin-commands-collection.md">here</a></p>
      <p class="text-justify"> When using the Grinnode Wallet API , you are trusting us to run a Grin node. We recommend
        to use your own node for better privacy.</p>

      <v-divider class="my-12"></v-divider>


      <h3 class="text-h6 grey--text text--darken-2 text-left my-4" id="tutorial-seed">Use Grinnode.live High-Available
        Seed-Node  <LinkButton copy-link="https://grinnode.live/tutorials#tutorial-seed" /> </h3>
      <p class="text-justify"> Connect to lot of Grin-Nodes fast using our Seed-Node by editing your grin-server.toml.
        Or download our example <a href="https://github.com/MCM-Mike/grinnode.live/blob/master/grin-server.toml">grin-server.toml</a>
      </p>
      <v-card outlined dark color="grey darken-3" class="pa-4">
        <div class="code text-left">
          <span class=""> #how to seed this server, can be None, List or DNSSeed </span><br/>
          <span>seeding_type = "List"</span><br/>

          <span>#If the seeding type is List, the list of peers to connect to can
            #be specified as follows:</span><br/>
          seeds = ["mainnet-seed.grinnode.live:3414"]

        </div>
      </v-card>

      <v-divider class="my-12"></v-divider>


      <h6 class="text-h6 grey--text text--darken-2 text-left my-4" id="tutorial-node-connect">Connect your GRIN-Node to
        Grinnode.live&nbsp;  <LinkButton copy-link="https://grinnode.live/tutorials#tutorial-node-connect" />  </h6>



      <p class="text-justify">Edit your Grin-Node <strong>grin-server.toml</strong></p>

      <v-card outlined dark color="grey darken-3" class="pa-4">
        <div class="code text-left">
          <span class=""> peers_preferred = ["213.239.215.236:3414"] </span><br/>
          <span>#maximum number of inbound peer connections</span><br/>
          <span>#maximum number of outbound peer connections</span><br/>
          <span>peer_max_inbound_count = 30</span><br/>
          <span>#preferred minimum number of outbound peers</span><br/>
          <span>peer_min_preferred_outbound_count = 10</span><br/>
          <span>#temporarily allowed to exceed peer_max_inbound_count</span><br/>
          <span> peer_listener_buffer_count = 5</span><br/>

        </div>
      </v-card>

      <v-divider class="my-12"></v-divider>

      <h6 class="text-h6 grey--text text--darken-2 text-left my-4" id="tutorial-api-examples">Public Grinnode.live API
        examples </h6>


      <h4 class=" text-left mb-2"><a
          href="https://github.com/mimblewimble/grin-rfcs/blob/master/text/0007-node-api-v2.md" target="_blank">Public
        Grin-API v2 documentation</a></h4>

      <p class="text-left"> When running grin with defaults, the v2 API is available </p>
      <p class="text-left"><a
          href="https://github.com/mimblewimble/grin-rfcs/blob/master/text/0007-node-api-v2.md#owner-api-endpoints">https://grinnode.live/v2/owner
        for the owner API</a>.</p>
      <p class="text-left pb-4"><a
          href="https://github.com/mimblewimble/grin-rfcs/blob/master/text/0007-node-api-v2.md#foreign-api-endpoints">https://grinnode.live/v2/foreign
        for the foreign API</a>.</p>


      <v-card outlined dark color="grey darken-3" class="pa-4">
        <div class="code text-left">
          <span class="font-weight-bold"> API v2 example: </span><br/>
          <span>curl -d '{"id":1,"jsonrpc":"2.0","method":"get_status","params":{} }' -o - -X POST https://grinnode.live:3413/v2/owner </span><br/>
          <br/>
          <span class="my-4">answer: </span><br/>
          <span>{</span><br/>
          <span> "id": "json",</span><br/>
          <span>  "result": {</span><br/>
          <span class="ml-4">  "Ok": {</span><br/>
          <span class="ml-14"> "connections": 121,</span><br/>
          <span class="ml-14"> "protocol_version": 2,</span><br/>
          <span class="ml-14"> "sync_status": "no_sync",</span><br/>
          <span class="ml-14">"tip": { </span><br/>
          <span class="ml-14">"height": 527467, </span><br/>
          <span
              class="ml-14"> "last_block_pushed": "000001a81c92da17102079862b927134e7f8210ad56af892f494a072f5b77b92",</span><br/>
          <span
              class="ml-14">"prev_block_to_last": "000024005775cf7e2155d8156e514b6b1f51d98483a7bdc220a22334d2b30749", </span><br/>
          <span class="ml-14"> "total_difficulty": 1456919673376722</span><br/>
          <span class="ml-12">  },</span><br/>
          <span class="ml-4">"user_agent": "MW/Grin 3.1.0-beta.1" </span><br/>
          <span class="ml-14"> }</span><br/>
          <span class="ml-4"> }</span><br/>

          <span> </span><br/>
          <span> </span><br/>

        </div>
      </v-card>

      <v-divider class="my-12"></v-divider>


      <h4 class="text-h6 grey--text text--darken-2 text-left my-4">Do I need any API secret to use Grinnode API?</h4>
      <p class="text-justify">No! see
        <router-link exact to="/faq">FAQ-Site.</router-link>
      </p>

      <v-divider class="my-12"></v-divider>

      <h2 class="text-h4   my-12" id='tutorial-api-documentation'> GRIN API Documentation</h2>
      <p class="text-left">GRIN API v1 is deprecated after grin fork version 4. Documentation Grin-API v2 can be found
        <a href="https://github.com/mimblewimble/grin-rfcs/blob/master/text/0007-node-api-v2.md"
           target="_blank">here</a>.
        New api is based on JSON-RPC and divided into two sections
      </p>
      <p class="text-left">
        <a href="https://github.com/mimblewimble/grin-rfcs/blob/master/text/0007-node-api-v2.md#owner-api-endpoints">Owner
          API endpoints</a>
        API calls referred to node
      </p>
      <p class="text-left"><a
          href="https://github.com/mimblewimble/grin-rfcs/blob/master/text/0007-node-api-v2.md#foreign-api-endpoints">Foreign
        API endpoints</a>
        API calls to be consumed by wallet
      </p>
      <v-divider class="my-12"></v-divider>

    </v-col>
  </v-row>


</template>

<script>
import LinkButton from "../components/LinkButton";

export default {
  name: "Tutorials",
  components:{LinkButton},
  mounted() {
    this.$dao.getAgents();
    this.$dao.ioCheck();
  }
}
</script>

<style scoped>
table {
  /*border:solid thin #82603a ;*/
}

table td {
  padding-bottom: 4px;
}

table td:first-child {
  /*border-right:solid thin #82603a ;*/
  padding-right: 8px;
}


</style>
