<template>
    <header class="header">
        <div class="header__news">
            <ol class="header_news_messages">
                <li>[15-03-2020] Have you heard of our latest challenge? You can find more info on the challenge tab!</li>
                <li>[14-03-2020] Welcome to our new website!</li>
            </ol>
            <div class="header_news_status">
                <span style="margin-right: 5px;">API status:</span><span class="api_status" :style="this.$dao.statusStyle">{{ this.$dao.apiStatus }}</span>
            </div>
        </div>
        <Navigation></Navigation>
    </header>
</template>

<script>
  import Navigation from "@/components/Navigation";
  export default {
    name: "Header",
    components: {Navigation},
    mounted() {
      this.$dao.healthCheck();
    },
  }
</script>

<style scoped>
    ul, ol {
        list-style: none;
    }

    .header {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        z-index: 10000;
        height: 100px;
        background-color: transparent;
        box-shadow: 0px 3px 10px 0px rgba(0, 0, 0, 0.12);
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
        font-weight: normal;
        line-height: 30px;
        color: var(--text-tertiary-color);
        background-color: var(--tertiary-color);
        overflow: hidden;
    }

    .header_news_messages {
        display: flex;
        flex-wrap: wrap;
        max-width: 80%;
    }

    .header_news_messages li {
        padding: 0 10px;
    }

    .header_news_status {
        display: flex;
        flex-wrap: wrap;
        max-width: 20%;
        padding: 0 10px;
    }

    .api_status {
        color: rgb(255, 255, 255);
        height: 20px;
        line-height: 20px;
        margin: 5px 0;
        border-radius: 2px;
        padding: 0 5px;
        font-weight: bold;
    }
</style>
