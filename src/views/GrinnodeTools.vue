<template>
  <v-row justify="center">
    <v-col cols="12" align="center" >
      <h1 class="text-h4 text-center mb-6">Grinnode.live Tools</h1>
    </v-col>

    <v-col cols="12" >

      <template>
        <v-card
            class="mx-auto"
            max-width="520"
            outlined
        >
          <v-list-item three-line>
            <v-list-item-content>

              <v-list-item-title class="text-h5 mb-1">
                Crypto SMA Calculator
              </v-list-item-title>
              <v-list-item-subtitle>Calculate simple moving average of crypto currencies  for the last n months.</v-list-item-subtitle>
            </v-list-item-content>

            <v-list-item-avatar
                tile
                size="150"
                color="grey"
            >
              <img
                  src="/images/tools/SMA-SS.png"
                  alt="Crypto SMA Calculator"
              >
            </v-list-item-avatar>
          </v-list-item>

          <v-card-actions>
            <v-btn
                outlined
                rounded
                text
                class="primary"
                dark
                router
                link
                to="/tools/sma-calculator"
            >
              Calculate
            </v-btn>
          </v-card-actions>
        </v-card>
      </template>

    </v-col>

    <v-col cols="12" >

      <template>
        <v-card
            class="mx-auto"
            max-width="520"
            outlined
        >

          <v-list-item three-line>
            <v-list-item-content>

              <v-list-item-title class="text-h5 mb-1">
                Grin Wallet Checker
              </v-list-item-title>
              <v-list-item-subtitle>Check if a Grin wallet is online and listening via Grinnode.live API.</v-list-item-subtitle>
            </v-list-item-content>

            <v-list-item-avatar
                tile
                size="100"

            >
              <img
                  src="/images/tools/WalletChecker-SS.png"
                  alt="Simple Moving Average Calculator"
              >
            </v-list-item-avatar>
          </v-list-item>

          <v-card-actions>
            <v-btn
                outlined
                rounded
                text
                class="primary"
                dark
                router
                link
                to="/tools/wallet-checker"
            >
              Check
            </v-btn>
          </v-card-actions>
        </v-card>
      </template>

    </v-col>
  </v-row>
</template>

<script>
export default {
  name: "GrinnodeTools"
}
</script>

<style scoped>

</style>