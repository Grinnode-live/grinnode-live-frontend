<template>
    <div class="body_wrapper">
        <main class="content">
            <section class="home">
                <div class="container home_container">
                    <h2 class="container_header">Statistics</h2>
                    <p>
                        Public information of the Grinnode.live API.
                    </p>
                   
                    <h3 class="container_header">Total inbound and outbound Grin-Nodes connections (last 30min)</h3>
                    <table id="ioDataTable" border="0" width="200">
                        <thead>
                        <tr>
                            <th>inbound</th>
                            <th>outbound</th>
                        </tr>
                        </thead>
                         <tbody>
                        <tr>
                            <td style="text-align: center;width: 50%;">{{ this.$dao.io.result.inbound }}</td>
                            <td>{{ this.$dao.io.result.outbound }}</td>
                        </tr>
                        </tbody>
                        <tfoot>
                        <tr>
                            <td colspan="1">
                                <span>Last updated: {{ new Date(+this.$dao.io.lastUpdated) }}</span>
                            </td>
                            <td colspan="1">
                                <span>Response time: {{ this.$dao.ioTime }}</span>
                            </td>
                        </tr>
                        </tfoot>
                    </table>

                    <h2 class="container_header">User Agents over the last 30 days</h2>
                    <table id="agentDataTable" border="0">
                        <thead>
                        <tr>
                            <th>User Agent</th>
                            <th>Seen</th>
                            <th>Dominance</th>
                        </tr>
                        </thead>

                        <tbody>
                        <tr v-for="(ua, index) in this.$dao.agents.result" :key="index">
                            <td>{{ ua.user_agent }}</td>
                            <td>{{ ua.seen }}</td>
                            <td>{{ Math.round(ua.dominance * 100) + '%' }}</td>
                        </tr>
                        </tbody>

                        <tfoot>
                        <tr>
                            <td colspan="2">
                                <span>Last updated: {{ new Date(+this.$dao.agents.lastUpdated) }}</span>
                            </td>
                            <td colspan="1">
                                <span>Response time: {{ this.$dao.agentsTime }}</span>
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
    name: "Stats",
    mounted() {
      this.$dao.getAgents();
      this.$dao.ioCheck();
    }
  }
</script>

<style scoped>

</style>
