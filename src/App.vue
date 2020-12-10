<template>
  <div>

  <v-app>

<!--    <v-system-bar  >-->
<!--      <span>[03/2020] We enabled GRIN API v2 on our high-available GRIN-Node's</span>-->
<!--    </v-system-bar>-->


<!--  <div id="app">-->
<!--    <Header></Header>-->
    <Header></Header>
    <v-main class="my-6" >

      <v-container  >
        <router-view></router-view>
      </v-container>

    </v-main>
    <Footer></Footer>
<!--  </div>-->
  </v-app>
  </div>
</template>

<script>
import Header from "@/components/Header";
import Footer from "@/components/Footer";


export default {
  name: 'App',
  components: {
    Footer,
    Header
  },
}
</script>

<style>

</style>
