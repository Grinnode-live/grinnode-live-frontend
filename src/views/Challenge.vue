<template>
    <div class="body_wrapper">
        <main class="content">
            <section class="home">
                <div class="container home_container">
                    <h2 class="container_header">Grinnode.live Uptime Challenge</h2>
                    <h3>How can you participate?</h3>
                    <p>
                        It is simple, just run a Grin-Node over the measured time period
                        from 22.03.2020 12:00:00 noon to 22.04.2020 12:00:00 noon (UTC+0) and connect your
                        Grin-Node to Grinnode.live
                        (<router-link exact to="/faq">How to run a Grin-Node?</router-link>).
                    </p>

                    <h3>Prices / Free giveaways</h3>
                    <p>
                        The first TOP 20 (non commercial) nodes with highest up time are getting the following prices:
                        <table>
<tbody>
<tr>
<td style="text-align: center;"><strong>RANK</strong></td>
<td style="text-align: center;"><strong>NODE</strong></td>
<td style="text-align: center;"><strong>&nbsp;PRICE</strong></td>
</tr>
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
</table>

    
    <a href="https://github.com/MCM-Mike/grinnode.live/blob/master/free-grin-challenge.md" target="_blank">FULL PRICE LIST HERE</a>
                    </p>
                    
                    <h3>Rule Update</h3> 
                    <p>
                    If more than 20 Users <a href="https://forum.grin.mw/t/grin-node-challenge-2020-win-over-800-grin-coins-and-free-grin-merchandise/7166/11">replying to this Forum post</a> telling us, we have successfully setup a Grin-Node and connected 
                    to Grinnode.live, we will add 10 more T-Shirts to the winning pool.
                    </p>
                    <p>
                    <ul>
                    <li>Winners will be randomly chosen from all connected nodes during the 4 week Challenge</li>
                    <li>Top20 Nodes can not win any additional T-Shirts</li>
                    <li>only non-commercial Grin-Nodes can win any prices.</li>
                    </ul>
                    </p>

                    <h3>How to claim your prize?</h3>
                    <p>
                        Get in <a target="_blank" href="https://github.com/MCM-Mike/grinnode.live/blob/master/contact.md">contact</a> with us and <a target="_blank" href="https://github.com/MCM-Mike/grinnode.live/blob/master/free-grin-challenge.md#how-to-claim-your-price">proof you own this node</a>.
                        We will publish the winners here and every winner gets a uniq URL which he has to visit from his Grin-Node IP address.
                    </p>

                    <h3>Why are we doing this?</h3>
                    <p>
                        To stabilize the GRIN-Network, we need to ensure we have enough running Grin-Nodes on the Main-Grin-Network.
                        We are believing in GRIN and the future of GRIN, therefore we setting up this challenge.
                        Also by asking the community to connect to our Grinnode.live infrastructure we can test our high-availability and stress-test the internal Servers.
                    </p>

                    <h2 class="container_header">Challenge leaderboard</h2>
                    <table id="personDataTable" border="0">
                        <thead>
                        <tr>
                            <th>#</th>
                            <th>IP address</th>
                            <th>First seen</th>
                            <th>Last seen</th>
                            <th>User Agent</th>
                            <th>Total Uptime</th>
                            <th>Tries</th>
                            <th>Average Uptime</th>
                        </tr>
                        </thead>

                        <tbody>
                        <tr v-for="(peer, index) in this.$dao.peers.result" :key="index">
                            <td>{{ ++index }}</td>
                            <td>{{ peer.ip }}</td>
                            <td>{{ new Date(+peer.first_seen).toLocaleDateString() }}</td>
                            <td>{{ new Date(+peer.last_seen).toLocaleDateString() }}</td>
                            <td>{{ peer.user_agent }}</td>
                            <td>{{ peer.total_uptime }}</td>
                            <td>{{ peer.tries }}</td>
                            <td>{{ Math.round(peer.average_uptime * 100) + '%' }}</td>
                        </tr>
                        </tbody>

                        <tfoot>
                        <tr>
                            <td colspan="6">
                                <span>Last updated: {{ new Date(+this.$dao.peers.lastUpdated) }}</span>
                            </td>
                            <td colspan="2">
                                <span>Response time: {{ this.$dao.peersTime }}</span>
                            </td>
                        </tr>
                        </tfoot>
                    </table>
                    <br>
                    <p>*Grinnode.live checks the connected peers every 30 minutes. When a peer is seen, it will get an additional uptime (As seen in total_uptime). The tries is the amount of times the peer was checked by Grinnode.live. The average_uptime is the total number of uptimes divided by tries/checks.</p>
                </div>
            </section>
        </main>
    </div>
</template>

<script>
  export default {
    name: "Challenge",
    data: () => ({
      peers: [],
    }),
    mounted() {
      this.$dao.getPeers();
    }
  }
</script>

<style scoped>

</style>
