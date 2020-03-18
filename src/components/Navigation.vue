<template>
    <div class="navigation">
        <div class="navigation_logo">
            <a class="navigation_logo_link">
                <img src="/images/grin-logo.svg" alt="">
            </a>
            <h2>Grinnode.live</h2>
        </div>
        <nav class="menu">
            <router-link exact to="/">Home</router-link>
            <router-link exact to="/challenge">Challenge</router-link>
            <router-link exact to="/stats">Stats</router-link>
            <router-link exact to="/faq">FAQ</router-link>
        </nav>
        <a href="https://github.com/MCM-Mike/grinnode.live/blob/master/donation.md" class="action_button">Donations & Sponsorships</a>
    </div>
</template>

<script>
  export default {
    name: "Navigation",
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
        justify-content: flex-start;
        background-color: var(--secondary-color);
        color: var(--text-secondary-color);
    }

    .navigation_logo {
        position: relative;
        margin-right: 50px;
        flex-flow: wrap;
        justify-content: center;
        height: 100%;
        width: auto;
    }

    .navigation_logo_link {
        display: block;
        width: 2.5rem;
        height: 2.5rem;
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
        color: var(--text-secondary-color);
        margin-left: 5px;
        border-radius: 2px;
    }

    .menu > *:first-child {
        margin-left: 0;
    }

    .action_button {
        background: var(--tertiary-color);
        color: var(--text-primary-color);
        margin-left: auto;
        padding: 15px;
        border: none;
        border-radius: 4px;
        font-weight: 600;
        cursor: pointer;
        /*
        box-shadow: 0px 3px 10px 0px rgba(0, 0, 0, 0.18);
        */
        transition: all 0.3s ease-in-out;
    }

    .action_button:hover {
        background: var(--text-primary-color);
        color: var(--primary-color);
    }
</style>
