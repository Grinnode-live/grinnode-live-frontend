<template>
    <div class="body_wrapper">
        <main class="content">
            <section class="home">
                <div class="container home_container">
                    <h2 class="container_header">Frequently Asked Questions</h2>

                    <h3>How to run a Grin-Node?</h3>
                    <p>
                        There are different Grin-Nodes you can be running to participate in this challenge:
                    </p>
                    <ul>
                        <li>Core Grin-Node (<a href="https://github.com/mimblewimble/docs/wiki/How-to-run-a-Grin-node">https://github.com/mimblewimble/docs/wiki/How-to-run-a-Grin-node</a>)</li>
                        <li>Core Grin-Node on Google-Cloud (<a href="https://github.com/mimblewimble/docs/wiki/How-to:-Run-a-Grin-node-on-Google-Cloud-for-free">https://github.com/mimblewimble/docs/wiki/How-to:-Run-a-Grin-node-on-Google-Cloud-for-free</a>)</li>
                        <li>Grin++</li>
                    </ul>

                    <h3>How are we calculating your Grin-Node uptime?</h3>
                    <p>
                        We are querying our publicly available Grin-API (https://grinnode.live) every 30 minutes. These results will be stored in a database and compared.
                    </p>

                    <h3>Where can I see my Grin-Node rank?</h3>
                    <p>
                        You can view the current leaderboard <router-link exact to="/challenge">here</router-link>.
                    </p>
                </div>
            </section>
        </main>
    </div>
</template>

<script>
  export default {
    name: "FAQ"
  }
</script>

<style scoped>
    ul {
        list-style: circle;
    }
</style>
