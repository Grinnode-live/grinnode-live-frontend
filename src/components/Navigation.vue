<template>
    <div class="navigation">
        <div class="navigation_logo">
            <!--
            <a class="navigation_logo_link">
                <img src="" alt="">
            </a>
            -->
            <h2>Grinnode.live</h2>
        </div>
        <nav class="menu">
            <router-link exact to="/">Home</router-link>
            <router-link exact to="/challenge">Challenge</router-link>
        </nav>
    </div>
</template>

<script>
  export default {
    name: "Navigation"
  }
</script>

<style scoped>
    .navigation, .navigation_logo {
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
    }

    .navigation {
        z-index: 6;
        position: relative;
        max-width: 100%;
        padding: 0 60px;
        height: 70px;
        -webkit-box-pack: justify;
        -ms-flex-pack: justify;
        justify-content: space-between;
        background-color: rgba(255, 255, 255, 0.1);
        color: #ffffff;
        box-shadow: 0px 20px 20px -10px rgba(0,0,0,0.05);
    }

    .navigation_logo {
        position: relative;
        -webkit-box-orient: vertical;
        -webkit-box-direction: normal;
        flex-flow: wrap;
        -webkit-box-pack: center;
        -ms-flex-pack: center;
        justify-content: center;
        height: 100%;
        width: auto;
    }

    .navigation_logo_link {
        display: block;
        width: 4rem;
        height: 3.5rem;
        margin-right: 10px;
    }

    .navigation_logo_link img {
        display: block;
        height: 100%;
        width: 100%;
    }

    .menu {
        display: flex;
        flex-wrap: wrap;
        align-items: flex-end;
    }

    .menu > * {
        padding: 15px 15px;
        font-weight: 600;
        font-style: normal;
        position: relative;
        display: block;
        font-size: 1rem;
        line-height: 1;
        text-decoration: none;
        cursor: pointer;
        color: #ffffff;
        margin-left: 5px;
        border-radius: 2px;
    }

    .menu > *:first-child {
        margin-left: 0;
    }
</style>
