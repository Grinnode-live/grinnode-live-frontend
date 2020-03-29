<template>
    <div class="body_wrapper">
        <main class="content">
            <section class="home">
                <div class="container home_container">
                    <h2 class="container_header">Global Health Check</h2>
                    <p>Grinnode.live WEB API: <span class="status" :style="grinWebApiStyle()">{{ this.grinWebApi }}</span></p>
                    <p>Grinnode.live WEB SITE: <span class="status" :style="grinWebSiteStyle()">{{ this.grinWebSite }}</span></p>
                    <p>Grinnode.live WALLET API: <span class="status" :style="grinWalletApiStyle()">{{ this.grinWalletApi }}</span></p>
                    <p>213.239.215.236:3414 NODE SYNC: <span class="status" :style="grinNodeSync1Style()">{{ this.grinNodeSync1 }}</span></p>
                    <p>http://grinnode.live:3414 NODE SYNC: <span class="status" :style="grinNodeSync2Style()">{{ this.grinNodeSync2 }}</span></p>
                    <p>Grinnode.live DONATION WALLET: <span class="status" :style="grinDonationWalletStyle()">{{ this.grinDonationWallet }}</span></p>

                    <h2 class="container_header">Scheduled Downtimes</h2>
                    <table id="downtimeTable" border="0">
                        <thead>
                        <tr>
                            <th>Description</th>
                            <th>Start Time</th>
                            <th>End Time</th>
                        </tr>
                        </thead>

                        <tbody>
                        <tr v-for="(dt, index) in this.downtimes" :key="index">
                            <td>{{ dt.reason }}</td>
                            <td>{{ new Date(+dt.start_datetime) }}</td>
                            <td>{{ new Date(+dt.end_datetime) }}</td>
                        </tr>
                        </tbody>

                        <tfoot>
                        <tr>
                            <td colspan="2">
                                <span style="text-align: left">Last updated: {{ new Date(+this.$dao.globalHealthCheck.downtimes.lastUpdated) }}</span>
                            </td>
                            <td>
                                Source: <a href="https://grinnode.live:8080/GlobalHealthCheck">Grinnode.live</a>
                            </td>
                        </tr>
                        </tfoot>
                    </table>
                </div>
            </section>
        </main>
    </div>
</template>

<script>
  export default {
    name: "GlobalHealthCheck",
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

    table {
        max-width: 600px;
    }
</style>
