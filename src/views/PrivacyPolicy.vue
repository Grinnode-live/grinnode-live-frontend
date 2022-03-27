<template>
  <v-row>
    <v-col cols="10" offset="1" align="center">
      <h1 class="text-h4 mb-6">Privacy Policy</h1>
      <p class="text-justify">
        This is a free service to the GRIN community.
      </p>


      <p class="text-justify">
        In order to keep the 24/7 high-availability we have to log some of our incoming requests in order to find
        problems between each nodes.
      </p>

      <p class="text-justify">
        Our Webservers and Loadbalancer are logging requests when using grinnode.live including the following
        attributes:
      </p>



        <ul  >

        <li>Page requested</li>
        <li>Protocol requested</li>
        <li>IP address</li>
        <li>Amount of Bytes served</li>
        <li>User agent</li>
        <li>Referrer</li>
        <li>Error logs</li>
      </ul>



      <p class="text-justify">
        These log are stored on the servers and deleted after 14 day log-rotation on the server.
      </p>
      <p class="text-justify">
        When using the Grinnode Wallet API , you are trusting us to run a Grin node. It is recommended to run your own
        Grin-Node and use it instead of our API which is better for your privacy.
      </p>

    </v-col>
  </v-row>


</template>

<script>
export default {
  name: "PrivacyPolicy"
}
</script>

<style scoped>

li {
  text-align: left;
}
</style>
