<template>
  <v-sheet class="" rounded>
    <v-container class="py-4 py-lg-8">
      <div class="text-uppercase font-weight-bold body-2 primary--text mb-2">Book Today</div>
      <h2 class="text-h3 text-lg-h2 primary--text">Pricing Plans</h2>
      <div class="text-h6 text-lg-h5 mt-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus impedit error labore doloremque fugit! Dolor fugit molestiae vero quos quisquam nobis, eos debitis magni omnis ea incidunt amet voluptate dignissimos!</div>

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
              <div class="text-h4 font-weight-black mb-6">{{ plan.title }}</div>
              <div class="d-flex justify-center">
                <div class="font-weight-regular text-h4 mr-1" style="margin-top: 4px">$</div>
                <div class="text-h1">{{ plan.price }}</div>
              </div>
            </v-sheet>
            <v-divider></v-divider>
            <v-sheet class="pa-4" color="grey lighten-5">
              <v-img src="https://images.squarespace-cdn.com/content/v1/5e71646e7fa22c4fdc0c3c79/1589148045452-AFCV9079TPEWBEQ959K1/ke17ZwdGBToddI8pDm48kGDpvalPb1SqHoCn1hwN0Y57gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QHyNOqBUUEtDDsRWrJLTmx-YtV7KdJhhcFMxgH7DNwVWsr4BytTuzU0mdZNjZkC7ehjA8nxqmKGxR1QtMJl5J/1+perf.+Icon.png?format=500w"></v-img>

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
