<template>
    <div class="body_wrapper">
        <main class="content">
            <section class="home">
                <div class="container home_container">
                    <h2 class="container_header">Statistics</h2>
                    <p>
                        Public information of the Grinnode.live API.
                    </p>
                     <h2 class="container_header">Total inbound and outbound Grin-Nodes connected</h2>
                    <table id="agentDataTable" border="0">
                        <thead>
                        <tr>
                            <th>lastUpdated</th>
                            <th>inbound</th>
                            <th>outbound</th>
                        </tr>
                        </thead>
                         <tbody>
                        <tr v-for="(ua, index) in this.$dao.io.result" :key="index">
                            <td>{{ lastUpdated }}</td>
                            <td>{{ inbound }}</td>
                            <td>{{ outbound }}</td>
                        </tr>
                        </tbody>

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
    }
  }
</script>

<style scoped>

</style>
