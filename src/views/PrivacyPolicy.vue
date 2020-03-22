<template>
    <div class="body_wrapper">
        <main class="content">
            <section class="home">
                <div class="container home_container">
                    <h2 class="container_header">Privacy Policy</h2>
                    <p>
                        This is a free service to the GRIN community.
                    </p>

                    <p>
                        In order to keep the 24/7 high-availability we have to log some of our incoming requests in order to find problems between each nodes.
                    </p>

                    <p>
                        Our Webservers and Loadbalancer are logging requests when using grinnode.live including the following attributes:
                    </p>

                    <ul>
                        <li>Request date/time</li>
                        <li>Page requested</li>
                        <li>Protocol requested</li>
                        <li>IP address</li>
                        <li>Amount of Bytes served</li>
                        <li>User agent</li>
                        <li>Referrer</li>
                        <li>Error logs</li>
                    </ul>

                    <p>
                        These log are stored on the servers and deleted after 14 day log-rotation on the server.
                    </p>
                    <p>
                    When using the Grinnode Wallet API , you are trusting us to run a Grin node. It is recommended to run your own Grin-Node and use it instead of our API which is better for your privacy.
                    </p>

                </div>
            </section>
        </main>
    </div>
</template>

<script>
  export default {
    name: "PrivacyPolicy"
  }
</script>

<style scoped>

</style>
