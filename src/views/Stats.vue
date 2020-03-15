<template>
    <div class="body_wrapper">
        <main class="content">
            <section class="home">
                <div class="container home_container">
                    <h2 class="container_header">User Agents over the last 30 days</h2>
                    <table id="agentDataTable" border="0">
                        <thead>
                        <tr>
                            <th>User Agent</th>
                            <th>Seen</th>
                        </tr>
                        </thead>

                        <tbody>
                        <tr v-for="(ua, index) in this.$dao.agents" :key="index">
                            <td>{{ ua.user_agent }}</td>
                            <td>{{ ua.seen }}</td>
                        </tr>
                        </tbody>

                        <tfoot>
                        <tr>
                            <td colspan="1">
                                <a>Powered by Grinnode.live</a>
                            </td>
                            <td colspan="1">
                                <a>Response time: {{ this.$dao.agentsTime }}</a>
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
