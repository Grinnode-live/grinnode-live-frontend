<template>
    <footer class="footer">
        <div class="container footer__container">
            <div class="container">
                <div class="sponsor-bar">
                    <h2 class="footer_header">Our Partners</h2>
                </div>
                <div class="bottom-bar">
                    <div class="disclaimer">
                        <span style="color: #FFFFFF">© 2020 Grinnode.</span>
                        <a>Terms of Service.</a>
                        <a>Privacy Policy.</a>
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
        color: rgba(255, 255, 255, 1);
    }

    .sponsor-bar {
        background-color: rgba(255, 255, 255, 0.1);
    }

    .bottom-bar {
        border-top: 1px solid rgba(255,255,255,0.10);
        padding: 15px 0;
        background-color: rgba(10, 10, 30, 0.6);
    }

    .disclaimer {
        display: flex;
        justify-content: space-between;
        margin: auto;
        max-width: 400px;
    }
</style>
