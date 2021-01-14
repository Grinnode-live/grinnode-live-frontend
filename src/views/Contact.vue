<template>

  <v-row>
    <v-col cols="10" offset="1" align="center">
      <h1 class="text-h4 mb-6 "  >Contact</h1>
      <p class="text-justify"> You can reach us on our <a href="https://github.com/MCM-Mike/grinnode.live/blob/master/contact.md">github page</a>. You can also find us on <a href="https://keybase.io/team/grincoin">Grincoin team on keybase</a>. More instructions how to join on official <a href="https://grin.mw/community">community page</a>.
        This page also lists alternative communication channels such as forum, mailing list etc.</p>

      <v-img contain height="500" :src="imageSrc">

      </v-img>

      <v-caption v-if="!isGrinSun">art by <a href="https://github.com/lovelygrin">lovelygrin</a></v-caption>
      <v-caption v-if="isGrinSun">art by <a href="https://github.com/lovelygrin">grinsun</a></v-caption>
    </v-col>

  </v-row>


</template>

<script>
export default {
  name: "Contact",
  mounted() {
    this.$dao.getAgents();
    this.$dao.ioCheck();

    let imageLinks = [
      '/images/grinart/000_lovegrin_500x.png',
      '/images/grinart/001_redgrinheart_500x.png',
      '/images/grinart/004_stripedgrin_500x.png',
      '/images/grinart/006_monstergrin_500x.png',
      '/images/grinart/007_cutegrin_500x.png',
      '/images/grinart/008_grinfruit_500x.png',
      '/images/grinart/016_grinpancakes_500x.png',
      '/images/grinart/018_radiogrin_500x.png',
      '/images/grinart/020_grinbeard_500x.png',
      '/images/grinart/023_plasmagrin_500x.png',
      '/images/grinart/026_grinjar_500x.png',
      '/images/grinart/028_blackswangrin_500x.png',
      '/images/grinart/032_extragrin_500x.png',
      '/images/grinart/039_messygrin_500x.png',
      '/images/grinart/041_puppygrin_500x.png',
      '/images/grinart/044_minimalgrin_500x.png',
      '/images/grinart/053_grinninggrinera_500x.png',
      '/images/grinart/063_lookinggrin_500x.png',
      '/images/grinart/065_swishinggrin_500x.png',
      '/images/grinart/072_grinslime_500x.png',
      '/images/grinart/073_indaforestgrin_500x.png',
      '/images/grinart/074_cogrin_500x.png',
      '/images/grinart/075_butwhatisagrin_500x.png'
    ];

    let grinsunImageLinks =[
      '/images/grinsun/0d9fb343612d6feb37d73b56a798599638ad7302.png',
      '/images/grinsun/3dfc30823ab07076a0e7a51a9ec35a1c3b62d7eb.png',
      '/images/grinsun/5ba158b37d94e88a62b90ac98e0d20f82c589b87.png',
      '/images/grinsun/8e27feea6ea29290518db2316ce089b7a36feea7.png',
      '/images/grinsun/170d978c6f6c9e67683387874c7e39fb2a113dcf.png',
      '/images/grinsun/88646df7fda0af72ab86e12b1d586e1ea4b5c69f.png',
      '/images/grinsun/123211cdb55904430c8723498e8e2139aeff47d0.png',
      '/images/grinsun/a50b55b4b5e0514f26a19782978885c80936c57a.png',
      '/images/grinsun/cfd0e1c09863781eb878d1dad554757320c03be3.png',
      '/images/grinsun/e70e473f42b6c0272d6764c5962dcc9031b16eed.png',
    ]

    this.isGrinSun = Math.random() > 0.5;

    if(this.isGrinSun){
      let index = Math.round(Math.random()*grinsunImageLinks.length);
      this.imageSrc = grinsunImageLinks[index];

    }else{
      let index = Math.round(Math.random()*imageLinks.length);
      this.imageSrc = imageLinks[index];

    }



  },
  data : function(){
    return {
      imageSrc:"",
      isGrinSun: false
    };
  }
}
</script>

<style scoped>

</style>
