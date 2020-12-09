<template>
  <v-row>
    <v-col cols="10" offset="1"    >
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
                  <router-link to="" v-scroll-to="'#tutorial-grinnode'">How to use Grinnode.live</router-link>
                </v-list-item-title>
              </v-list-item>
            </template>

            <v-list-item link to="" v-scroll-to="'#tutorial-wallet-connect'">
              <v-list-item-title>
              <router-link to="" v-scroll-to="'#tutorial-wallet-connect'">Connect your GRIN-Wallet to Grinnode.live</router-link>
              </v-list-item-title>
            </v-list-item>

            <v-list-item link to="" v-scroll-to="'#tutorial-seed'" >
              <v-list-item-title>
                <router-link to="" v-scroll-to="'#tutorial-seed'">Use Grinnode.live High-Available Seed-Node</router-link>
              </v-list-item-title>
            </v-list-item>

            <v-list-item link to="" v-scroll-to="'#tutorial-node-connect'">
              <v-list-item-title>
                <router-link to="" v-scroll-to="'#tutorial-node-connect'">Connect your GRIN-Node to Grinnode.live</router-link>
              </v-list-item-title>
            </v-list-item>

            <v-list-item link to="" v-scroll-to="'#tutorial-api-examples'">
              <v-list-item-title>
                <router-link to="" v-scroll-to="'#tutorial-api-examples'">Public Grinnode.live API examples</router-link>
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
                  <router-link  to="" v-scroll-to="'#tutorial-api-documentation'">GRIN API documentaion</router-link>
                </v-list-item-title>
              </v-list-item>
            </template>


          </v-list-group>

      </v-list>



    </v-col>

    <v-col   cols="12" offset="0" align="center">

      <h2 class="text-h4   my-12" id="tutorial-grinnode">
        How to use Grinnode.live
      </h2>


      <h3 class="text-h6 grey--text text--darken-2 text-left my-4" id="tutorial-wallet-connect">

        Connect your GRIN-Wallet to Grinnode.live&nbsp;</h3>

      <p  class="text-start">1. Setup a grin-wallet </p>
      <p class="text-justify">2. Use it as an <strong><a href="https://github.com/mimblewimble/docs/wiki/How-to-use-the-Grin-wallet#connecting-to-a-node" target="_blank" rel="noopener">API Endpoint</a></strong> for wallet commands or <strong>add</strong> it to your <a href="https://github.com/mimblewimble/docs/wiki/How-to-use-the-Grin-wallet#connecting-to-a-node"><strong>grin-wallet.toml</strong>&nbsp;</a>
      </p>
      <span class="blockquote">
        <p><strong>CLI:<br /></strong>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;grin-wallet -r "https://grinnode.live:3413" info<br /><br /><strong>grin-wallet.toml</strong>&nbsp;:<br />&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; check_node_api_http_addr = "https://grinnode.live:3413"</p>
        <p>&nbsp;</p>
      </span>

      <p class="text-justify"> More Grin-Wallet example commands can be found <a href="https://github.com/MCM-Mike/grinnode.live/blob/master/linux-grin-commands-collection.md">here</a></p>
      <p class="text-justify"> When using the Grinnode Wallet API , you are trusting us to run a Grin node. We recommend to use your own node for better privacy.</p>

      <v-divider class="my-12"></v-divider>


      <h3 class="text-h6 grey--text text--darken-2 text-left my-4" id="tutorial-seed">Use Grinnode.live High-Available Seed-Node </h3>
      <p class="text-justify"> Connect to lot of Grin-Nodes fast using our Seed-Node by editing your grin-server.toml.
        Or download our example <a href="https://github.com/MCM-Mike/grinnode.live/blob/master/grin-server.toml">grin-server.toml</a>
      </p>
      <v-card outlined dark  color="grey darken-3" class="pa-4">
        <div class="code text-left">
          <span class=""> #how to seed this server, can be None, List or DNSSeed </span><br/>
          <span>seeding_type = "List"</span><br/>

          <span>#If the seeding type is List, the list of peers to connect to can
            #be specified as follows:</span><br/>
          seeds = ["mainnet-seed.grinnode.live:3414"]

      </div>
      </v-card>

      <v-divider class="my-12"></v-divider>


      <h6 class="text-h6 grey--text text--darken-2 text-left my-4" id="tutorial-node-connect">Connect your GRIN-Node to Grinnode.live&nbsp;</h6>




      <p class="text-justify">Edit your Grin-Node <strong>grin-server.toml</strong> </p>

      <v-card outlined dark  color="grey darken-3" class="pa-4">
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

      <h6 class="text-h6 grey--text text--darken-2 text-left my-4"  id="tutorial-api-examples">Public Grinnode.live API examples </h6>


      <h4 class=" mb-2"> <a href="https://github.com/mimblewimble/grin-rfcs/blob/master/text/0007-node-api-v2.md" target="_blank">Public Grin-API v2 documentation</a> </h4>

      <p> When running grin with defaults, the v2 API is available </p>
      <p><a>https://grinnode.live/v2/owner for the owner API</a>.</p>
            <p><a>https://grinnode.live/v2/foreign for the foreign API</a>.</p>


      <v-card outlined dark  color="grey darken-3" class="pa-4">
        <div class="code text-left">
           <span class="font-weight-bold"> API v2 example: </span><br/>
           <span>curl -d '{"id":"json","method":"get_status","params":{} }' -o - https://grinnode.live/v2/owner </span><br/>
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
           <span class="ml-14"> "last_block_pushed": "000001a81c92da17102079862b927134e7f8210ad56af892f494a072f5b77b92",</span><br/>
           <span class="ml-14">"prev_block_to_last": "000024005775cf7e2155d8156e514b6b1f51d98483a7bdc220a22334d2b30749", </span><br/>
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


      <h4  class="text-h6 grey--text text--darken-2 text-left my-4"  >Do I need any API secret to use Grinnode API?</h4>
      <p class="text-justify">No! see <router-link exact to="/faq">FAQ-Site.</router-link></p>

      <v-divider class="my-12"></v-divider>





      <h2 class="text-h4   my-12" id='tutorial-api-documentation'> GRIN API documentaion</h2>

      <h6 class="text-h6 grey--text text--darken-2 text-left my-4"> GRIN API v2:</h6>

      <p class="text-justify">



      <a  href="https://github.com/mimblewimble/grin-rfcs/blob/master/text/0007-node-api-v2.md" target="_blank">Public Grin-API v2 documentation</a>
      </p>

      <h6 class="text-h6 grey--text text--darken-2 text-left mt-12 mb-4"> GRIN API v1:</h6>

      <p class="text-justify"> <span class="font-weight-bold black--text"> GRIN API v1:</span> will be deprecated in grin fork version 4 - Switch to <strong>APIv2</strong> </p>
      <p class="text-justify">The following API-Calls are GRIN API v1 Calls:</p>

      <table   >

        <tr>
          <td class="text-right"><a   href="https://grinnode.live/v1/status">/v1/status</a></td>
          <td class="text-start"> <a href="https://github.com/mimblewimble/grin/blob/master/doc/api/node_api.md#get-status" target="_blank">Returns various information about the node and the network</a> </td>
        </tr>

        <tr>
          <td class="text-right">  <a href="https://grinnode.live/v1/blocks/">/v1/blocks</a></td>
          <td class="text-start"> <a href="https://github.com/mimblewimble/grin/blob/master/doc/api/node_api.md#get-blocks" target="_blank">Returns data about a specific block given a hash, a height or an unspent commit.</a> </td>
        </tr>

        <tr>
          <td class="text-right"> <a href="https://grinnode.live/v1/headers/">/v1/headers</a>  </td>
          <td class="text-start"> <a href="https://github.com/mimblewimble/grin/blob/master/doc/api/node_api.md#get-headers" target="_blank">Returns data about a block headers given either a hash or height or an output commit. </a>  </td>
        </tr>
        <tr>
          <td class="text-right"> <span class="caption"> (only allowed Users)</span> <a href="https://grinnode.live/v1/peers/">/v1/peers</a>  </td>
          <td class="text-start"> <a href="https://github.com/mimblewimble/grin/blob/master/doc/api/node_api.md#get-peers-connected" target="_blank">Retrieves all connected peers - BAN and UNBAN not allowed</a>  </td>
        </tr>
        <tr>
          <td class="text-right"> <a href="https://grinnode.live/v1/chain/">/v1/chain</a> </td>
          <td class="text-start"> <a href="https://github.com/mimblewimble/grin/blob/master/doc/api/node_api.md#chain-endpoint" target="_blank">Retrieves details about the state of the current fork tip</a> </td>
        </tr>
        <tr>
          <td class="text-right"> <a href="https://grinnode.live/v1/txhashset/">/v1/txhashset</a> </td>
          <td class="text-start"> <a href="https://github.com/mimblewimble/grin/blob/master/doc/api/node_api.md#txhashset-endpoint" target="_blank">Retrieve the roots of the TxHashSet</a> </td>
        </tr>
      <tr>
          <td class="text-right"><a href="https://grinnode.live/v1/pool/push">/v1/pool/push</a>  </td>
          <td class="text-start"><a href="https://github.com/mimblewimble/grin/blob/master/doc/api/node_api.md#pool-endpoint" target="_blank">Push new transaction to our local transaction pool. Add ?fluff at the end of the URL to bypass Dandelion relay.</a>  </td>
        </tr>



      </table>



    </v-col>
  </v-row>



</template>

<script>
  export default {
    name: "Tutorials",
    mounted() {
      this.$dao.getAgents();
      this.$dao.ioCheck();
    }
  }
</script>

<style scoped>
  table{
     /*border:solid thin #82603a ;*/
  }

  table td{
    padding-bottom: 4px;
  }

  table td:first-child{
    /*border-right:solid thin #82603a ;*/
    padding-right: 8px;
  }


</style>
