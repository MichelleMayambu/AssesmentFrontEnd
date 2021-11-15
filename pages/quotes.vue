<template>
  <div>
    <v-card>
        <v-tabs height="100" fixed-tabs color="cyan darken-3">
          <v-tab grow
            ><v-icon color="green" size="100">mdi-form</v-icon>RequestQuote
          </v-tab>
          <v-tab grow>
            <v-icon color="blue" size="100"></v-icon>Your Quotes
          </v-tab>
          <v-tab-item>
           <component :is="form"/>
          </v-tab-item>
           <v-tab-item>
           <component :is="clientList"/>
          </v-tab-item>
        </v-tabs>
    </v-card>
  </div>
</template>

<script>
import form from "~/components/form.vue";
import clientList from "~/components/clientList.vue";
export default {
  components: {
      form,
      clientList
    },
  data(){
    return{
        form,
        clientList
      }
    }
}
</script>