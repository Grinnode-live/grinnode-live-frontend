<template>
  <nav>

    <v-system-bar  absolute   app dark class="grey darken-2">

      <span class="hidden-sm-and-down">
        [03/2020] We enabled GRIN API v2 on our high-available GRIN-Node's
      </span>

      <v-spacer></v-spacer>
      <span>API status:</span>
      <span @click="$router.push('/global-health-check')" class="mx-2"
            :style="this.$dao.statusStyle">{{ this.$dao.apiStatus }}</span>
    </v-system-bar>

    <v-app-bar app absolute hide-on-scroll   elevation="0" dense  color="secondary">
      <v-app-bar-nav-icon @click="drawer=!drawer" class="black--text  hidden-md-and-up ">

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


      <v-btn class="hidden-sm-and-down" color="info" medium
             href="https://github.com/MCM-Mike/grinnode.live/blob/master/donation.md">
        <span class="white--text">Donations & Sponsorships</span>

      </v-btn>

      <template v-slot:extension>

        <v-tabs
            centered
            class="hidden-sm-and-down"
            color="black"
            v-model="tab"
        >
          <v-tabs-slider color="yellow"></v-tabs-slider>
          <v-tab to="/">
            <span>Home</span>
            <v-icon right>home</v-icon>
          </v-tab>
          <v-tab to="/tutorials">
            <span>Tutorials</span>
            <v-icon right>receipt_long</v-icon>
          </v-tab>
          <v-tab to="/challenge">
            <span>Challenge</span>
            <v-icon right>watch</v-icon>
          </v-tab>
          <v-tab to="/stats">
            <span>Stats</span>
            <v-icon right>leaderboard</v-icon>
          </v-tab>
          <v-tab to="/faq">
            <span>FAQ</span>
            <v-icon right>question_answer</v-icon>
          </v-tab>
          <v-tab to="/contact">
            <span>Contact</span>
            <v-icon right>contact_page</v-icon>
          </v-tab>


        </v-tabs>
      </template>


    </v-app-bar>


    <v-navigation-drawer v-model="drawer" app disable-resize-watcher class="white">
      <v-list
          nav
          dark>

        <v-list-item-group
            active-class="yellow--text darken-4  "
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

      <v-divider></v-divider>

      <v-chip class="mt-4" dark label large color="info"
              href="https://github.com/MCM-Mike/grinnode.live/blob/master/donation.md">
        <v-icon left>mood</v-icon>
        Donations & Sponsorships
      </v-chip>
      <!--      <v-chip class="hidden-sm-and-down" color="black" medium href="https://github.com/MCM-Mike/grinnode.live/blob/master/donation.md">-->
      <!--        <span class="white&#45;&#45;text">Donations & Sponsorships</span>-->

      <!--      </v-chip>-->


    </v-navigation-drawer>

  </nav>

</template>

<script>
export default {
  name: "Header",
  data() {
    return {
      tab: true,
      drawer: false,
      links: [
        {icon: 'home', text: 'Home', route: '/'},
        {icon: 'receipt_long', text: 'Tutorials', route: '/tutorials'},
        {icon: 'watch', text: 'Challange', route: '/challenge'},
        {icon: 'leaderboard', text: 'Stats', route: '/stats'},
        {icon: 'question_answer', text: 'FAQ', route: '/faq'},
        {icon: 'contact_page', text: 'Contact', route: '/contact'},
      ],
      headBarFixed: false
    }

  }
}
</script>

<style>

</style>