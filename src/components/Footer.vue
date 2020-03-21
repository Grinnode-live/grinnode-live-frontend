<template>
    <footer class="footer">
        <div class="container footer__container">
            <div class="container">
                <!--
                <div class="sponsor-bar">
                    <h2 class="footer_header">Our Partners</h2>
                </div>
                -->
                <div class="bottom-bar">
                    <div class="disclaimer">
                        <span style="color: #FFFFFF">© 2020 Grinnode.live</span>
                        <div class="legal">
                            <router-link exact to="/terms-of-service">Terms of Service.</router-link>
                            <router-link exact to="/privacy-policy">Privacy Policy.</router-link>
                        </div>
                    </div>
                </div>
            </div>
           </div>
    </footer>
</template>

<script>
  export default {
    name: "Footer"
  }
</script>

<style scoped>
    .footer {
        margin-top: 40px;
        color: #7ebeff;
        background-color: transparent;
        box-shadow: 0px -20px 20px -10px rgba(0,0,0,0.05);
    }

    .footer__container {
        width: 100%;
    }

    .footer_header {
        margin: 0;
        padding: 30px 0;
        font-size: 2em;
    }

    .sponsor-bar {
        background-color: var(--secondary-color);
        color: var(--primary-color);
    }

    .bottom-bar {
        padding: 15px 0;
        background-color: var(--tertiary-color);
    }

    .bottom-bar a {
        color: var(--secondary-color);
    }

    .disclaimer {
        width: 95vw;
        display: flex;
        justify-content: space-between;
        margin: auto;
    }

    .legal > *:last-child {
        margin-left: 10px;
    }
</style>
