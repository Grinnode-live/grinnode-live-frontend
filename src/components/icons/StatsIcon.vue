<template>
<!--  Leader board icon from material design icon set-->
   <v-icon right>
    {{svgPath}}
   </v-icon>
</template>

<script>
export default {
  name: "StatsIcon",
  data: ()=>({
    svgPath: "M7.5,21H2V9h5.5V21z M14.75,3h-5.5v18h5.5V3z M22,11h-5.5v10H22V11z"
  })
}
</script>

<style scoped>

</style>