<template>
    <div class="body_wrapper">
        <main class="content">
            <section class="home">
                <div class="container home_container">
                <h2 class="container_header">Grinnode.live high-available GRIN-API & Sync-Service</h2>
                
                <h3>Last Update: 03/2020 </h3>
                    <p>We enabled GRIN API v2 on our high-available GRIN-Node's</p>
                    <p>new Website done by <a href="https://github.com/WarmBeer/">@WarmBeer</a>
                                        
                
                <h2> How to use Grinnode.live </h2>
                  
                  <h3>Connect your GRIN-Wallet to Grinnode.live&nbsp;</h3>
                    <p>1. Setup a GRIN Wallet </p>
                    <p>2. Use it as <strong><a href="https://github.com/mimblewimble/docs/wiki/How-to-use-the-Grin-wallet#connecting-to-a-node" target="_blank" rel="noopener">API Endpoint</a></strong> or <strong>add</strong> it to your <a href="https://github.com/mimblewimble/docs/wiki/How-to-use-the-Grin-wallet#connecting-to-a-node"><strong>grin-wallet.toml</strong>&nbsp;</a></p>
                    <blockquote>
                        <p><strong>CLI:<br /></strong>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;./grin-wallet --api_server_address "https://grinnode.live:3413"<br /><br /><strong>grin-wallet.toml</strong>&nbsp;:<br />&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; check_node_api_http_addr = "https://grinnode.live:3413"</p>
                        <p>&nbsp;</p>
                    </blockquote>
                    <p> More Grin-Wallet example commands can be found <a href="https://github.com/MCM-Mike/grinnode.live/blob/master/linux-grin-commands-collection.md">here</a></p>
                
                
                
                    <p><h3>Public Grinnode.live API examples </h3></p>
                    <p> <h4> <a href="https://github.com/mimblewimble/grin-rfcs/blob/master/text/0007-node-api-v2.md" target="_blank">Public Grin-API v2 documentation</a> </h4>
                
                    When running grin with defaults, the V2 apis are available 
                 <p>
                    <strong>
                     <ul>
                         <li>https://grinnode.live/v2/owner for the owner API.</li>
                         <li>https://grinnode.live/v2/foreign for the foreign API.</li>
                    </ul>
                    </strong>
                </p>
                <pre><code>
                    <strong>API v2 example:</strong>

                    curl -d '{"id":"json","method":"get_status","params":{} }' -o - https://grinnode.live/v2/owner

                    <strong> answer:</strong>

                    {
                      "id": "json",
                      "result": {
                        "Ok": {
                          "connections": 121,
                          "protocol_version": 2,
                          "sync_status": "no_sync",
                          "tip": {
                            "height": 527467,
                            "last_block_pushed": "000001a81c92da17102079862b927134e7f8210ad56af892f494a072f5b77b92",
                            "prev_block_to_last": "000024005775cf7e2155d8156e514b6b1f51d98483a7bdc220a22334d2b30749",
                            "total_difficulty": 1456919673376722
                          },
                          "user_agent": "MW/Grin 3.1.0-beta.1"
                        }
                      }
                    }

                    </code></pre>
                    
                    
                
                    <h3>High Available (HA) API Calls</h3>
                    based on the <a href="https://github.com/mimblewimble/grin/blob/master/doc/api/node_api.md#get-status" target="_blank">v1 node_api </a>GRIN coin specs.
                  
                    
                    <h3>Do I need any API secret to use Grinnode API?</h3>
                    No! see <router-link exact to="/faq">FAQ-Site.</router-link>

                    <h3>GRIN API v1:</h3>
                    <p>will be deprecated in grin fork version 4 - Switch to <strong>APIv2</strong> </p>
                    <p>The following API-Calls are GRIN API v1 Calls:</p>
                    <ul>
                        <li><a href="https://grinnode.live/v1/status">/v1/status</a></li>
                        <ul>
                            <li><a href="https://github.com/mimblewimble/grin/blob/master/doc/api/node_api.md#get-status" target="_blank">Returns various information about the node and the network</a></li>
                        </ul>


                        <li><a href="https://grinnode.live/v1/blocks/">/v1/blocks</a></li>
                        <ul>
                            <li><a href="https://github.com/mimblewimble/grin/blob/master/doc/api/node_api.md#get-blocks" target="_blank">Returns data about a specific block given a hash, a height or an unspent commit.</a></li>
                        </ul>



                        <li><a href="https://grinnode.live/v1/headers/">/v1/headers</a></li>
                        <ul>


                            <li><a href="https://github.com/mimblewimble/grin/blob/master/doc/api/node_api.md#get-headers" target="_blank">Returns data about a block headers given either a hash or height or an output commit. </a></li>
                        </ul>

                        <li><a href="https://grinnode.live/v1/peers/">/v1/peers</a> (only allowed Users)</li>
                        <ul>

                            <li><a href="https://github.com/mimblewimble/grin/blob/master/doc/api/node_api.md#get-peers-connected" target="_blank">Retrieves all connected peers - BAN and UNBAN not allowed</a></li>
                        </ul>

                        <li><a href="https://grinnode.live/v1/chain/">/v1/chain</a></li>
                        <ul>

                            <li><a href="https://github.com/mimblewimble/grin/blob/master/doc/api/node_api.md#chain-endpoint" target="_blank">Retrieves details about the state of the current fork tip</a></li>
                        </ul>


                        <li><a href="https://grinnode.live/v1/txhashset/">/v1/txhashset</a></li>
                        <ul>

                            <li><a href="https://github.com/mimblewimble/grin/blob/master/doc/api/node_api.md#txhashset-endpoint" target="_blank">Retrieve the roots of the TxHashSet</a></li>
                        </ul>


                        <li><a href="https://grinnode.live/v1/pool/push">/v1/pool/push</a></li>
                        <ul>

                            <li><a href="https://github.com/mimblewimble/grin/blob/master/doc/api/node_api.md#pool-endpoint" target="_blank">Push new transaction to our local transaction pool. Add ?fluff at the end of the URL to bypass Dandelion relay.</a></li>
                        </ul>


                    </ul>

                    &nbsp;
                    &nbsp;
                    &nbsp;
                    &nbsp;

                  

                    <h3>Contact:</h3>
                    You can get in contact with us here

                    <p style="text-decoration: underline;">Use Blocks not Bombs</p>
                    <p><img width="200" height="121" src="images/blocks-not-bombs-878x1024.png" alt="Use Blocks not Bombs " /></p>
                </div>
            </section>
        </main>
    </div>
</template>

<script>
  export default {
    name: "Home",
    components: {
    },
  }
</script>

<style scoped>
    ul {
        list-style: inside;
    }
</style>
