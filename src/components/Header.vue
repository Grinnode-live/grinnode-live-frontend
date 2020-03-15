<template>
    <header class="header">
        <div class="header__news">
            <ol class="header_news_messages">
                <li>[15-03-2020] Have you heard of our latest challenge? You can find more info on the challenge tab!</li>
                <li>[14-03-2020] Welcome to our new website!</li>
            </ol>
            <div class="header_news_status">
                <span style="margin-right: 10px;">API status:</span><span style="color: rgb(0, 255, 31);">online</span>
            </div>
        </div>
        <Navigation></Navigation>
    </header>
</template>

<script>
  import Navigation from "@/components/Navigation";
  export default {
    name: "Header",
    components: {Navigation}
  }
</script>

<style scoped>
    .header {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        z-index: 10000;
        height: 100px;
        background-color: transparent;
    }

    .header__news {
        z-index: 8;
        position: relative;
        padding: 0 40px;
        display: flex;
        width: 100%;
        height: 30px;
        flex-flow: row;
        justify-content: space-between;
        font-size: 0.8rem;
        font-weight: 500;
        line-height: 30px;
        color: #7ebeff;
        background-color: rgba(10, 10, 30, 0.6);
        overflow: hidden;
    }

    .header_news_messages {
        display: flex;
        flex-wrap: wrap;
        max-width: 85%;
    }

    .header_news_messages li {
        padding: 0 10px;
    }

    .header_news_status {
        display: flex;
        flex-wrap: wrap;
        max-width: 15%;
        padding: 0 10px;
    }
</style>
