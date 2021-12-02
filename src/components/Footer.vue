<template>


  <v-footer  app color="black" dark>
    <span>© 2021 Grinnode.live v1.2.1</span>
    <v-spacer></v-spacer>
    <div class=" mx-2" >
      <router-link class="yellow--text mx-2" exact to="/terms-of-service">Terms of Service</router-link>
      <router-link class="yellow--text mx-2" exact to="/privacy-policy">Privacy Policy</router-link>
    </div>
  </v-footer>


</template>

<script>
export default {
  name: "Footer"
}
</script>

<style scoped>

</style>