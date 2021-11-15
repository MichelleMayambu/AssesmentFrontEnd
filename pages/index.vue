<template>
<div class="homebackground">
  <v-img :src="require('@/assets/pic1.jpg')">
  <v-container style="margin-top:4rem;">
   <v-row align="center">
    <div class="col-md-6">
      <h1 class="display-4">Getting Money Has Never Been Easier</h1>
      <h3 style="margin-top:1rem;margin-bottom:1rem;">15 minute transfers</h3>
      <!-- <v-btn dark rounded   large color="lime darken-2">HOW IT WORKS</v-btn> -->
       <v-btn dark rounded  large color="deep-purple darken-3" @click="gotToQuotesPage()">Get a Quote</v-btn>
    </div>
    <div class="col-md-6"></div>
  </v-row>
  </v-container>
  </v-img>
    <v-parallax :src="require('@/assets/parralax.jpg')">
    <v-row
      align="center"
      justify="center"
    >
      <v-col
        class="text-center"
        cols="12"
      >
       <h1>Get Money Right Now</h1>
        <h4 class="subheading">
         Simply request for a quote and you will be contacted within the next 24hrs.
        </h4>
          <!-- <v-btn dark rounded  large color="deep-purple darken-3">Get a Quote</v-btn> -->
      </v-col>
      <v-col>
        <v-card style="text-align:center;" class="pb-5">
          <v-icon></v-icon>
        <h1 class="display-1">Home Loan</h1>
        <p>Upto R500,000</p>
        <p>Interest rate of 7.5%</p>
          <v-btn
            color="deep-purple darken-3"
            dark
            rounded
            v-bind="attrs"
            v-on="on"
           @click="gotToQuotesPage()">Request A quote</v-btn>
        </v-card>
      </v-col>
       <v-col>
         <v-card style="text-align:center;" class="pb-5">
            <v-icon></v-icon>
        <h1 class="display-1">Personal Loan</h1>
          <p>Upto R60,000 </p>
         <p>Interest rate of 6.5%</p>
           <v-btn
            color="deep-purple darken-3"
            dark
            rounded
            v-bind="attrs"
            v-on="on"
           @click="gotToQuotesPage()">Request A quote</v-btn>
         </v-card>
       </v-col>
        <v-col>
          <v-card style="text-align:center;" class="pb-5">
             <v-icon></v-icon>
         <h1 class="display-1">Car Loan</h1>
          <p>Upto R200,000</p>
         <p>Interest rate of 6.5%</p>
        <v-btn
            color="deep-purple darken-3"
            dark
            rounded
            v-bind="attrs"
            v-on="on"
           @click="gotToQuotesPage()">Request A quote</v-btn>
         </v-card>
        </v-col>
    </v-row>
  </v-parallax>    
</div>
</template>

<script>

export default {
  data() {
     return{

     }
  },
  methods:{
    gotToQuotesPage(){
        this.$router.push("/quotes");
    }
  }
}
</script>
<style lang="scss">
 .homebackground{
   
    background-size: cover;
 }
 .display-4{
   font-weight:600;
 }
</style>