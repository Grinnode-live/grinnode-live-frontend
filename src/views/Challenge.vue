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
                        <tr v-for="(peer, index) in peers" :key="index">
                            <td>{{ peer.name }}</td>
                            <td>1584177960018</td>
                            <td>1584219720094</td>
                            <td>MW/Grin 3.1.0</td>
                            <td>348</td>
                            <td>348</td>
                            <td>1</td>
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
      peers: [
        {
          name: 'test',
        },
        {
          name: 'test',
        },
        {
          name: 'test',
        },
      ]
    }),
  }
</script>

<style scoped>

</style>
