<template>
  <v-sheet class="" rounded>
    <v-container class="py-4 py-lg-8">
      <div class="text-uppercase font-weight-bold body-2 primary--text mb-2">Book Today</div>
      <h2 class="text-h3 text-lg-h2 primary--text">Pricing Plans</h2>
      <v-row class="mt-8">
        <v-col v-for="(plan, i) in plans" :key="i" cols="12" lg="4">
          <v-card
            class="text-center text-body-1"
            outlined
            light
            elevation="2"
          >
            <v-sheet
              class="pa-4"
            >
              <div class="text-h5 font-weight-black mb-6">{{ plan.title }}</div>
              <div class="d-flex justify-center">
                <div class="font-weight-regular text-h4 mr-1" style="margin-top: 4px">$</div>
                <div class="text-h1">{{ plan.price }}</div>
              </div>
            </v-sheet>
            <v-divider></v-divider>
            <v-sheet class="pa-4" color="grey lighten-5">
              <v-img v-if="i==0" src="@/assets/images/1Princess.jpg"></v-img>
              <v-img v-else-if="i==1" src="@/assets/images/2Princesses.jpg"></v-img>
              <v-img v-else src="@/assets/images/3Princesses.jpg"></v-img>
              <v-btn
                to="/book"
                x-large
                block
                outlined
              >Book Now</v-btn>
            </v-sheet>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-sheet>
</template>

<script>
export default {
  data() {
    return {
      plans: [{
        highlight: false,
        title: 'One Princess',
        price: '190',
        features: [{
          value: '1',
          label: 'Performer'
        }, {
          value: 'Other',
          label: 'Stuff'
        }, {
          value: 'More',
          label: 'Stuff'
        }]
      }, {
        highlight: true,
        title: 'Two Princesses',
        price: '275',
        features: [{
          value: '2',
          label: 'Performers'
        }, {
          value: 'Other',
          label: 'Stuff'
        }, {
          value: 'More',
          label: 'Stuff'
        }]
      }, {
        highlight: false,
        title: 'Three Princesses',
        price: '350',
        features: [{
          value: '3',
          label: 'Performers'
        }, {
          value: 'Other',
          label: 'Stuff'
        }, {
          value: 'More',
          label: 'Stuff'
        }]
      }]
    }
  }
}
</script>

<style scoped>
img{
  border-radius: 20px;
}
</style>
