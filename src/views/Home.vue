<template>
    <div class="body_wrapper">
        <main class="content">
            <section class="home">
                <div class="container home_container">
                <h1 class="container_header">Grinnode.live high-available GRIN-API & Sync-Service</h1>
                <p>Grin is a privacy-preserving digital currency built openly by developers distributed all over the world. The grin network consists of <a href="https://github.com/mimblewimble/docs/wiki/How-to-run-a-Grin-node">nodes</a> processing transaction requests and forwarding them to the <a href="https://github.com/mimblewimble/docs/wiki/How-to-mine-Grin">miners</a>. Without access to a running node you cannot access the grin network, which is required for example for syncing your <a href="https://github.com/mimblewimble/docs/wiki/How-to-use-the-Grin-wallet">grin-wallet</a>.</p>
                <p>We needed a grin-node running 24/7 for our own purposes and eventually we setup a series of nodes and connected them together. Project went public and new features such as API access and CORE GRIN_DNS Seeds have been added. To encourage growth of this network we even organized a <router-link exact to="/challenge">uptime challenge</router-link>. This is the brief story behind the grinnode.live project, a high-available API and Sync-Service for Grin digital currency.</p>
                <p>If you are a Grin beginner and don't yet have your own node up and running feel free to use this service to <router-link to="/tutorials" v-scroll-to="'#tutorial-wallet-connect'">connect and sync your Grin wallet</router-link>. Keep in mind having your own node provides you with better security and privacy so long term you should consider setting it up. If you already have your node up and running consider <router-link to="/tutorials" v-scroll-to="'#tutorial-node-connect'">joining our node network</router-link>. More examples of usage are available on the <router-link exact to="/tutorials">tutorials page</router-link>. If you have questions make sure you check the <router-link exact to="/faq">frequently asked questions page</router-link> and if you don't find answers check the <router-link exact to="/contact">contact page</router-link> and reach us!</p>
                <h2>Updates</h2>
                <h3>07/2020</h3>
                <p> All our Grin-Nodes will be upgraded to <a href="https://github.com/mimblewimble/grin/tree/current/4.0.x">Grin-Node version 4.0.x</a></p>
                <p><strong>We will deprecate the APIv1 prior to the next Hardfork v5.0.x</strong></p>
                <h3>05/2020</h3>
                <p>Grinnode.live is not part of the Grin-Node DNS Seed list:<a href="https://github.com/mimblewimble/grin/pull/3282"> pull request</a></p>
                <p>Added Seed-Node: "mainnet-seed.grinnode.live" (29.03.2020)
                <p>We enabled GRIN API v2 on our high-available GRIN-Node's</p>
                <p>new Website done by <a href="https://github.com/WarmBeer/">@WarmBeer</a>
                    &nbsp;
                    &nbsp;
                    &nbsp;
                    &nbsp;
                    <p style="text-decoration: underline;">Use Blocks not Bombs</p>
                    <p><img width="200" height="190" src="images/blocks-not-bombs-878x1024.png" alt="Use Blocks not Bombs " /></p>
                </div>
            </section>
        </main>
    </div>
</template>

<script>
  export default {
    name: "Home",
    components: {
    },
  }
</script>

<style scoped>
    ul {
        list-style: inside;
    }
</style>
