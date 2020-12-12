<template>

  <v-row>
    <v-col cols="12"  >

      <h1 class="text-h4 text-center mb-6 ">Grinnode.live Uptime Challenge</h1>

      <h4 class="text-h5 my-8 grey--text text--darken-2">
        How can you participate?
      </h4>
      <p>
        It is simple, just run a Grin-Node over the measured time period
        from 22.03.2020 12:00:00 noon to 22.04.2020 12:00:00 noon (UTC+0) and connect your
        Grin-Node to Grinnode.live
        (<router-link exact to="/faq">How to run a Grin-Node?</router-link>).
      </p>

      <v-divider class="my-8" ></v-divider>

      <h4 class="text-h5 my-8 grey--text text--darken-2">
        Prizes / Free giveaways
      </h4>
      <p>
        The first TOP 20 (non commercial) nodes with highest up time are getting the following prizes:
      </p>

      <v-simple-table class="py-4"  >
        <thead>
          <th>RANK </th>
          <th>NODE </th>
          <th>PRIZE</th>
        </thead>

          <tbody>

          <tr>
            <td style="text-align: center;">1</td>
            <td style="text-align: center;">winner will be announced</td>
            <td style="text-align: center;">200 GRIN's + GRIN T-Shirt</td>
          </tr>
          <tr>
            <td style="text-align: center;">2</td>
            <td style="text-align: center;">winner will be announced</td>
            <td style="text-align: center;">99 GRIN's + GRIN T-Shirt</td>
          </tr>
          <tr>
            <td style="text-align: center;">3</td>
            <td style="text-align: center;">winner will be announced</td>
            <td style="text-align: center;">75 GRIN's + GRIN T-Shirt</td>
          </tr>
          <tr>
            <td style="text-align: center;">4</td>
            <td style="text-align: center;">winner will be announced</td>
            <td style="text-align: center;">60 GRIN's</td>
          </tr>
          <tr>
            <td style="text-align: center;">5</td>
            <td style="text-align: center;">winner will be announced</td>
            <td style="text-align: center;">50 GRIN's</td>
          </tr>
          <tr>
            <td style="text-align: center;">[..]</td>
            <td style="text-align: center;">[..]</td>
            <td style="text-align: center;">[..]</td>
          </tr>
          </tbody>
      </v-simple-table>

      <div class="text-center">
      <v-chip  color="primary" outlined href="https://github.com/MCM-Mike/grinnode.live/blob/master/free-grin-challenge.md" >
        FULL PRIZE LIST
      </v-chip>
      </div>
      <v-divider class="my-8" ></v-divider>


      <h4 class="text-h5 my-8 grey--text text--darken-2">
        Rule Update
      </h4>
      <p>
        If more than 20 Users <a href="https://forum.grin.mw/t/grin-node-challenge-2020-win-over-800-grin-coins-and-free-grin-merchandise/7166/11">replying to this Forum post</a> telling us, we have successfully setup a Grin-Node and connected
        to Grinnode.live, we will add 10 more T-Shirts to the winning pool.
      </p>
      <ul >
        <li><v-icon left>label</v-icon> Winners will be randomly chosen from all connected nodes during the 4 week Challenge</li>
        <li><v-icon left>label</v-icon> Top20 Nodes can not win any additional T-Shirts</li>
        <li><v-icon left>label</v-icon> Only non-commercial Grin-Nodes can win any prices.</li>
      </ul>

      <v-divider class="my-8" ></v-divider>

      <h4 class="text-h5 my-8 grey--text text--darken-2">
        How to claim your prize?
      </h4>
      <p>
        Get in <a target="_blank" href="https://github.com/MCM-Mike/grinnode.live/blob/master/contact.md">contact</a> with us and <a target="_blank" href="https://github.com/MCM-Mike/grinnode.live/blob/master/free-grin-challenge.md#how-to-claim-your-price">proof you own this node</a>.
        We will publish the winners here and every winner gets a uniq URL which he has to visit from his Grin-Node IP address.
      </p>

      <v-divider class="my-8" ></v-divider>

      <h4 class="text-h5 my-8 grey--text text--darken-2">
        Why are we doing this?
      </h4>
      <p>
        To stabilize the GRIN-Network, we need to ensure we have enough running Grin-Nodes on the Main-Grin-Network.
        We are believing in GRIN and the future of GRIN, therefore we setting up this challenge.
        Also by asking the community to connect to our Grinnode.live infrastructure we can test our high-availability and stress-test the internal Servers.
      </p>

      <v-divider class="my-8"></v-divider>

      <h4 class="text-h5 my-8 grey--text text--darken-2">
        Challenge leaderboard
      </h4>

      <v-data-table
        :headers="leaderboard_headers"
        :items="leaderboard_data"
      >

      </v-data-table>

      <p  class="mt-4 ">
        <span class="text--primary" >Last updated:  {{ new Date(+this.last_updated) }}</span>
        <br/>

        <span class="text-subtitle-1">Response time: {{ this.peersTime }}</span>
      </p>


      <p class="mt-4">
      *Grinnode.live checks the connected peers every 30 minutes. When a peer is seen, it will get an additional uptime (As seen in total_uptime). The tries is the amount of times the peer was checked by Grinnode.live. The average_uptime is the total number of uptimes divided by tries/checks.
      </p>
    </v-col>


  </v-row>



</template>


<script>
  export default {
    name: "Challenge",
    data: () => ({
      peers: [],
      leaderboard_headers:[
        {text:"#",value:"no"},
        {text:"IP address",value:"ip_address"},
        {text:"First seen",value:"first_seen"},
        {text:"Last seen",value:"last_seen"},
        {text:"User agent",value:"user_agent"},
        {text:"Total uptime",value:"total_uptime"},
        {text:"Tries",value:"tries"},
        {text:"Average Uptime",value:"average_uptime"}
      ],

      peersTime:"",
      last_updated:""

    }),
    mounted() {

      const peers_url =  'https://grinnode.live:8080/peers';
      let start_time = Date.now();
      fetch(peers_url)
          .then(response => response.json())
          .then((result) => {
            let end_time = Date.now();
            let ping = Math.round((end_time - start_time)/2);
            this.last_updated = end_time;
            this.peersTime = ping + 'ms';
            this.peers = result;
          });

      },

    computed:{
      leaderboard_data: function(){
        let rows = [];
        if(this.peers.result) {

          this.peers.result.forEach((peer, index) => {
            rows.push({
              no: index + 1,
              ip_address: peer.ip,
              first_seen: new Date(+peer.first_seen).toLocaleDateString(),
              last_seen: new Date(+peer.last_seen).toLocaleDateString(),
              user_agent: peer.user_agent,
              total_uptime: peer.total_uptime,
              tries: peer.tries,
              average_uptime: Math.round(peer.average_uptime * 100) + '%'
            });
          });
        }
        return rows;
      }
    }




  }
</script>



<style scoped>
  ul{
    list-style: none;
  }

</style>
