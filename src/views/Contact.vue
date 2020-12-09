<template>

  <v-row>
    <v-col cols="10" offset="1" align="center">
      <h1 class="text-h4 mb-6 "  >Contact</h1>
      <p class="text-justify"> You can reach us on our <a href="https://github.com/MCM-Mike/grinnode.live/blob/master/contact.md">github page</a>. You can also find us on <a href="https://keybase.io/team/grincoin">Grincoin team on keybase</a>. More instructions how to join on official <a href="https://grin.mw/community">community page</a>.
        This page also lists alternative communication channels such as forum, mailing list etc.</p>
    </v-col>

  </v-row>


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
