<template>
    <div class="body_wrapper">
        <main class="content">
            <section class="home">
                <div class="container home_container">
                    <h2 class="container_header">Challenge leaderboard</h2>
                    <table id="personDataTable" border="0">
                        <thead>
                        <tr>
                            <th>IP address</th>
                            <th>First seen (epoch)</th>
                            <th>Last seen (epoch)</th>
                            <th>User Agent</th>
                            <th>Total Uptime</th>
                            <th>Tries</th>
                            <th>Average Uptime</th>
                        </tr>
                        </thead>

                        <tbody>
                        <tr v-for="(peer, index) in this.$dao.peers" :key="index">
                            <td>{{ peer.ip }}</td>
                            <td>{{ peer.first_seen }}</td>
                            <td>{{ peer.last_seen }}</td>
                            <td>{{ peer.user_agent }}</td>
                            <td>{{ peer.total_uptime }}</td>
                            <td>{{ peer.tries }}</td>
                            <td>{{ Math.round(peer.average_uptime * 100) + '%' }}</td>
                        </tr>
                        </tbody>

                        <tfoot>
                        <tr>
                            <td colspan="7">
                                <a>Powered by Grinnode.live</a>
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
