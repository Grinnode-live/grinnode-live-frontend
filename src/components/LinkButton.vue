<template>
  <div class="d-inline">

    <v-icon right @click="click" >{{svgPath}}</v-icon>
    <v-snackbar  top dark  text  timeout="1500"  width="auto" tag="span" color="#dddddd" v-model="snackbar"> <span  > Link copied! </span> </v-snackbar>
  </div>
</template>

<script>
export default {
  name: "LinkButton",
  data:()=>({
    snackbar:false,
    svgPath: "M3.9,12C3.9,10.29 5.29,8.9 7,8.9H11V7H7C4.24,7 2,9.24 2,12C2,14.76 4.24,17 7,17H11V15.1H7C5.29,15.1 3.9,13.71 3.9,12M8,13H16V11H8V13M17,7H13V8.9H17C18.71,8.9 20.1,10.29 20.1,12C20.1,13.71 18.71,15.1 17,15.1H13V17H17C19.76,17 22,14.76 22,12C22,9.24 19.76,7 17,7Z"
  }),
  props:['copyLink'],
  methods: {
    click:function(){
      //console.log( this.copyLink +  " clicked");
      // In order to work without https://
      // https://stackoverflow.com/questions/51805395/navigator-clipboard-is-undefined
      //
      if (navigator.clipboard && window.isSecureContext){
        navigator.clipboard.writeText(this.copyLink);
        this.snackbar =true;
      }else{
        let textArea = document.createElement("textarea");
        textArea.value = this.copyLink;
        // make the textarea out of viewport
        textArea.style.position = "fixed";
        textArea.style.left = "-999999px";
        textArea.style.top = "-999999px";
        document.body.appendChild(textArea);
        textArea.focus();
        textArea.select();
        this.snackbar = true;
        return new Promise((res, rej) => {
          // here the magic happens
          document.execCommand('copy') ? res() : rej();
          textArea.remove();

        });
      }
 
    }
  }
}
</script>

<style scoped>
.v-snack__wrapper {
  max-width: none;
}
</style>