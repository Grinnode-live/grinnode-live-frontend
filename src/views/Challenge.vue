<template>
    <div class="body_wrapper">
        <main class="content">
            <section class="home">
                <div class="container home_container">
                    <h2 class="container_header">Join and get a chance to Win!</h2>
                    <p>
                        Host a public Grin node and get a chance to win one of the following prices:
                    </p>
                    <ol>
                        <li>5x An unique GRIN fanshirt!</li>
                        <li>1x 100 GRIN!</li>
                        <li>4x 25 GRIN!</li>
                    </ol>
                    <p>
                        Waddaya waiting for? You can follow the leaderboard down below.
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
                                <a>Last updated: {{ new Date(+this.$dao.peers.lastUpdated) }}</a>
                            </td>
                            <td colspan="1">
                                <a>Response time: {{ this.$dao.peersTime }}</a>
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
