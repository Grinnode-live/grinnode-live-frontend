<template>
  <nav>
    <v-system-bar absolute app dark class="grey darken-2">
      <span class="hidden-sm-and-down">
        [07/2021] Grinnode.live is updated!
      </span>
      <v-spacer></v-spacer>

      <div class="d-none d-md-flex">
      <span v-if="grinBTCPrice" class="mr-8">{{ grinBTCPrice }} / BTC
      ({{ grinBTCPriceChange }} %) </span>
        <span v-if="grinUSDPrice" class="mr-8"> &#36; &nbsp; {{ grinUSDPrice }} ({{ grinUSDPriceChange }} %) </span>
        <span>API status:</span>
        <span @click="$router.push('/global-health-check')" class="mx-2"
              :style="this.$dao.statusStyle">{{ this.$dao.apiStatus }}</span>
      </div>

      <div class="d-md-none">
        <span v-if="grinBTCPrice" class="mr-4">{{ grinBTCPrice }} BTC    </span>
        <span v-if="grinUSDPrice" class="mr-4"> &#36;{{ grinUSDPrice }}  </span>
        <span>API :</span>
        <span @click="$router.push('/global-health-check')" class="mx-2"
              :style="this.$dao.statusStyle">{{ this.$dao.apiStatus }}</span>
      </div>

    </v-system-bar>

    <v-app-bar app absolute hide-on-scroll elevation="0" dense color="secondary">
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

        <v-sheet color="#fef102" class="mx-auto pb-0 hidden-sm-and-down negative-bottom-margin">
          <v-chip medium to="/" color="#fef102" class="rounded-0 px-2  ">
            <span class="text-subtitle-2 text--primary">HOME</span>
            <HomeIcon/>
          </v-chip>
          <v-chip to="/tutorials" color="#fef102" class="rounded-0">
            <span class="text-subtitle-2 text--primary ">TUTORIALS</span>
            <TutorialIcon/>
          </v-chip>
          <v-menu offset-y>
            <template v-slot:activator="{ on, attrs }">
              <v-chip color="#fef102" class="rounded-0" v-bind="attrs" v-on="on">
                <span class="text-subtitle-2 text--primary">CHALLENGES</span>
                <ChallengesIcon/>
              </v-chip>
            </template>
            <v-list color="#fef102">
              <v-list-item key="0" @click="alert('clicked')" to="/challenge/0">
                <v-list-item-title>Bug Challenge</v-list-item-title>
              </v-list-item>
              <v-list-item key="1" to="/challenge/1">
                <v-list-item-title>Node Challenge</v-list-item-title>
              </v-list-item>
            </v-list>
          </v-menu>


          <v-chip to="/stats" color="#fef102" class="rounded-0">
            <span class="text-subtitle-2 text--primary">STATS</span>
            <StatsIcon />
          </v-chip>
          <v-chip to="/faq" color="#fef102" class="rounded-0">
            <span class="text-subtitle-2 text--primary">FAQ</span>
            <FaqIcon />
          </v-chip>
          <v-chip to="/contact" color="#fef102" class="rounded-0">
            <span class="text-subtitle-2 text--primary">CONTACT</span>
            <ContactIcon />
          </v-chip>


        </v-sheet>

      </template>


    </v-app-bar>


    <v-navigation-drawer v-model="drawer" app disable-resize-watcher>


      <v-list
          nav
          dark>

        <v-list-item-group
            active-class="yellow--text darken-4  "
        >


          <v-list-item router key="HOME" to="/">
            <v-list-item-action>
              <HomeIcon class="black--text" />
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title class="black--text">HOME</v-list-item-title>
            </v-list-item-content>
          </v-list-item>

          <v-list-item router key="TUTORIALS" to="/tutorials">
            <v-list-item-action>
              <TutorialIcon class="black--text" />
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title class="black--text">TUTORIALS</v-list-item-title>
            </v-list-item-content>
          </v-list-item>

          <v-list-item router key="CHALLENGEs" to="/challenge/0">
            <v-list-item-action>
              <ChallengesIcon class="black--text" />
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title class="black--text">CHALLENGES</v-list-item-title>
            </v-list-item-content>
          </v-list-item>


          <v-list-item router key="STATS" to="/stats">
            <v-list-item-action>
              <StatsIcon class="black--text" />
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title class="black--text">STATS</v-list-item-title>
            </v-list-item-content>
          </v-list-item>

          <v-list-item router key="FAQ" to="/faq">
            <v-list-item-action>
              <FaqIcon class="black--text" />
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title class="black--text">FAQ</v-list-item-title>
            </v-list-item-content>
          </v-list-item>


          <v-list-item router key="CONTACT" to="/contact">
            <v-list-item-action>
              <ContactIcon class="black--text" />
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title class="black--text">Contact</v-list-item-title>
            </v-list-item-content>
          </v-list-item>


        </v-list-item-group>

      </v-list>

      <v-divider></v-divider>

      <v-chip class="ml-2 mt-4" dark label large color="info"
              href="https://github.com/MCM-Mike/grinnode.live/blob/master/donation.md">
        <DonationIcon />
        Donations & Sponsorships
      </v-chip>


    </v-navigation-drawer>

  </nav>

</template>

<script>
import HomeIcon from "./icons/HomeIcon";
import ChallengesIcon from "./icons/ChallengesIcon";
import StatsIcon from "./icons/StatsIcon";
import TutorialIcon from "./icons/TutorialIcon";
import FaqIcon from "./icons/FaqIcon";
import ContactIcon from "./icons/ContactIcon";
import DonationIcon from "./icons/DonationIcon";
export default {
  name: "Header",
  components: {DonationIcon, ContactIcon, FaqIcon, TutorialIcon, StatsIcon, ChallengesIcon,HomeIcon},
  data() {
    return {
      tab: true,
      drawer: false,

      headBarFixed: false,
      grinBTCPrice: "",
      grinBTCPriceChange: "",
      grinUSDPrice: "",
      grinUSDPriceChange: ""
    }

  },
  mounted() {
    this.$dao.healthCheck();
    this.refreshGrinPrice();
    setInterval(this.refreshGrinPrice, 5000);
  },
  methods: {
    refreshGrinPrice: function () {
      fetch("https://api.coingecko.com/api/v3/coins/grin")
          .then(response => response.json())
          .then((result) => {

            this.grinBTCPrice = result['market_data']['current_price']['btc'];
            let priceChange = result['market_data']['price_change_percentage_24h_in_currency']['btc'];
            this.grinBTCPriceChange = priceChange.toFixed(1) + "";

            this.grinUSDPrice = result['market_data']['current_price']['usd'];
            let usdPriceChange = result['market_data']['price_change_percentage_24h_in_currency']['usd'];
            this.grinUSDPriceChange = usdPriceChange.toFixed(1) + "";
          })
          .catch(() => {
            this.$data.grinBTCPrice = "";
            this.$data.grinBTCPriceChange = "";
            this.$data.grinUSDPrice = "";
            this.$data.grinUSDPriceChange = "";
          })
    }
  }

}
</script>

<style>

.negative-bottom-margin {
  margin-bottom: -1rem;
}

</style>