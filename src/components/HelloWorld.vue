<template>
 <div v-if="movements && movementValues">
   <v-subheader>Saldo bancario</v-subheader>
   <v-divider inset></v-divider>
   <v-row>
     <v-col class="px-4">
      <center>
       <v-list-item three-line>
      <v-list-item-content>
        <v-list-item-title>{{movementValues.data.data.items[0].saldo_disponible}}</v-list-item-title>
        <v-list-item-subtitle>
          <b>CUENTA:</b> {{movementValues.data.data.records.numero_cuenta}}
        </v-list-item-subtitle>
        <v-list-item-subtitle>
          <b>{{movementValues.data.data.records.tipo_moneda | capitalize}}</b> - {{movementValues.data.data.records.banco | capitalize}}
        </v-list-item-subtitle>
      </v-list-item-content>
    </v-list-item>
      </center>
     </v-col>
      <v-col class="px-4">
       <center>
       
   <v-subheader v-if="movements.data.data.items">{{movements.data.data.items.length}} Movimientos bancarios</v-subheader>


    <v-list three-line subheader>
      
      <v-list-item
        v-for="(item) in movements.data.data.items"
        :key="item.id"
       
      >
        <v-list-item-avatar>
          <v-icon class="orange white--text">mdi-chevron-double-right</v-icon>
        </v-list-item-avatar>

        <v-list-item-content class="text-left">
          <v-list-item-title>{{item.descripcion}}</v-list-item-title>
          <v-list-item-subtitle class="caption">Dcto # <b>{{item.numero_documento}}</b></v-list-item-subtitle>
          <v-list-item-subtitle class="caption">CLP {{item.monto}}</v-list-item-subtitle>
        </v-list-item-content>

        <v-list-item-action>
          <v-list-item-subtitle class="caption"> <b>{{item.fecha_humana}}</b></v-list-item-subtitle>
        </v-list-item-action>
      </v-list-item>
     
    </v-list>
  
       </center>
     </v-col>
   </v-row>
 </div>
 <div v-else>
   <v-row style="margin-top: 50%;" class="px-4">
     <v-col>
       <center>
         <p class="title">Cargando...</p>
          <v-progress-linear
          indeterminate
          color="green darken-2"
         ></v-progress-linear>
       </center>
     </v-col>
   </v-row>
 </div>
</template>

<script lang="ts">
import Vue from "vue";
import { mapActions } from 'vuex';

export default Vue.extend({
 props:{
   movements: null,
   movementValues: null
 },

  data: () => ({
      
  }),
  methods: {
    ...mapActions({
      getAccountMovements:'getAccountMovements'
    }),
    
    
  }
});
</script>
