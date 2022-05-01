<template>
  <v-row justify="center">

    <v-col cols="12" align="center" >
      <h1 class="text-h4 text-center mb-6">Crypto SMA Calculator</h1>

    </v-col>


    <v-col cols="12" sm="6" >
      <v-date-picker
        full-width
        v-model="selectedDate"
        show-adjacent-months
        :max="now"
        v-on:change="onCalculateClick"
        reactive
      />
    </v-col>

    <v-col cols="12" sm="6" >
       <v-container >
         <v-row>
         <v-col cols="6">
           <v-select
               :items="cryptos"
               v-model="crypto"
               v-on:change="onCalculateClick"
               label="Choose crypto">
           </v-select>
         </v-col>
         <v-col cols="6">
           <v-select
               :items="monthPeriods"
               v-model="monthPeriod"
               v-on:change="onCalculateClick"
               label="Choose period (months)">
           </v-select>
         </v-col>
         </v-row>

         <v-row>
         <v-col cols="6">
           <v-text-field label="Amount"
                         type="number"
                         min="0"
                         v-model="amount"
           />
         </v-col>
         <v-col cols="6">
           <v-select
               :items="currencies"
               v-model="currency"
               v-on:change="onCalculateClick"
               label="Choose currency">
           </v-select>
         </v-col>
         </v-row>

         <v-row>
           <v-col cols="6">
             <v-text-field label="Grin %"
                           type="number"
                           min="0"

                           v-model="grin_percentage"
             />
           </v-col>
         </v-row>

         <v-row>
           <v-col cols="6">
             <v-btn elevation="0" color="primary" outlined
                 @click="onCalculateClick" > Calculate</v-btn>
           </v-col>
         </v-row>
       </v-container>
    </v-col>




    <v-col cols="12" md="6" v-if="!error" align="center" >

      <div class="flex  headline pt-2">
          <span class="flex-grow-1   "> {{dividedCurrencyAmount|amount_filter}}  {{currency| currency_filter }}  </span>
          <span class="flex-grow-0" > = </span>
          <span class="flex-grow-1"> <span class="display-1 blue--text">{{dividedCryptoAmount | amount_filter}}</span> {{crypto | crypto_filter}}</span>
      </div>

      <div class="flex headline" v-if="dividedGrinCurrenyAmount>0">
        <span class="flex-grow-1 flex- "> {{dividedGrinAmount | amount_filter }}  {{currency| currency_filter }}  </span>
        <span class="flex-grow-0" > = </span>
        <span class="flex-grow-1"> <span class="display-1 blue--text">{{dividedGrinCurrenyAmount | amount_filter }}</span> Grin</span>
      </div>

    </v-col>

    <v-divider vertical class="hidden-sm-and-down" />

    <v-col cols="12" md="6"  align="center" v-if="!error">
      <div class="subtitle-2">
        Average price
      </div>
      <div class="caption py-2 text--lighten-5">
        {{ (new Date(startDateLong)).toDateString() }} - {{ (new Date(endDateLong)).toDateString() }}
      </div>
      <div class="subtitle-1">
        1 {{crypto}} = {{ avgCryptoPrice | amount_filter}} {{currency| currency_filter}}
      </div>
      <div v-if="crypto!=='Grin'" class="subtitle-1" >
        1 Grin  = {{avgGrinPrice |amount_filter}} {{ currency| currency_filter}}
      </div>

    </v-col>

    <v-col cols="12" sm="12" align="center">
      <div v-if="error" >
        <div>Something is wrong! </div>
        {{error}}
      </div>
    </v-col>

 </v-row>
</template>

<script>
export default {
  name: "SMACalculator",
  data: function () {
    return {
      currencies: ["USD", "EUR"],
      currency: "USD",
      cryptos: ["Bitcoin", "Grin", "Ethereum"],
      crypto: "Bitcoin",
      monthPeriods: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
      monthPeriod: 3,
      now: new Date((new Date()).getTime() + 24 * 60 * 60 * 1000).toISOString(),
      grin_percentage: 10,
      amount: 100,
      selectedDate: (new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10),
      avgCryptoPrice : 0,
      avgGrinPrice : 0,
      error : "",
      cachedData: {}
    }
  },
  computed :{
    endDateLong : function() { return  (new Date(this.selectedDate)).getTime()},
    startDateLong : function() { return  (new Date(this.selectedDate)).getTime() - this.monthPeriod * 30 *24 *60*60*1000},
    dividedCurrencyAmount: function() {
      // If selected crypto is Grin, no need to divide
       if (this.crypto==="Grin") {
         console.log("dividedCurrencyAmount : ", this.amount, ", ", typeof(this.amount))
         return this.amount;
       }
       // else calculate percentage
       return this.amount * (1-this.grin_percentage/100)
    },
    dividedCryptoAmount : function() { return  this.dividedCurrencyAmount/ this.avgCryptoPrice},
    dividedGrinAmount : function() {
      // If selected crypto is Grin, no need to divide
      if (this.crypto==="Grin") return 0;
      // else calculate percentage
      return this.amount * this.grin_percentage/100;
    },
    dividedGrinCurrenyAmount: function() { return  this.dividedGrinAmount/this.avgGrinPrice},
  },
  mounted:function(){
    // set default selected day as today
    let now = new Date();
    this.selectedDate = `${now.getFullYear()}-${now.getMonth()+1}-${now.getDate()}`
    this.onCalculateClick();
  },
  filters:{
    currency_filter : function (value){
      if (value === 'USD') return "$";
      if (value === 'EUR') return "€";
    },
    crypto_filter : function(value){
      if (value ==='Bitcoin') return "BTC";
      if (value ==='Ethereum') return "ETH";
      return value;
    },
    amount_filter : function(value){
      if (Number.isNaN(value)) return "-";
      if (!Number.isFinite(value)) return "-";
      if (value >100) return value.toFixed(0);
      if (value >10 ) return value.toFixed(1);
      if (value >1 ) return value.toFixed(2);
      if (value >0.1 ) return value.toFixed(3);
      if (value >0.01 ) return value.toFixed(4);
      if (value >0.001 ) return value.toFixed(5);
      return value

    }
  },
  methods:{
    findDateInProfileWithTolerance : function(profile,dateLong,toleranceSeconds){
       let found = profile.filter(p => Math.abs((p[0]-dateLong)/1000 < toleranceSeconds));
       return found.length>0;
    },

    checkIfHistoryDataIsCached : function(crypto,currency,startDateLong,endDateLong){
      let isCryptoPresentInCache = Object.keys(this.cachedData).find(e=>e===crypto) !== undefined;
      if (!isCryptoPresentInCache) return false;

      let isCurrencyPresentInCache = Object.keys(this.cachedData[crypto]).find(e=>e===currency) !== undefined;
      if (!isCurrencyPresentInCache) return false;

      let priceProfile = this.cachedData[crypto][currency];

      let toleranceSeconds = 60*60*6; // 6 hours tolerance
      // Check start date is covered
      let isStartDateInProfile = this.findDateInProfileWithTolerance(priceProfile,startDateLong,toleranceSeconds);
      if (!isStartDateInProfile) return false; // start date is not covered

      // Check end date is covered;
      let isEndDateInProfile = this.findDateInProfileWithTolerance(priceProfile,endDateLong,toleranceSeconds);
      if (!isEndDateInProfile) return false; // start date is not covered

      // If all is checked
      return true;
    },

    fetchCryptoProfile:function(crypto,currency,startDateLong,endDateLong,callback){
      this.avgCryptoPrice = 0;
      this.avgGrinPrice = 0;
      this.error="";
      let fromDate = Math.round(startDateLong/1000);
      let toDate = Math.round(endDateLong/1000);
      console.log(`fetching from ${fromDate} to ${toDate}`);
      // If date range is smaller than 90 days, coingecko api returns hourly data so range should be at least 90 days
      // Make it 100 days to be sure
      if ((toDate-fromDate) < 100 * 24 * 60 *60 ){
        fromDate = toDate - 100 * 24 * 60 *60;
      }

      let currencyLower = currency.toLowerCase()
      let cryptoLower = crypto.toLowerCase();
      let url = `https://api.coingecko.com/api/v3/coins/${cryptoLower}/market_chart/range?vs_currency=${currencyLower}&from=${fromDate}&to=${toDate}`
      console.log(`fetching from ${fromDate} to ${toDate}`);
      fetch(url)
          .then(resp=>resp.json())
          .then(data=>{
            // If crypto symbol is not cached, create an empty dict for it.
            if (this.cachedData[crypto]===undefined) this.cachedData[crypto]= {}
            this.cachedData[crypto][currency] = data["prices"];
            console.log(this.cachedData);
            callback();

          }).catch(err=>{
            this.error = `Error fetching data for ${crypto}`;
            console.log(err);
      })

    },

    calculateAveragePrice : function(profile,startDateLong,endDateLong){
      // We assume that profile covers the range
      let rangedProfile =  profile.filter(p=>  (p[0] > startDateLong) && (p[0] <  endDateLong) );

      let filteredPrices = [];
      for (let i = 0; i<rangedProfile.length;i++){
        let price = rangedProfile[i][1];
        // In case coingecko api returns 0 price, we neglect it.
        if (price>0) filteredPrices.push(price);
      }

      let sum  = filteredPrices.reduce((partial,a)=> partial+a,0);
      return sum/filteredPrices.length;

    },

    onCalculateClick : function(){


      let isCryptoDataCached = this.checkIfHistoryDataIsCached(this.crypto,this.currency,this.startDateLong,this.endDateLong)
      let isGrinDataCached = this.checkIfHistoryDataIsCached("Grin",this.currency,this.startDateLong,this.endDateLong)
      // Check if profiles are cached
      if (!isCryptoDataCached){
           this.fetchCryptoProfile(this.crypto,this.currency,this.startDateLong,this.endDateLong,()=>{
             if (!isGrinDataCached ){ // If grin data is required
                 this.fetchCryptoProfile("Grin",this.currency,this.startDateLong,this.endDateLong,()=>{
                   this.calculateResult();
                 })
              }else{
                  // All data is available
                  this.calculateResult();
              }
           })
      }else{
        if (!isGrinDataCached ){ // If grin data is required
          this.fetchCryptoProfile("Grin",this.currency,this.startDateLong,this.endDateLong,()=>{
            this.calculateResult();
          })
        }else{
          // All data is available
          this.calculateResult();
        }
      }
    },
    // This should be called after all data is available
    calculateResult : function(){
        let currencyProfile = this.cachedData[this.crypto][this.currency];
        let grinProfile = this.cachedData["Grin"][this.currency];
        this.avgCryptoPrice = this.calculateAveragePrice(currencyProfile,this.startDateLong,this.endDateLong);
        this.avgGrinPrice = this.calculateAveragePrice(grinProfile,this.startDateLong,this.endDateLong);
    }
  }

}
</script>

<style scoped>

</style>