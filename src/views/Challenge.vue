<template>
  <v-row>
    <v-col cols="12">
        <v-tabs centered v-model="tab">
          <v-tabs-slider color="yellow"></v-tabs-slider>
          <v-tab key="0"  >
            Bug Challenge
          </v-tab>

          <v-tab key="1"  >
            Uptime Challenge
          </v-tab>

        </v-tabs>

        <v-tabs-items  v-model="tab">

            <v-tab-item     key="0">
              <v-card flat>
                <h1 class="text-h4 text-center mt-12 mb-6 ">Bug Challenge</h1>
                <p class="text-justify">At the beginning of December 2020 we discussed a possibility of performing another challenge before Hard Fork 4 network update planned for January 2021. Appropriate amount of funding has been secured and we announced the <a :href="bugChallengeData.forum_link" >grin.mv forum. </a> </p>
                <p class="text-justify">We knew grin-wallet and grin-node could use an appropriate amount of testing but we did not know exactly how to organize such event. It was our first time and we had to improvise a lot. We came up with prizes and rewards and announced them on <a :href="bugChallengeData.github_link">github</a> . Many people from the grin keybase community have contributed and helped defined over {{bugChallengeData.number_of_tests}} test cases. We would like to give our special thanks to {{bugChallengeData.contributersList}} for all the help in defining those cases.</p>

                <p>
                  After two weeks of hard work of over {{bugChallengeData.number_of_testers}} testers the challenge has concluded and revealed three winners:
                </p>

<!--              <ul class="my-6">-->
<!--                <li class="my-2">  🥇 <span class="subtitle-1" >{{bugChallengeData.winners[0]['name']}} </span> {{bugChallengeData.winners[0]['closed_cases']}} <span class="caption" >cases   </span></li>-->
<!--                <li class="my-2">  🥇 <span class="subtitle-1" >{{bugChallengeData.winners[1]['name']}} </span> {{bugChallengeData.winners[1]['closed_cases']}} <span class="caption" >cases   </span></li>-->
<!--                <li class="my-2">  🥇 <span class="subtitle-1" >{{bugChallengeData.winners[2]['name']}} </span> {{bugChallengeData.winners[2]['closed_cases']}} <span class="caption" >cases   </span></li>-->

<!--              </ul>-->

                <v-card flat class="mx-auto pb-4" width="500">
                <v-simple-table class="py-4"  >


                  <tbody>
                    <tr class="my-2">  <td class="text-center subtitle-1" >Name </td>  <td class="text-left subtitle-1"> Cases</td></tr>
                    <tr class="my-2">   <td class="text-center" > 🥇 {{bugChallengeData.winners[0]['name']}} </td> <td class="text-left" > {{bugChallengeData.winners[0]['closed_cases']}}</td> </tr>
                    <tr class="my-2">   <td class="text-center" > 🥇{{bugChallengeData.winners[1]['name']}} </td> <td class="text-left">{{bugChallengeData.winners[1]['closed_cases']}}</td> </tr>
                    <tr class="my-2">  <td class="text-center"> 🥇 {{bugChallengeData.winners[2]['name']}} </td> <td class="text-left">{{bugChallengeData.winners[2]['closed_cases']}}</td> </tr>


                </tbody>
                </v-simple-table>

                </v-card>

                <p class="text-justify">
                  As well as some special distinctions for 🎖️ @goyle for an exceptional quality of reports, which included highest quality description and even bash scripts. For this we rewarded @goyle with an extra {{bugChallengeData.distinction_reward}} Grin!
                </p>
                <p class="text-justify">
                  After the challenge we distributed an evaluation form to our testers. Their feedback has indicated the necessity of grinnode.live which indicates running local node is still problematic and there is space for improvements. The testers feedback also indicated how essential the Python API wrapper script {{bugChallengeData.api_wrapper_script_link}} was to complete the tests. For developing this script we send our special thanks to 🎖️ @xiaojay and 🎖️ @bladedoyle.
                </p>
                <p class="text-justify">
                  The two weeks between 19.12.20 10am UTC+1 and on 02.01.21 10am UTC+1 was an intense and very productive time. In this time the overall of {{bugChallengeData.overall_prize_value}} EUR in BTC/Grin has been distributed. The results of this challenge work will remain on <a :href="bugChallengeData.github_link">github</a> in the issues section.
                </p>

                <p class="text-justify">
                  We thank everyone for participation! Feel free to leave your feedback under the  <a :href="bugChallengeData.forum_link">forum thread. </a>
                </p>



              </v-card>
            </v-tab-item>

            <v-tab-item      key="1">
              <h1 class="text-h4 text-center mt-12 mb-6 ">Grinnode.live Uptime Challenge</h1>
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

            </v-tab-item>


          </v-tabs-items>







    </v-col>

  </v-row>



</template>


<script>
  export default {
    name: "Challenge",
    data: () => ({
      tab: null,
      bugChallengeData:{
        forum_link:"https://forum.grin.mw/t/grinnode-live-winter-2020-bug-bash-challenge-and-free-grin-btc-prizes-giveaway/8060",
        github_link:"https://github.com/Grinnode-live/2020-grin-bug-bash-challenge",
        api_wrapper_script_link:"api_wrapper_script_link",
        contributers_list:"mo5itoo, goyle, jitr ",
        number_of_tests: "55",
        number_of_testers:"20",
        winners:[
          {name:"mo5itoo", closed_cases:32},
          {name:"goyle", closed_cases:20},
          {name:"jitr", closed_cases:10},
        ],
        distinction_reward: 120,
        overall_prize_value : 1500
      },
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

      console.log("on mounted");
      console.log("setting this.tab to "+  this.$route.params.tabid);
      this.tab = parseInt(this.$route.params.tabid);
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

      },watch:{
            $route:function(val){
              let tabId = parseInt(val.params.tabid);
              console.log("route changed to "+tabId);
              this.tab = tabId ;
              console.log(this.bugChallengeData.forum_link);
            }
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
