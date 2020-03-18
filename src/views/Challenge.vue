<template>
    <div class="body_wrapper">
        <main class="content">
            <section class="home">
                <div class="container home_container">
                    <h2 class="container_header">Grinnode.live Uptime Challenge</h2>
                    <h3>How can you participate?</h3>
                    <p>
                        It is simple, just run a Grin-Node over the measured time period
                        from XX.XX.XXXX:XX:XX:XX to XX.XX.XXXX:XX:XX:XX and connect your
                        Grin-Node to Grinnode.live
                        (<router-link exact to="/faq">How to run a Grin-Node?</router-link>).
                    </p>

                    <h3>Prices / Free giveaways</h3>
                    <p>
                        The first TOP 20 (non commercial) nodes with highest up time are getting the following prices:

                        PENDING
                    </p>

                    <h3>How to claim your prize?</h3>
                    <p>
                        Get in (contact)[https://github.com/MCM-Mike/grinnode.live/blob/master/contact.md] with us and proof you own this node.
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
                            <td colspan="1">
                                <span>Response time: {{ this.$dao.peersTime }}</span>
                            </td>
                        </tr>
                        </tfoot>
                    </table>
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
