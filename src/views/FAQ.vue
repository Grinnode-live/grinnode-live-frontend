<template>
  <div class="body_wrapper">
    <main class="content">
      <section class="home">
        <div class="container home_container">
          <h2 class="container_header">Frequently Asked Questions</h2>
          <h3>Check TOR address  </h3>
          <p>Check if the receiving TOR address is available. </p>
          <p>
          <ul>
            <li>via HTTP:<a href="https://grinchck.uber.space">https://grinchck.uber.space/ </a> </li>
            <li>via TOR:<a href="http://grinchck.ahcbagldgzdpa74g2mh74fvk5zjzpfjbvgqin6g3mfuu66tynv2gkiid.onion/">http://grinchck.ahcbagldgzdpa74g2mh74fvk5zjzpfjbvgqin6g3mfuu66tynv2gkiid.onion/</a>     </li>
          </ul>
          </p>
          <p>by: https://github.com/davidtavarez/grinaddresschecker</p>

          <h3>How to run a Grin-Node?</h3>
          <p>There are different Grin-Nodes you can be running to participate in this challenge:</p>
          <ul>
            <li>Core Grin-Node Linux (<a href="https://github.com/mimblewimble/docs/wiki/How-to-run-a-Grin-node">https://github.com/mimblewimble/docs/wiki/How-to-run-a-Grin-node</a>)</li>
            <li>Core Grin-Node Windows (<a href="https://github.com/MCM-Mike/grinnode.live/blob/master/documentation/node/winodws-how-to-run-node.md">https://github.com/MCM-Mike/grinnode.live/blob/master/documentation/node/winodws-how-to-run-node.md</a>)</li>
            <li>Core Grin-Node on Google-Cloud (<a href="https://github.com/mimblewimble/docs/wiki/How-to:-Run-a-Grin-node-on-Google-Cloud-for-free">https://github.com/mimblewimble/docs/wiki/How-to:-Run-a-Grin-node-on-Google-Cloud-for-free</a>)</li>
            <li><a href="https://grinplusplus.github.io/#/" target="_blank">Grin++</a></li>
          </ul>
          <h3>How are we calculating your Grin-Node uptime?</h3>
          <p>We are querying our publicly available Grin-API <router-link exact to="/home">https://grinnode.live</router-link> every 10 minutes. These results will be stored in a database and compared.</p>
          <h3> Public API </h3>
          <ul>
            <li> HEALTH_CHECK_API_URL = <a href="https://grinnode.live:8080/healthcheck"> https://grinnode.live:8080/healthcheck </a></li>
            <li> PEERS_API_URL = <a href="https://grinnode.live:8080/peers">https://grinnode.live:8080/peers </a></li>
            <li> AGENTS_API_URL = <a href="https://grinnode.live:8080/agents">https://grinnode.live:8080/agents</a></li>
          </ul>
          <h3>Where can I see my Grin-Node rank?</h3>
          <p>You can view the current leaderboard <router-link exact to="/challenge">here</router-link>.</p>
          <h3> Do I need a API secret?</h3>
          <p>No! All API's can be used without any API secret or owner secrets. No basic-auth must be set to use it.<p>
          <h3>How to install and run a Grin Node with a DebianVPS</h3>
          <p>Tutorial: <a href="https://medium.com/@28e6d94f/how-to-install-and-run-a-grin-node-with-a-debianvps-dab8dcbe88d8">https://medium.com/@28e6d94f/how-to-install-and-run-a-grin-node-with-a-debianvps-dab8dcbe88d8</a> </p>
          <h3>Why is my IP address listed twice?</h3>
          <p><pre>[::ffff:213.239.215.236]:3414</pre>
          This means your Grin-Node is connected to us as an inbound peer.<pre>213.239.215.236:3414</pre>This means your Grin-Node is connected to us as an outbound peer.</p>
          <p>Your highest Average Uptime will win.</p>
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
        list-style: inside;
    }
</style>
