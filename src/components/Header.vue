<template>
    <header class="header">
        <div class="header__news">
            <span>[14-03-2020] Welcome to our new website!</span>
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
        justify-content: flex-start;
        font-size: 0.8rem;
        font-weight: 500;
        line-height: 30px;
        color: #7ebeff;
        background-color: rgba(10, 10, 30, 0.6);
        overflow: hidden;
    }

    .header__news span {
        padding: 0 10px;
    }
</style>
