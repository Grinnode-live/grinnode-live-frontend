<template>
  <v-row>
    <v-col cols="10" offset="1" align="center">

      <h1 class="text-h4 mb-6 ">Statistics</h1>
      <span>Public information of the Grinnode.live API.</span>

      <h4 class="text-h5 my-8 grey--text text--darken-2">
        Total inbound and outbound Grin-Nodes connections (last 30min)
      </h4>


      <v-row>
        <v-col cols="4"  offset="1" class="pb-2" style="border-bottom-color: darkgrey;border-bottom-style: solid;border-width: thin">inbound</v-col>
        <v-col cols="4" offset="1" class="pb-2" style="border-bottom-color: darkgrey;border-bottom-style: solid;border-width: thin">outbound</v-col>

      </v-row>
      <v-row class="mb-2">
        <v-col cols="4" offset="1">
          <span class="text-h4">{{ this.$dao.io.result.inbound }}</span>
        </v-col>
        <v-col cols="4" offset="1">
          <span class="text-h4" >{{ this.$dao.io.result.outbound }}</span>
        </v-col>
      </v-row>



        <span class="pt-4 text-caption grey--text text--darken-2 text-left">
            Last updated: {{ new Date(+this.$dao.io.lastUpdated) }}
          </span ><br/>
      <span class="text-caption grey--text text--darken-2"  > Response time: {{ this.$dao.ioTime }}</span>

      <v-divider class="my-12" ></v-divider>

      <h4 class="text-h5 my-8 grey--text text--darken-2">
        User Agents over the last 30 days
      </h4>

      <v-data-table
        :headers="headers"
        :items="agents_data"
        :items-per-page="10"
      >

      </v-data-table>

      <p class="mt-8  text-caption grey--text text--darken-2 text-center">
            Last updated: {{ new Date(+this.$dao.agents.lastUpdated) }}
          </p >
      <span class="text-caption grey--text text--darken-2"  > Response time: {{ this.$dao.agentsTime }}</span>
    </v-col>




  </v-row>
</template>

<script>
  export default {
    name: "Stats",

    mounted() {

      this.$dao.ioCheck();
      this.$dao.getAgents();
      let agents_url = 'https://grinnode.live:8080/agents';
      fetch(agents_url)
      .then(response=> response.json())
      .then((result)=>{
        this.agents = result;
        this.agents_last_updated = Date.now();
      });


    },
    data:function(){
      return {
        tableData:[],
        agents:[],
        agents_last_updated:"",
        headers:[
          {text:"User Agent",value:"user_agent",align:"center"},
          {text:"Seen",value:"seen"},
          {text:"Dominance",value:"dominance"}
        ]
      }
    },
    computed:{
      agents_data: function(){
        let rows = [];
        if (this.agents.result){
          this.agents.result.forEach((ua,index)=>{
            rows.push({
              index,
              user_agent:ua.user_agent,
              seen: ua.seen,
              dominance: Math.round(ua.dominance * 100) + '%'
            });
          });
        }

        return rows
      }
    }

  }
</script>

<style scoped>




</style>
