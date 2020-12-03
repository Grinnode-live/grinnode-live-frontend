<template>
  <nav>
    <v-app-bar app elevate-on-scroll color="yellow">
      <v-app-bar-nav-icon  @click="drawer=!drawer" class="grey--text  hidden-md-and-up ">

      </v-app-bar-nav-icon>
      <v-img class="mx-3"
             contain
             max-height="40"
             max-width="40"
             left
             src="/images/grin-logo.svg"></v-img>

      <v-toolbar-title>

        <span class="text-h5">Grinnode.live</span>
      </v-toolbar-title>





      <v-spacer/>


      <v-btn color="black" medium>
        <span class="white--text">Donations & Sponsorships</span>
        <v-icon right>exit_to_app</v-icon>
      </v-btn>


      <template v-slot:extension>
        <v-tabs
            centered
            class="hidden-lg-and-up hidden-sm-and-down"
            color="black"
            v-model="tab"
        >
          <v-tabs-slider color="yellow"></v-tabs-slider>

          <v-tab>
            <span>Home</span>
            <v-icon right>home</v-icon>
          </v-tab>

          <v-tab href="/tutorials">
            <span>Tutorials</span>
            <v-icon right>receipt_long</v-icon>
          </v-tab>

          <v-tab>
            <span>Challenge</span>
            <v-icon right>watch</v-icon>
          </v-tab>

          <v-tab>
            <span>Stats</span>
            <v-icon right>leaderboard</v-icon>
          </v-tab>

          <v-tab>
            <span>FAQ</span>
            <v-icon right>question_answer</v-icon>
          </v-tab>


          <v-tab>
            <span>Contact</span>
            <v-icon right>contact_page</v-icon>
          </v-tab>


        </v-tabs>
      </template>


    </v-app-bar>


    <v-navigation-drawer v-model="drawer" app  class="yellow">
      <v-list
          nav
          dark>

        <v-list-item-group
            active-class="black--text darken-4  "
        >
          <v-list-item v-for="link in links" :key="link.text" router :to="link.route">
            <v-list-item-action>
              <v-icon class="black--text">{{ link.icon }}</v-icon>

            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title class="black--text">{{ link.text }}</v-list-item-title>
            </v-list-item-content>


          </v-list-item>


        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>

  </nav>

</template>

<script>
export default {
  name: "HeaderMat",
  data() {
    return {
      tab: true,
      drawer: false,
      links: [
        {icon: 'home',text:'Home',route:'/'},
        {icon: 'receipt_long',text:'Tutorials',route:'/tutorials'},
        {icon: 'watch',text:'Challange',route:'/challenge'},
        {icon: 'leaderboard',text:'Stats',route:'/stats'},
        {icon: 'question_answer',text:'FAQ',route:'/faq'},
        {icon: 'contact_page',text:'Contact',route:'/contact'},

      ]
    }

  }
}
</script>

<style>

</style>