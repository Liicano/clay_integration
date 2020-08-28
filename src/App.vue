<template>
  <v-app>
    <v-app-bar app color="#34cc02" dark>
      <v-spacer></v-spacer>

      <v-btn
        href="https://github.com/vuetifyjs/vuetify/releases/latest"
        target="_blank"
        text
      >
        <span class="mr-2">Clay test</span>
        <!-- <v-icon>mdi-person</v-icon> -->
      </v-btn>
    </v-app-bar>

    <v-main>
      <HelloWorld :movements="movements" :movementValues="movementValues" />
    </v-main>
  </v-app>
</template>

<script lang="ts">
import Vue from "vue";
import HelloWorld from "./components/HelloWorld.vue";
import { mapActions } from 'vuex';

export default Vue.extend({
  name: "App",

  components: {
    HelloWorld
  },

  data: () => ({
    movements: null,
    movementValues: null
  }),
   methods:{
     ...mapActions({
      getAccountMovements:'getAccountMovements',
      getAccountValue:'getAccountValue'
    }),
   },
    
    async mounted(){
     this.movements =  await this.getAccountMovements();
     this.movementValues =  await this.getAccountValue();
    }
  
});
</script>
