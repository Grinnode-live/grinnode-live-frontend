<template>
<!--  Watch icon from material icon set-->
  <v-icon right>
    {{svgPath}}
  </v-icon>
</template>

<script>
import {mdiWatch} from "@mdi/js";
export default {
  name: "ChallengesIcon",
  data: ()=>({
    svgPath:mdiWatch
  })
}
</script>

<style scoped>

</style>