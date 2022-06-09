<template>
  <div style="width:100%">
    <p>
      Assumed Grin price is calculated by answering the question what if the market cap of grin is equalivalent to
      market cap of another crypto
      (such as Bitcoin and Monero) considering the amount of emission.
    </p>
    <v-layout justify-center>
      <v-radio-group row v-model="vs_currency" @change="updateChart">
        <v-radio label="Bitcoin" value="btc"></v-radio>
        <v-radio label="Monero" value="monero"></v-radio>
      </v-radio-group>
    </v-layout>
    <canvas id="marketcapChart" height="200"></canvas>
  </div>

</template>

<script>

import 'chartjs-adapter-date-fns';
import {
  ArcElement,
  BarController,
  BarElement,
  Chart,
  Decimation,
  Filler,
  Legend,
  LinearScale,
  LineController,
  LineElement,
  PointElement,
  ScatterController,
  SubTitle,
  TimeScale,
  Title,
  Tooltip
} from "chart.js";


Chart.register(ArcElement, LineElement,
    BarElement, PointElement, BarController,
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
  data: function () {
    return {
      grin_usd: 0.114,
      grin_cap: [],
      btc_cap: [],
      monero_cap: [],
      vs_currency: 'btc',
      grinGenesisDate: new Date(2019, 0, 15),
      chart: '',

    }
  },
  methods: {
    calculate_chart_data: function (grin_cap_series, vscap, grin_usd_price) {
      let chartData = []
      for (let i = 0; i < grin_cap_series.length; i++) {
        const date_long = grin_cap_series[i][0];
        // find correspending vs_currency cap
        let correspending_cap = vscap.filter(c => c[0] === date_long);

        if (correspending_cap.length > 0) {
          let t = new Date(date_long);
          t = new Date(t.getTime() + t.getTimezoneOffset() * 60 * 1000);
          let ratio = correspending_cap[0][1] / grin_cap_series[i][1]
          chartData.push({
            date: t,
            grin_cap_price: ratio * grin_usd_price
          })
        }
      }
      console.log("chartData: ", chartData);
      return chartData;
    },
    updateChart: function () {
      console.log('updating chart...');
      this.chart.data = {
        datasets: [{
          label: "Grin Assumed Price ($)",
          type: 'line',
          data: this.chartData,
          parsing: {
            xAxisKey: 'date',
            yAxisKey: 'grin_cap_price'
          },
          borderColor: 'green',
          backgroundColor: 'green',
          pointRadius: 0,
          borderWidth: 2

        },
          {
            label: "emission",
            type: 'line',
            data: this.grinEmissionData,
            parsing: {
              xAxisKey: 'date',
              yAxisKey: 'emission'
            },
            yAxisID: 'y1',
            borderColor: '#fef102',
            backgroundColor: '#fef102',
            borderWidth: 2,
            pointStyle: 'circle',
            pointRadius: 0,
            tooltip: {
              enabled: false
            }
          }
        ]
      };

      this.chart.update();
    }
  },
  computed: {
    chartData: function () {
      let vs_cap = []
      if (this.vs_currency === 'btc') {
        vs_cap = this.btc_cap;
      } else if (this.vs_currency === 'monero') {
        vs_cap = this.monero_cap;
      }
      return this.calculate_chart_data(this.grin_cap, vs_cap, this.grin_usd);
    },
    daysSinceGrinGenesis: function () {
      const now = new Date();
      return Math.floor((now.getTime() - this.grinGenesisDate.getTime()) / 1000 / 3600 / 24);
    },
    grinEmissionData: function () {
      const now = new Date();
      const currentEmission = Math.round((now.getTime() - this.grinGenesisDate.getTime()) / 1000);
      console.log('grinEmissionData:', [
        {date: this.grinGenesisDate, emission: 0},
        {date: now, emission: currentEmission}
      ]);
      return [
        {date: this.grinGenesisDate, emission: 0},
        {date: now, emission: currentEmission}
      ];
    }
  },
  mounted() {

    const monero_cap_profile_url = `https://api.coingecko.com/api/v3/coins/monero/market_chart?vs_currency=usd&days=${this.daysSinceGrinGenesis}&interval=daily`;
    const bitcoin_cap_profile_url = `https://api.coingecko.com/api/v3/coins/bitcoin/market_chart?vs_currency=usd&days=${this.daysSinceGrinGenesis}&interval=daily`;
    const grin_cap_profile_url = `https://api.coingecko.com/api/v3/coins/grin/market_chart?vs_currency=usd&days=${this.daysSinceGrinGenesis}&interval=daily`;

    fetch(monero_cap_profile_url)
        .then(resp => resp.json())
        .then(data => {
          this.monero_cap = data['market_caps'];

          fetch(grin_cap_profile_url)
              .then(resp => resp.json())
              .then(data => {
                this.grin_cap = data['market_caps'];
                let lastPriceIndex = data['prices'].length - 1;
                this.grin_usd = data['prices'][lastPriceIndex][1];

                fetch(bitcoin_cap_profile_url)
                    .then(resp => resp.json())
                    .then(data => {
                      this.btc_cap = data['market_caps'];
                      this.updateChart();
                    })
              })
        })
    let chartCtx = document.getElementById('marketcapChart');
    let time_unit = 'year';
    let chartInput = {
      type: 'line',
      data: {
        datasets: []
      },
      options: {
        plugins: {
          title: {display: false, text: "custom"},
          subtitle: {display: false},
          legend: {
            display: true,
            position: 'bottom',
          }
        },
        scales: {
          x: {
            type: 'time',
            title: {
              color: 'gray',
              display: true,
              text: ''
            },
            grid: {
              tickColor: 'gray',
              borderColor: 'gray'
            },
            time: {unit: time_unit},

          },
          y: {
            title: {
              color: 'hsl(57,99.2%,10.2%)',
              display: true,
              text: 'Grin Assumed Price ($)'
            },
            grid: {
              borderColor: 'gray'
            }
          },
          y1: {
            type: 'linear',
            title: {
              display: true,
              text: 'Grin emission',
            },
            position: 'right',
            grid: {
              drawOnChartArea: false,
            }
          }
        },
        spanGaps: false,
        layout: {
          padding: 20
        }
      }
    }

    this.chart = new Chart(chartCtx, chartInput)
    this.updateChart();
  }


}
</script>

<style scoped>

</style>