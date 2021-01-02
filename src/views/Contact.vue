<template>

  <v-row>
    <v-col cols="10" offset="1" align="center">
      <h1 class="text-h4 mb-6 "  >Contact</h1>
      <p class="text-justify"> You can reach us on our <a href="https://github.com/MCM-Mike/grinnode.live/blob/master/contact.md">github page</a>. You can also find us on <a href="https://keybase.io/team/grincoin">Grincoin team on keybase</a>. More instructions how to join on official <a href="https://grin.mw/community">community page</a>.
        This page also lists alternative communication channels such as forum, mailing list etc.</p>

       <v-img contain height="500" :src="imageSrc">

       </v-img>
      <v-caption>Lovely art by <a href="https://github.com/lovelygrin">lovelygrin</a></v-caption>
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

      let index = Math.round(Math.random()*imageLinks.length);
      this.imageSrc = imageLinks[index];
    },
    data : function(){
      return {
        imageSrc:""
      };
    }
  }
</script>

<style scoped>

</style>
