<template>
    <div style="width:100%">


    <v-layout  justify-center >
      <v-radio-group row v-model="txCountChartType" @change="updateChart" class="align-content-center px-4" >
        <v-radio label="All time" value="All time"></v-radio>
        <v-radio label="Last year" value="Last year"></v-radio>
        <v-radio label="Last 6 months" value="Last 6 months"></v-radio>
        <v-radio label="Last 3 months" value="Last 3 months"></v-radio>
        <v-radio label="Last month" value="Last month"></v-radio>
        <v-radio label="Last 3 days" value="Last 3 days"></v-radio>
      </v-radio-group>
    </v-layout>

    <canvas id="dailyChart" height="200"  ></canvas>
      <v-layout justify-center >
        <v-radio-group row v-model="txCountChartLineType" @change="updateChart"   >
          <v-radio label="Bar" value="bar"></v-radio>
          <v-radio label="Line" value="line"><ContactIcon/> </v-radio>
        </v-radio-group>
      </v-layout>
      <p class="mt-8  text-caption grey--text text--darken-2 text-center">
      Last updated: {{ txCountsLastUpdated }}
    </p>



    </div>

</template>

<script>
import 'chartjs-adapter-date-fns';
import {
  ArcElement,
  BarController,
  BarElement,
  //BubbleController,
  //CategoryScale,
  Chart,
  Decimation,
  //DoughnutController,
  Filler,
  Legend,
  LinearScale,
  LineController,
  LineElement,
  // LogarithmicScale,
  // PieController,
  PointElement,
  //PolarAreaController,
  // RadarController,
  //RadialLinearScale,
  ScatterController, SubTitle,
  TimeScale,
  // TimeSeriesScale,
  Title, Tooltip
} from "chart.js";
import {SERVER_NAME} from "../server_name";
import ContactIcon from "./icons/ContactIcon";



Chart.register( ArcElement, LineElement,
    BarElement,    PointElement,    BarController,
    LineController,
    ScatterController,
    LinearScale,
    TimeScale,
    Decimation,
    Filler,
    Legend,
    Title,
    Tooltip,
    SubTitle
);



export default {
  name: "TransactionCountChart",
  components : {ContactIcon},
  data: function(){
    return {
      txCountChartType: "All time",
      chart  : '',
      txCountsLastUpdated : '',
      dailyCountData: [],
      recentCountData: [],
      txCountChartLineType: "bar"

    }
  },
  mounted() {

    let chartCtx =  document.getElementById('dailyChart');
    let chartData = [];
    let time_unit = 'month';
    let chartInput = {
      type:  this.txCountChartLineType,
      data: {
        datasets: [{
          label: " ",
          data: chartData,
          parsing: {
            xAxisKey: 'date',
            yAxisKey: 'count',
          }
          , pointBorderColor: "hsl(57,99.2%,30.2%)"
          , pointBackgroundColor: 'hsl(57,99.2%,50.2%)'
          , backgroundColor: 'hsl(57,99.2%,50.2%)'
        }
        ]
      },
      options: {
        plugins: {
          title: {display: false, text: "custom"},
          subtitle: {display: false},
          legend: {display: false}
        },
        scales: {
          x: {
            type: 'time',
            title: {
              color: 'hsl(57,99.2%,10.2%)',
              display: true,
              text: 'Time (UTC)'
            },
            grid: {
              tickColor: 'hsl(57,99.2%,30.2%)',
              borderColor: 'hsl(57,99.2%,30.2%)'
            },
            time: {unit: time_unit  },

          },
          y: {
            title: {
              color: 'hsl(57,99.2%,10.2%)',
              display: true,
              text: 'Tx count'
            },
            grid: {
              borderColor: 'hsl(57,99.2%,30.2%)'
            }
          }
        },
        spanGaps: false,
        layout: {
          padding: 20
        }
      }
    };

    this.chart = new Chart(chartCtx,chartInput)

    fetch(`${SERVER_NAME}/api/txcounts`)
        .then((res) => res.json())
        .then(d => {
             // console.log("fetch returned")
             this.txCountsLastUpdated = new Date(d.lastUpdated).toUTCString();
             let dailyCountData = d.result.daily;
             let recentCountData = d.result.recent;

             // add timezone offset to display correctly in chart
             for (let i=0;i<dailyCountData.length;i++){
                let t = new Date(dailyCountData[i].date);
                //console.log("t before conversion:",t)
                t = new Date(t.getTime() + t.getTimezoneOffset() * 60*1000);
                //console.log("t after conversion:",t)
                dailyCountData[i].date = t;
             }

             for(let i=0;i<recentCountData.length;i++){
               let t = new Date(recentCountData[i].time);
               t = new Date(t.getTime() + t.getTimezoneOffset() * 60*1000);
               recentCountData[i].time = t;
             }
             // set the data
             this.recentCountData = recentCountData;
             this.dailyCountData = dailyCountData;
             this.updateChart();
            }
        ).catch(err=>console.log(err.message));
    },
  methods: {
    updateChart: function () {

      let chartData = [];
      let time_unit = ""
      let y_name= "";
      let line_show = false;
      if (this.txCountChartType === "All time") {
         y_name= "date";
         chartData = this.dailyCountData;
         line_show = false;
         time_unit = 'month';
         // console.log("all time chart selected");
      } else if (this.txCountChartType === "Last year") {
         chartData =  this.dailyCountData.length>365 ? this.dailyCountData.slice(-365) : this.dailyCountData;
         time_unit = 'month'
         line_show = false;
         y_name= "date";
        // console.log("last year chart selected");
      } else if (this.txCountChartType === "Last 6 months") {
        chartData =  this.dailyCountData.length>180 ? this.dailyCountData.slice(-180) : this.dailyCountData;
        time_unit = 'day';
        y_name= "date";
        line_show = true;
        // console.log("last month chart selected");
      }else if (this.txCountChartType === "Last 3 months") {
        chartData =  this.dailyCountData.length>90 ? this.dailyCountData.slice(-90) : this.dailyCountData;
        time_unit = 'day';
        y_name= "date";
        line_show = true;
        // console.log("last month chart selected");
      } else if (this.txCountChartType === "Last month") {
         chartData =  this.dailyCountData.length>30 ? this.dailyCountData.slice(-30) : this.dailyCountData;
         time_unit = 'day';
         y_name= "date";
         line_show = true;
         // console.log("last month chart selected");
      } else if (this.txCountChartType === "Last 3 days") {
        chartData = this.recentCountData;
        y_name= "time";
        time_unit = 'hour';
        line_show = true;
        // console.log("last 3 days chart selected chart selected");
      }
      let chartInput = {
        type:  this.txCountChartLineType,
        data: {
          datasets: [{
            label: " ",
            data: chartData,
            parsing: {
              xAxisKey: y_name,
              yAxisKey: 'count',
            }
            , pointBorderColor: "hsl(57,99.2%,30.2%)"
            , pointBackgroundColor: 'hsl(57,99.2%,50.2%)'
            , borderColor : 'hsl(57,99.2%,20%,0.3)'
            , backgroundColor : 'hsl(57,99.2%,50.2%)'
          }
          ]
        },
        options: {
          plugins: {
            title: {display: false, text: "custom"},
            subtitle: {display: false},
            legend: {display: false}
          },
          scales: {
            x: {
              type: 'time',
              title: {
                color: 'hsl(57,99.2%,10.2%)',
                display: true,
                text: 'Time (UTC)'
              },
              grid: {
                tickColor: 'hsl(57,99.2%,30.2%)',
                borderColor: 'hsl(57,99.2%,30.2%)'
              },
              time: {unit: time_unit  },

            },
            y: {
              title: {
                color: 'hsl(57,99.2%,10.2%)',
                display: true,
                text: 'Tx count'
              },
              grid: {
                borderColor: 'hsl(57,99.2%,30.2%)'
              }
            }
          },
          spanGaps: false,
           showLine: line_show,
          tension:0.6,
          layout: {
            padding: 20
          }
        }

      };

      // this.chart.options.scales.x.time.unit = time_unit;
      this.chart.options = chartInput.options;
      this.chart.data = chartInput.data;

      this.chart.config.type = chartInput.type;
      this.chart.update();
    }
  }
}
</script>
<style scoped>

</style>
