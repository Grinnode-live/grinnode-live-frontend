  <template>
    <v-icon right>
      {{svgPath}}
    </v-icon>

</template>

<script>

import { mdiHome} from '@mdi/js';

export default {
  name: "HomeIcon",
  data: ()=>({
    svgPath: mdiHome
  })
}
</script>

<style scoped>

</style>