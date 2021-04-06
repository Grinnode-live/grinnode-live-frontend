<template>
  <v-row>
    <v-col cols="12" align="center">

      <h1 class="text-h4 mb-6 ">Statistics</h1>
      <span>Public information of the Grinnode.live API.</span>

      <h4 class="text-h5 mt-4 grey--text text--darken-2">
        Total inbound and outbound Grin-Nodes connections
      </h4>
      <h4 class="text-h6 mt-2 mb-4 grey--text text--darken-1 "> (last 30min)</h4>


      <v-row>
        <v-col cols="4" offset="1" class="pb-2"
               style="border-bottom-color: darkgrey;border-bottom-style: solid;border-width: thin">inbound
        </v-col>
        <v-col cols="4" offset="2" class="pb-2"
               style="border-bottom-color: darkgrey;border-bottom-style: solid;border-width: thin">outbound
        </v-col>

      </v-row>
      <v-row class="mb-2">
        <v-col cols="4" offset="1">
          <span class="text-h4">{{ this.$dao.io.result.inbound }}</span>
        </v-col>
        <v-col cols="4" offset="2">
          <span class="text-h4">{{ this.$dao.io.result.outbound }}</span>
        </v-col>
      </v-row>

      <v-row  >
        <v-col cols="12">
          <WorldMap/>
        </v-col>
      </v-row>

      <span class="pt-4 text-caption grey--text text--darken-2 text-left">
            Last updated: {{ new Date(+this.$dao.io.lastUpdated) }}
          </span><br/>
      <span class="text-caption grey--text text--darken-2"> Response time: {{ this.$dao.ioTime }}</span>
      <br/>
      <span class="text-caption grey--text text--darken-2">
    Visualized with GeoLite2 data created by MaxMind, available from
    <a href="https://www.maxmind.com">https://www.maxmind.com</a>.
  </span>

      <v-divider class="my-12"/>


      <v-row justify="center" id="health">
        <v-col cols="12">
          <h4 class="text-h5 mt-4  grey--text text--darken-2">
            Grin Network Health
          </h4>
        </v-col>
        <v-col cols="12">
          <p class="text-caption mb-8"> Last updated at {{ latestHealthDate | dateFilter }} </p>
        </v-col>


      </v-row>

      <v-row>
        <v-col cols="4" offset="1" class="pb-2"
               style="border-bottom-color: darkgrey;border-bottom-style: solid;border-width: thin">Nicehash Score
        </v-col>
        <v-col cols="4" offset="2" class="pb-2"
               style="border-bottom-color: darkgrey;border-bottom-style: solid;border-width: thin">Reorg Score
        </v-col>
      </v-row>

      <v-row class="mb-2">
        <v-col cols="4" offset="1">
          <span class="text-h4">{{ latestHealthData.nicehash_score }}</span>
        </v-col>
        <v-col cols="4" offset="2">
          <span class="text-h4">{{ latestHealthData.reorg_score }}</span>
        </v-col>
      </v-row>


      <v-row class="mb-2 ">
        <v-col cols="4" offset="4">
          <p class="pb-2" style="border-bottom-color: darkgrey;border-bottom-style: solid;border-width: thin">Overall
            Health Score</p>
          <!--            <h4 class="text-h5 my-4 grey&#45;&#45;text text&#45;&#45;darken-2 pb-2" style="border-bottom-color: darkgrey;border-bottom-style: solid;border-width: thin">Block Height</h4>-->
          <p class="text-h4"> {{ latestHealthData.health_score}}</p>
        </v-col>
      </v-row>

      <v-row class="mb-2">
        <v-col cols="12">
          <p  >
            <b>Reorg score</b> calculation is based on daily reorg attack count and depth of the attack. A score of 5
            means there is no reorg attack while 0 means that network is under severe attack.
          </p>
          <p  >
            <b>Nicehash score</b> calculation is based on comparison of instantenous nicehash graph rate/price to daily
            average values. Also cost of renting hashpower is analyzed with current grin/BTC value to deduce nicehash
            profitability. Utilization of nicehash infrastructure despite being non-profit is inferred as suspicious activity.
            A score of 5 is that price ratio is balanced and nicehash graph rate is small compared to overall grin
            network graph rate. A score close to zero means that nicehash hashpower is most likely used for reorg attack
            and nicehash graph rate supplies more than half of overall grin network graph rate.
          </p>
          <p  >
            <b>Overall Health score</b> is calculated by taking average of reorg score and nicehash score. Scores are
            given in a range of 0 to 5. The highest score of 5 means network is healthy and there is no attack.
          </p>
          <p>
            Calculation formulas are based on <a href="https://github.com/j01tz/grin-health">joltz1 algorithm</a>.
          </p>

          <p > Please consider donating to <a href="https://github.com/bladedoyle/grin_nicehash_defender/">Grin Nicehash Defender </a> for protection of grin network from outside attacks. Grin Nicehash Defender activates a defensive mechanism by increasing hashpower of network when abnormal activity is detected. Grinnode.live has donated to project and also running an instance of Grin Nicehash Defender. </p>
        </v-col>

      </v-row>
      <!--      Chart Row  -->
      <v-row class="mb-4">
        <v-col cols="12" class="mb-0 pb-0">
          <HealthScoreChart/>
        </v-col>
      </v-row>

      <v-divider class="my-12"></v-divider>

      <v-row class="mb-2 ">
        <v-col cols="4" offset="4">
          <p class="pb-2" style="border-bottom-color: darkgrey;border-bottom-style: solid;border-width: thin">Block Height</p>
          <!--            <h4 class="text-h5 my-4 grey&#45;&#45;text text&#45;&#45;darken-2 pb-2" style="border-bottom-color: darkgrey;border-bottom-style: solid;border-width: thin">Block Height</h4>-->
          <span class="text-h4"> {{ this.$dao.currentBlockHeight }}</span>
        </v-col>
      </v-row>

      <v-divider class="my-12"></v-divider>

      <h4 class="text-h5 my-8 grey--text text--darken-2">
        User Agents over the last 30 days
      </h4>

      <v-data-table
          :headers="headers"
          :items="agents_data"
          :items-per-page="10"
      >

      </v-data-table>

      <p class="mt-8  text-caption grey--text text--darken-2 text-center">
        Last updated: {{ new Date(+this.$dao.agents.lastUpdated) }}
      </p>
      <span class="text-caption grey--text text--darken-2"> Response time: {{ this.$dao.agentsTime }}</span>
    </v-col>
  </v-row>
</template>

<script>
import WorldMap from "@/components/WorldMap";
import HealthScoreChart from "@/components/HealthScoreChart";

export default {
  name: "Stats",
  components: {HealthScoreChart, WorldMap},
  mounted() {

    this.$dao.ioCheck();
    this.$dao.getAgents();
    this.$dao.getBlockHeight();

    let agents_url = 'https://grinnode.live:8080/agents';
    fetch(agents_url)
        .then(response => response.json())
        .then((result) => {
          this.agents = result;
          this.agents_last_updated = Date.now();
        });


    this.$dao.getGrinHealthScore();
    setTimeout(() => {
      this.$dao.getGrinHealthScore();

    }, 60 * 1000)

  },
  data: function () {
    return {
      tableData: [],
      agents: [],
      agents_last_updated: "",
      headers: [
        {text: "User Agent", value: "user_agent", align: "center"},
        {text: "Seen", value: "seen"},
        {text: "Dominance", value: "dominance"}
      ],


    }
  },
  computed: {
    agents_data: function () {
      let rows = [];
      if (this.agents.result) {
        this.agents.result.forEach((ua, index) => {
          rows.push({
            index,
            user_agent: ua.user_agent,
            seen: ua.seen,
            dominance: Math.round(ua.dominance * 100) + '%'
          });
        });
      }

      return rows
    },
    latestHealthData() {
      // grab the latest datapoint from array
      if (this.$dao.grinHealthScoreData.lastUpdated) {
        let latestHealthData = this.$dao.grinHealthScoreData.result.reduce(function (a, b) {
          return a.check_date_ts_utc >= b.check_date_ts_utc ? a : b
        }, {});
        return latestHealthData;
      }
      return {};
    },
    latestHealthDate() {

      return this.convertTimeStampToDate(this.latestHealthData['check_date_ts_utc']);

    }
  },
  methods: {

    convertTimeStampToDate(timestamp) {
      let utcDate = new Date(timestamp * 1000);
      //let localeDate = new Date(Date.UTC(utcDate.getFullYear(),utcDate.getMonth(),utcDate.getDate(),utcDate.getHours(),utcDate.getMinutes()));
      return utcDate;
    },


  },
  filters: {
    dateFilter: function (dateValue) {
      return dateValue.toLocaleString('en-us', {
        year: 'numeric',
        month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit'
      });
    }
  }
}
</script>

<style scoped>


</style>
