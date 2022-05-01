<template>
  <div style="width:100%">
  <v-layout justify-center >
    <v-radio-group row v-model="vs_currency" @change="updateChart"   >
      <v-radio label="Bitcoin" value="btc"></v-radio>
      <v-radio label="Monero" value="monero"></v-radio>
    </v-radio-group>
  </v-layout>

    <canvas id="marketcapChart" height="200" ></canvas>
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
  name: "MarketCapChart",
  data :  function(){
    return {
      grin_usd : 0.114,
      grin_cap : [],
      btc_cap :   [],
      monero_cap : [],
      vs_currency: 'btc',
      chart : '',
    }
  },
  methods:{
    calculate_chart_data: function(grin_cap_series,vscap,grin_usd_price){
      let chartData = []
      for (let i = 0;i<grin_cap_series.length;i++){
        const date_long = grin_cap_series[i][0];
        // find correspending vs_currency cap
        let correspending_cap = vscap.filter(c=>c[0] === date_long);

        if (correspending_cap.length>0){
            let t = new Date(date_long);
            t = new Date(t.getTime() + t.getTimezoneOffset()*60*1000);
            let ratio = correspending_cap[0][1] / grin_cap_series[i][1]
            chartData.push({
              date : t,
              grin_cap_price : ratio * grin_usd_price
            })
        }
      }

      return chartData;
    },
    updateChart : function(){
      this.chart.data = {
        datasets:[{
          label: " ",
          data: this.chartData,
          parsing: {
            xAxisKey: 'date',
            yAxisKey: 'grin_cap_price'
          }
          , pointBorderColor: "hsl(57,99.2%,30.2%)"
          , pointBackgroundColor: 'hsl(57,99.2%,50.2%)'
          , backgroundColor: 'hsl(57,99.2%,50.2%)'
        }]
      };
      console.log(this.chartData);
      this.chart.update();
    }
  },
  computed : {
    chartData : function(){
        let vs_cap = []
        if (this.vs_currency === 'btc'){
          vs_cap = this.btc_cap;
        } else if (this.vs_currency === 'monero'){
          vs_cap = this.monero_cap;
        }
        return this.calculate_chart_data(this.grin_cap, vs_cap,this.grin_usd);
    }
  },
  mounted(){

    const monero_cap_profile_url = "https://api.coingecko.com/api/v3/coins/monero/market_chart?vs_currency=usd&days=30&interval=daily"
    const bitcoin_cap_profile_url = "https://api.coingecko.com/api/v3/coins/bitcoin/market_chart?vs_currency=usd&days=30&interval=daily"
    const grin_cap_profile_url = "https://api.coingecko.com/api/v3/coins/grin/market_chart?vs_currency=usd&days=30&interval=daily"

    fetch(monero_cap_profile_url)
        .then(resp=>resp.json())
        .then(data=>{
          this.monero_cap = data['market_caps'];

          fetch(grin_cap_profile_url)
              .then(resp=>resp.json())
              .then(data=>{
                this.grin_cap = data['market_caps'];
                let lastPriceIndex = data['prices'].length-1;
                this.grin_usd = data['prices'][lastPriceIndex][1];

                fetch(bitcoin_cap_profile_url)
                    .then(resp=>resp.json())
                    .then(data=>{
                      this.btc_cap = data['market_caps'];
                      this.updateChart();
                    })

              })

        })


    let chartCtx = document.getElementById('marketcapChart');



    let time_unit = 'day';
    let chartInput ={
      type : 'bar',
      data : {
        datasets:[{
          label: " ",
          data: this.chartData,
          parsing: {
            xAxisKey: 'date',
            yAxisKey: 'grin_cap'
          }
          , pointBorderColor: "hsl(57,99.2%,30.2%)"
          , pointBackgroundColor: 'hsl(57,99.2%,50.2%)'
          , backgroundColor: 'hsl(57,99.2%,50.2%)'
        }]
      },
      options : {
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
              text: ''
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
              text: 'Grin Hypothetical Price ($)'
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
    }

    this.chart = new Chart(chartCtx,chartInput)
    this.updateChart();
  }


}
</script>

<style scoped>

</style>