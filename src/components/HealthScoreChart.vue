<template>
  <div>
    <div>
    <v-layout justify-center >

        <v-radio-group row v-model="scoreType" @change="updateChart" class="align-content-center" >
          <v-radio label="Overall Health Score" value="Overall Health Score"></v-radio>
          <v-radio label="Reorg Score" value="Reorg Score"></v-radio>
          <v-radio label="Nicehash Score" value="Nicehash Score"></v-radio>
        </v-radio-group>
    </v-layout>
    </div>

    <div ref="chartDiv">
      <svg id="healthScoreChart"></svg>
    </div>



  </div>
</template>

<script>


const d3plus = Object.assign({},
    require('d3plus-geomap'),
    require('d3plus-axis'),
    require('d3plus-common'),
    require('d3plus-hierarchy'),
    require('d3plus-legend'),
    require('d3plus-network'),
    require('d3plus-plot'),
    require('d3plus-priestley'),
    require('d3plus-shape'),
    require('d3plus-text'),
    require('d3plus-timeline'),
    require('d3plus-tooltip'),
    require('d3plus-viz'),
);

export default {
  name: "HealthScoreChart",
  data: function () {
    return {
      scoreType: "Overall Health Score",
      scoreName: 'nicehash_score',
      // healthScoreData: {
      //   "lastUpdated": 1614589200131,
      //   "result": [
      //     {"check_date_ts_utc": 1614589015, "reorg_score": 5, "nicehash_score": 5, "health_score": 10},
      //     {"check_date_ts_utc": 1614588715, "reorg_score": 5, "nicehash_score": 5, "health_score": 10},
      //     {"check_date_ts_utc": 1614588414, "reorg_score": 5, "nicehash_score": 5, "health_score": 10},
      //     {"check_date_ts_utc": 1614588114, "reorg_score": 5, "nicehash_score": 3, "health_score": 8},
      //     {"check_date_ts_utc": 1614587813, "reorg_score": 5, "nicehash_score": 1, "health_score": 6},
      //     {"check_date_ts_utc": 1614587513, "reorg_score": 5, "nicehash_score": 3, "health_score": 8},
      //     {"check_date_ts_utc": 1614587212, "reorg_score": 5, "nicehash_score": 2, "health_score": 7},
      //     {"check_date_ts_utc": 1614586911, "reorg_score": 5, "nicehash_score": 3, "health_score": 8},
      //     {"check_date_ts_utc": 1614586611, "reorg_score": 5, "nicehash_score": 2, "health_score": 7},
      //     {"check_date_ts_utc": 1614586310, "reorg_score": 5, "nicehash_score": 3, "health_score": 8}]
      // }

    }

  },
  computed: {

    chartData2() {
      let chartData2 = [];
      if(this.$dao.grinHealthScoreData.lastUpdated){

      let rawData = this.$dao.grinHealthScoreData.result;
      for (let i = 0; i < rawData.length; i++) {
        // chartData2.push({scoreType: 'Reorg Score', timestamp: rawData[i].check_date_ts_utc*1000, score:rawData[i]['reorg_score'] })
        // chartData2.push({scoreType: 'Nicehash Score', timestamp: rawData[i].check_date_ts_utc*1000, score:rawData[i]['nicehash_score'] })
        if (this.scoreType === 'Overall Health Score') {
          let score = ( rawData[i]['health_score'] <0) ?  "" : rawData[i]['health_score'];

          chartData2.push({
            scoreType: 'Overall Health Score',
            timestamp: rawData[i].check_date_ts_utc * 1000,
            score
          })
        } else if (this.scoreType === 'Reorg Score') {
          let score = ( rawData[i]['reorg_score'] <0) ?  "" : rawData[i]['reorg_score'];
          chartData2.push({
            scoreType: 'Reorg Score',
            timestamp: rawData[i].check_date_ts_utc * 1000,
            score
          })
        } else if (this.scoreType === 'Nicehash Score') {
          let score = ( rawData[i]['nicehash_score'] <0) ?  "" : rawData[i]['nicehash_score'];
          chartData2.push({
            scoreType: 'Nicehash Score',
            timestamp: rawData[i].check_date_ts_utc * 1000,
            score
          })
        }
      }
      }
      // Added in order to set Y-range to 5
      chartData2.push({
        scoreType: 'Overall Health Score',
        timestamp: undefined,
        score:5
      })

      return chartData2;
    }

  },
  mounted: function () {
    this.$dao.getGrinHealthScore();

    setTimeout(this.updateChart,500);
    setTimeout(this.updateChart,1500);

  },
  methods:{
    updateChart:function(){
      this.$refs['chartDiv'].innerHTML=" <svg id=\"healthScoreChart\"></svg>";
      let chart = new d3plus.BarChart();
      chart.groupPadding(5);
      chart.label(function (d) {
        if ((d['score'] >= 0) && (d['score'] <= 5)) {
          return ""; // Disable label
        }
        return "";

      });

      chart.config({
        data: this.chartData2,
        legend: false,

        shapeConfig: {
          Bar: {
            fill: function (d) {

              if(d['timestamp']===undefined){
                return "#00000000";
              }

              let h = (d['score'] * 115 / 5 - 15);
              let fillColor = "hsl(" + h + ",70%,60%)";
              return fillColor;
            },
            hoverOpacity: 1
          }
        },
        tooltip: false,
        // tooltipConfig:{
        //   title:function(d){
        //     return d['score'];
        //   }
        // },
        groupBy: "scoreType",
        x: 'timestamp',
        y: 'score',
        xConfig: {
          tickFormat: function (d) {
            let date = new Date(d);
            let hours = date.getHours();
            if (hours < 10) {
              hours = "0" + hours.toString();
            } else {
              hours = hours.toString();
            }
            let minutes = date.getMinutes();
            if (minutes < 10) {
              minutes = "0" + minutes.toString();
            } else {
              minutes = minutes.toString();
            }
            return hours + ":" + minutes;
          },
          tickSize: 0,
          title: this.scoreType,
          titleConfig: {
            fontColor: "darkGrey",
            fontSize: 24,
            textAnchor: "middle"
          }
        },
        yConfig: {
          ticks:[0,1,2,3,4,5,6],
          labels:[0,1,2,3,4,5,6],
          tickFormat: function (d) {
            if (d === 0) {
              return "(Danger) 0"
            }
            if (d === 1) {
              return "(Very High Risk) 1"
            }
            if (d === 2) {
              return "(High Risk) 2"
            }
            if (d === 3) {
              return "(Moderate Risk) 3"
            }
            if (d === 4) {
              return "(Low Risk) 4"
            }
            if (d === 5) {
              return "(Safe) 5"
            }
            return ""
          },
          // barConfig: {"stroke-width": 0},
          gridConfig: {
            "stroke": "#fef102",
            "stroke-width": 1,
            "opacity": 0.5
          },
          // ticks:[1,2,3,4,5],
          tickSize: 0,
          title: "",
          titleConfig: {
            fontColor: "darkred",
            fontSize: 32,
            textAnchor: "middle"
          }
        },
      })
      chart.height(500);
      chart.select("#healthScoreChart").render();
    }
  }
}
</script>

<style scoped>

</style>