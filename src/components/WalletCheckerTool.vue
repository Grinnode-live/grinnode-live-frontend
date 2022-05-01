<template>

  <v-row justify="center">

    <v-col cols="12" align="center" >
      <h1 class="text-h4 text-center mb-6">Grin Wallet Checker</h1>
    </v-col>

    <v-col cols="12" align="center">

      <v-form class="pt-4" @submit.prevent="checkWallet" >
        <v-text-field outlined :loading="is_checking"  v-model="wallet_address"   label="Enter grin address such as grin1zxwrf..." />
      </v-form>
      <p class="success-message " v-if="walletCheckSuccess">Wallet is reachable and listening</p>
      <p class="error-message" v-if="walledCheckFail">Wallet address is not valid or not listening</p>
      <v-btn class="mt-2 mb-8"  color="primary" @click.prevent="checkWallet"  >Check</v-btn>

    </v-col>
  </v-row>

</template>

<script>
import {SERVER_NAME} from "../server_name";

export default {
  name: "WalletCheckerTool",
  data: function(){
    return {
      wallet_address:"",
      is_wallet_valid:"",
      is_checking:false
    }
  },
  methods:{
    checkWallet(){

      this.is_wallet_valid="";

      if (this.wallet_address.length>0){
        this.is_checking=true;
        // remove .onion from end of string
        if (this.wallet_address.endsWith(".onion")){
          this.wallet_address = this.wallet_address.replace(".onion","");
        }

        // If user enters an ordinary url, check stucks so it needs to be removed
        this.wallet_address = this.wallet_address.replace("http://","").replace("https://","").replace("/")
        fetch(`${SERVER_NAME}/walletcheck/`+ this.wallet_address).then(response =>{
          return response.json()})
            .then((result) => {
              if(result.isWalletValid){
                this.is_wallet_valid = "success";
              }else{
                this.is_wallet_valid = "fail";
              }
              this.is_checking=false;
            }).catch((err)=>{
          console.error(err);
          this.is_wallet_valid = "error"
          this.is_checking=false;
        });
      }else{
        this.is_wallet_valid = "";
        this.is_checking=false;
      }
    }
  },
  computed:{
    walletCheckSuccess(){
      return this.is_wallet_valid==='success';
    },
    walledCheckFail() {
      return this.is_wallet_valid === 'fail'
    }
  }
}
</script>

<style scoped>

</style>