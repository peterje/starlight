<template>
  <v-sheet class="" rounded>
    <v-container class="py-4 py-lg-8">
      <div class="text-uppercase font-weight-bold body-2 primary--text mb-2">Book Today</div>
      <h2 class="text-h3 text-lg-h2">Pricing Plans</h2>
      <div class="text-h6 text-lg-h5 mt-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus impedit error labore doloremque fugit! Dolor fugit molestiae vero quos quisquam nobis, eos debitis magni omnis ea incidunt amet voluptate dignissimos!</div>

      <v-row class="mt-8">
        <v-col v-for="(plan, i) in plans" :key="i" cols="12" lg="4">
          <v-card
            class="text-center text-body-1"
            outlined
            light
            elevation="2"
            :class="[plan.highlight && 'mt-n4']"
          >
            <v-sheet
              class="pa-4"
              :class="[plan.highlight && 'py-8']"
            >
              <div class="text-h4 font-weight-black mb-6">{{ plan.title }}</div>
              <div class="d-flex justify-center">
                <div class="font-weight-regular text-h4 mr-1" style="margin-top: 4px">$</div>
                <div class="text-h1">{{ plan.price }}</div>
              </div>
            </v-sheet>
            <v-divider></v-divider>
            <v-sheet class="pa-4" color="grey lighten-5">
              <div class="my-6 text-h6">
                <div v-for="(feat, j) in plan.features" :key="j" class="my-1">
                  <span class="font-weight-black mr-1">{{ feat.value }}</span>
                  <span>{{ feat.label }}</span>
                </div>
              </div>
              <v-btn
                to="/book"
                x-large
                block
                outlined
                :dark="plan.highlight"
                :class="[plan.highlight && 'black']"
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
        title: 'Dutchess',
        price: '250',
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
        title: 'Princess',
        price: '350',
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
        title: 'Queen',
        price: '450',
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
