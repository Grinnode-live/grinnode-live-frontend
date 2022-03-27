<template>
  <div>
  <v-app>
<!--    <v-system-bar  >-->
<!--      <span>[03/2020] We enabled GRIN API v2 on our high-available GRIN-Node's</span>-->
<!--    </v-system-bar>-->
<!--  <div id="app">-->
<!--    <Header></Header>-->
    <GrinnodeHeader></GrinnodeHeader>
    <v-main class="my-6" >

      <v-container  >


        <router-view></router-view>
      </v-container>

    </v-main>
    <GrinnodeFooter></GrinnodeFooter>
<!--  </div>-->
  </v-app>
  </div>
</template>

<script>
import GrinnodeHeader from "@/components/GrinnodeHeader";
import GrinnodeFooter from "@/components/GrinnodeFooter";


export default {
  name: 'App',
  components: {
    GrinnodeFooter,
    GrinnodeHeader
  },
}
</script>

<style>

</style>
