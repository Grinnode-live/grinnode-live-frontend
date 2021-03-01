<template>
  <v-row>
    <v-col cols="12"  align="center">

      <h1 class="text-h4 mb-6 ">Statistics</h1>
      <span>Public information of the Grinnode.live API.</span>

      <h4 class="text-h5 mt-4 grey--text text--darken-2">
        Total inbound and outbound Grin-Nodes connections
      </h4>
      <h4 class="text-h6 mt-2 mb-4 grey--text text--darken-1 "> (last 30min)</h4>


      <v-row>
        <v-col cols="4"  offset="1" class="pb-2" style="border-bottom-color: darkgrey;border-bottom-style: solid;border-width: thin">inbound</v-col>
        <v-col cols="4" offset="1" class="pb-2" style="border-bottom-color: darkgrey;border-bottom-style: solid;border-width: thin">outbound</v-col>

      </v-row>
      <v-row class="mb-2">
        <v-col cols="4" offset="1">
          <span class="text-h4">{{ this.$dao.io.result.inbound }}</span>
        </v-col>
        <v-col cols="4" offset="1">
          <span class="text-h4" >{{ this.$dao.io.result.outbound }}</span>
        </v-col>
      </v-row>

        <span class="pt-4 text-caption grey--text text--darken-2 text-left">
            Last updated: {{ new Date(+this.$dao.io.lastUpdated) }}
          </span ><br/>
      <span class="text-caption grey--text text--darken-2"  > Response time: {{ this.$dao.ioTime }}</span>

     <v-divider class="my-12"/>
      <v-row class="mb-2 ">
        <v-col cols="4" offset="4">
          <p class="pb-2" style="border-bottom-color: darkgrey;border-bottom-style: solid;border-width: thin">Block Height</p>
          <!--            <h4 class="text-h5 my-4 grey&#45;&#45;text text&#45;&#45;darken-2 pb-2" style="border-bottom-color: darkgrey;border-bottom-style: solid;border-width: thin">Block Height</h4>-->
          <span class="text-h4" > {{this.$dao.currentBlockHeight}}</span>
        </v-col>
      </v-row>


      <v-divider class="my-12" ></v-divider>

      <v-row justify="center">
      <v-col cols="12">
        <h4 class="text-h5 mt-4  grey--text text--darken-2">
        Grin Network Health
      </h4>
      </v-col>
        <v-col cols="12" >
          <p class="text-caption mb-8"> Last updated at {{ latestHealthDate | dateFilter }} </p>
        </v-col>



      </v-row>

      <v-row>
        <v-col cols="4"  offset="1" class="pb-2" style="border-bottom-color: darkgrey;border-bottom-style: solid;border-width: thin">Nicehash Score</v-col>
        <v-col cols="4" offset="1" class="pb-2" style="border-bottom-color: darkgrey;border-bottom-style: solid;border-width: thin">Reorg Score</v-col>
      </v-row>

      <v-row class="mb-2">
        <v-col cols="4" offset="1">
          <span class="text-h4">{{ latestHealthData.nicehash_score }}</span>
        </v-col>
        <v-col cols="4" offset="1">
          <span class="text-h4" >{{ latestHealthData.reorg_score }}</span>
        </v-col>
      </v-row>



      <v-row class="mb-2 ">
        <v-col cols="4" offset="4">
          <p class="pb-2" style="border-bottom-color: darkgrey;border-bottom-style: solid;border-width: thin">Overall Health Score</p>
          <!--            <h4 class="text-h5 my-4 grey&#45;&#45;text text&#45;&#45;darken-2 pb-2" style="border-bottom-color: darkgrey;border-bottom-style: solid;border-width: thin">Block Height</h4>-->
          <p class="text-h4" > {{latestHealthData.health_score/2 }}</p>
        </v-col>
      </v-row>
<!--      Chart Row  -->
      <v-row class="mb-4"  >
        <v-col cols="12"   class="mb-0 pb-0">

          <div id="healthChartDiv" ></div>

        </v-col>
        <v-col  cols="2" class="mx-auto"  >
              <v-checkbox  class="mx-auto" v-model="shouldPlotHealth" dense  v-on:change="update_chart"  label="Health Score" color="#f4c63d"   hide-details> </v-checkbox>
        </v-col>
        <v-col cols="2" class="mx-auto" >
          <v-checkbox  v-model="shouldPlotReorg" dense v-on:change="update_chart"  label="Reorg Score" color="#f05b4f" hide-details> </v-checkbox>
        </v-col>
        <v-col cols="2" class="mx-auto" >
          <v-checkbox v-model="shouldPlotNicehash" dense v-on:change="update_chart"  label="Nicehash Score" color="#d70206" hide-details> </v-checkbox>

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
          </p >
      <span class="text-caption grey--text text--darken-2"  > Response time: {{ this.$dao.agentsTime }}</span>
    </v-col>

  </v-row>
</template>

<script>
  import Chartist from 'chartist'
  import "chartist/dist/chartist.css"
  export default {
    name: "Stats",

    mounted() {

      this.$dao.ioCheck();
      this.$dao.getAgents();
      this.$dao.getBlockHeight();

      let agents_url = 'https://grinnode.live:8080/agents';
      fetch(agents_url)
      .then(response=> response.json())
      .then((result)=>{
        this.agents = result;
        this.agents_last_updated = Date.now();
      });

      this.update_chart();
      this.$dao.getGrinHealthScore();
      setTimeout(()=>{
        this.$dao.getGrinHealthScore();
        this.update_chart();
      },60*1000)

    },
    data:function(){
      return {
        tableData:[],
        agents:[],
        agents_last_updated:"",
        headers:[
          {text:"User Agent",value:"user_agent",align:"center"},
          {text:"Seen",value:"seen"},
          {text:"Dominance",value:"dominance"}
        ],
        shouldPlotHealth:true,
        shouldPlotNicehash:false,
        shouldPlotReorg:false,
        // healthScoreData:{"lastUpdated":1614589200131,
        //   "result":[
        //      {"check_date_ts_utc":1614589015,"reorg_score":5,"nicehash_score":5,"health_score":10},
        //     {"check_date_ts_utc":1614588715,"reorg_score":5,"nicehash_score":5,"health_score":10},
        //     {"check_date_ts_utc":1614588414,"reorg_score":5,"nicehash_score":5,"health_score":10},
        //     {"check_date_ts_utc":1614588114,"reorg_score":5,"nicehash_score":3,"health_score":8},
        //     {"check_date_ts_utc":1614587813,"reorg_score":5,"nicehash_score":1,"health_score":6},
        //     {"check_date_ts_utc":1614587513,"reorg_score":5,"nicehash_score":3,"health_score":8},
        //     {"check_date_ts_utc":1614587212,"reorg_score":5,"nicehash_score":2,"health_score":7},
        //     {"check_date_ts_utc":1614586911,"reorg_score":5,"nicehash_score":3,"health_score":8},
        //     {"check_date_ts_utc":1614586611,"reorg_score":5,"nicehash_score":2,"health_score":7},
        //     {"check_date_ts_utc":1614586310,"reorg_score":5,"nicehash_score":3,"health_score":8}]},
      }
    },
    computed:{
      agents_data: function(){
        let rows = [];
        if (this.agents.result){
          this.agents.result.forEach((ua,index)=>{
            rows.push({
              index,
              user_agent:ua.user_agent,
              seen: ua.seen,
              dominance: Math.round(ua.dominance * 100) + '%'
            });
          });
        }

        return rows
      },
      latestHealthData(){
        // grab the latest datapoint from array
        if(this.$dao.grinHealthScoreData.lastUpdated) {
          let latestHealthData = this.$dao.grinHealthScoreData.result.reduce(function (a, b) {
            return a.check_date_ts_utc >= b.check_date_ts_utc ? a : b
          }, {});
          this.update_chart();
          return latestHealthData;
        }
        return {};
      },
      latestHealthDate(){

        return this.convertTimeStampToDate(this.latestHealthData['check_date_ts_utc']);

      }
    },
    methods:{

      convertTimeStampToDate(timestamp){
        let utcDate =  new Date(timestamp*1000);
        //let localeDate = new Date(Date.UTC(utcDate.getFullYear(),utcDate.getMonth(),utcDate.getDate(),utcDate.getHours(),utcDate.getMinutes()));
        return utcDate;
      },
      update_chart(){
          console.log("update_chart()");
          let labels = [];
          let reorg_series = [];
          let health_series = [];
          let nicehash_series = [];

        if(this.$dao.grinHealthScoreData.lastUpdated) {
          console.log(this.$dao.grinHealthScoreData.result );

          let healthDataArray = this.$dao.grinHealthScoreData.result;
          const sortBy = (key) => {
            return (a, b) => (a[key] > b[key]) ? 1 : ((b[key] > a[key]) ? -1 : 0);
          }
          healthDataArray.sort(sortBy("check_date_ts_utc"));

          let n = healthDataArray.length;
          for (let i = 0; i < n; i++) {
            let date = this.convertTimeStampToDate(healthDataArray[i]['check_date_ts_utc']);
            labels.push(`${date.getHours()}:${date.getMinutes()}`);
            if (this.shouldPlotReorg) {
              reorg_series.push(healthDataArray[i]['reorg_score']);
            }
            if (this.shouldPlotHealth) {
              health_series.push(healthDataArray[i]['health_score'] / 2);
            }
            if (this.shouldPlotNicehash) {
              nicehash_series.push(healthDataArray[i]['nicehash_score']);
            }
          }

        }
          var chartData = {
            labels: labels,
            series: [nicehash_series, reorg_series,health_series,]
          };

          new Chartist.Line('#healthChartDiv',chartData, {
            showArea:false,
            lineSmooth:false,
            axisX:{
              showGrid:true,

            },
            axisY:{
              showGrid:true,
              type:Chartist.FixedScaleAxis,
              low:0,
              high:5,
              ticks:[0,1,2,3,4,5]
            }
          });
        }

      },
    filters:{
      dateFilter: function(dateValue){
        return dateValue.toLocaleString('en-us',{year:'numeric',
                                        month:'short',day:'numeric',hour:'2-digit',minute:'2-digit'
        });
      }
    }
  }
</script>

<style scoped>




</style>
