<template>
    <div class="body_wrapper">
        <main class="content">
            <section class="home">
                <div class="container home_container">
                    <h1 class="container_header">Contact</h1>
                    <p>You can reach us on our <a href="https://github.com/MCM-Mike/grinnode.live/blob/master/contact.md">github page</a>. You can also find us on <a href="https://keybase.io/team/grincoin">Grincoin team on keybase</a>. More instructions how to join on official <a href="https://grin.mw/community">community page</a>. This page also lists alternative communication channels such as forum, mailing list etc.</p>
                </div>
            </section>
        </main>
    </div>
</template>

<script>
  export default {
    name: "Contact",
    mounted() {
      this.$dao.getAgents();
      this.$dao.ioCheck();
    }
  }
</script>

<style scoped>

</style>
