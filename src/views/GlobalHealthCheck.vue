<template>

  <v-row>

    <v-col cols="10" offset="1" align="center">
      <h1 class="text-h4 text-center mb-6">Global Health Check</h1>

      <table>
        <tr  >
        <td class="pr-4">Grinnode.live WEB API </td>
        <td><span class="status" :style="grinWebApiStyle()">{{ this.grinWebApi }}</span></td>
        </tr>
        <tr>
          <td class="pr-4">Grinnode.live WEB SITE  </td>
          <td> <span class="status" :style="grinWebSiteStyle()">{{ this.grinWebSite }}</span> </td>
        </tr>

        <tr>
          <td class="pr-4"> Grinnode.live WALLET API </td>
          <td> <span class="status" :style="grinWalletApiStyle()">{{ this.grinWalletApi }}</span> </td>
        </tr>
        <tr>
          <td class="pr-4"> 213.239.215.236:3414 NODE SYNC </td>
          <td><span class="status" :style="grinNodeSync1Style()">{{ this.grinNodeSync1 }}</span> </td>
        </tr>
        <tr>
          <td class="pr-4"> http://grinnode.live:3414 NODE SYNC </td>
          <td>   <span class="status" :style="grinNodeSync2Style()">{{ this.grinNodeSync2 }} </span></td>
        </tr>
        <tr>
          <td class="pr-4"> Grinnode.live DONATION WALLET </td>
          <td> <span class="status" :style="grinDonationWalletStyle()">{{ this.grinDonationWallet }}</span> </td>
        </tr>


      </table>



    </v-col>






    <v-col cols="10" offset="1" >
      <h1 class="text-h4 text-center my-12">Scheduled Downtimes</h1>

      <v-sheet height="50" class="d-flex  justify-space-between">
        <v-btn     @click="$refs.calendar.prev()"      >
          <v-icon color="primary" >west</v-icon>
        </v-btn>

        <span> {{calendar_year}}</span>

        <v-btn     @click="$refs.calendar.next()"      >
          <v-icon color="primary" >east</v-icon>
        </v-btn>

      </v-sheet>

      <v-sheet height="600">
      <v-calendar
          ref ="calendar"
          type="month"
          v-model="calendar_value"
          :events="downtimeEvents"
      >

      </v-calendar>

      </v-sheet>
    </v-col>


  </v-row>


</template>

<script>
  export default {
    name: "GlobalHealthCheck",
    data:function(){
      return{
        calendar_value : Date.now(),
      }
    },
    methods: {
      grinWebApiStyle() {
        return (this.grinWebApi === 'online') ? ({ backgroundColor: 'rgb(5, 205, 30)' }) : ({ backgroundColor: 'rgb(205, 5, 30)' });
      },
      grinWebSiteStyle() {
        return (this.grinWebSite === 'online') ? ({ backgroundColor: 'rgb(5, 205, 30)' }) : ({ backgroundColor: 'rgb(205, 5, 30)' });
      },
      grinWalletApiStyle() {
        return (this.grinWalletApi === 'online') ? ({ backgroundColor: 'rgb(5, 205, 30)' }) : ({ backgroundColor: 'rgb(205, 5, 30)' });
      },
      grinNodeSync1Style() {
        return (this.grinNodeSync1 === 'online') ? ({ backgroundColor: 'rgb(5, 205, 30)' }) : ({ backgroundColor: 'rgb(205, 5, 30)' });
      },
      grinNodeSync2Style() {
        return (this.grinNodeSync2 === 'online') ? ({ backgroundColor: 'rgb(5, 205, 30)' }) : ({ backgroundColor: 'rgb(205, 5, 30)' });
      },
      grinDonationWalletStyle() {
        return (this.grinDonationWallet === 'online') ? ({ backgroundColor: 'rgb(5, 205, 30)' }) : ({ backgroundColor: 'rgb(205, 5, 30)' });
      },
    },
    computed: {
      calendar_year(){

        return new Date(this.calendar_value).getFullYear();
      },
      downtimeEvents(){
        let rows = []
        this.$dao.globalHealthCheck.downtimes.result.forEach((dt)=>{
          rows.push({
            name : dt.reason,
            start: new Date(+dt.start_datetime),
            end: new Date(+dt.end_datetime),
          });
        });
        return rows;
      },
      downtimes() {
        return this.$dao.globalHealthCheck.downtimes.result;
      },
      grinWebApi() {
        return (this.$dao.globalHealthCheck.checks.result.grinnode_live_api) ? 'online' : 'offline';
      },
      grinWebSite() {
        return (this.$dao.globalHealthCheck.checks.result.grinnode_live_site) ? 'online' : 'offline';
      },
      grinWalletApi() {
        return (this.$dao.globalHealthCheck.checks.result.grinnode_wallet_api) ? 'online' : 'offline';
      },
      grinNodeSync1() {
        return (this.$dao.globalHealthCheck.checks.result.grinnode_sync_1) ? 'online' : 'offline';
      },
      grinNodeSync2() {
        return (this.$dao.globalHealthCheck.checks.result.grinnode_sync_2) ? 'online' : 'offline';
      },
      grinDonationWallet() {
        return (this.$dao.globalHealthCheck.checks.result.grinnode_donation_wallet) ? 'online' : 'offline';
      },
    },
    mounted() {
      this.$dao.getGlobalHealthCheck();
      console.log(this.downtimes);
    }
  }
</script>

<style scoped>
    .status {
        color: rgb(255, 255, 255);
        height: 20px;
        line-height: 20px;
        margin: 5px 0;
        border-radius: 2px;
        padding: 0 5px;
        font-weight: bold;
    }

    table tr {
      height:4rem;


    }
    table td:first-child{

    }
</style>
