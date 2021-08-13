<template>
  <v-container class="py-6">
    <v-responsive max-width="700" class="mx-auto text-center">
      <h2 class="text-h3">Public Appearance Fees</h2>
      <div class="text-h6 text-lg-h5 mt-3 mb-6">Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus impedit error labore doloremque fugit!</div>
    </v-responsive>
    <v-card class="d-flex flex-column flex-md-row" outlined elevation="2">
      <div class="flex-grow-1 pa-4">
        <h4 class="text-h4">Something here</h4>
        <div class="text-h6 mt-3 font-italic">Pricing is evaluated on a case-to-case basis.</div>
        <v-divider class="my-3"></v-divider>
        <v-row dense class="secondary--text">
          <v-col cols="12" md="6" class="d-flex align-center">
            <v-icon color="black" small>mdi-check</v-icon>
            <span class="ml-1 text-body-1">Up to 50 Guests</span>
          </v-col>
          <v-col cols="12" md="6" class="d-flex align-center">
            <v-icon color="black" small>mdi-check</v-icon>
            <span class="ml-1 text-body-1">1.5 Hour Appearance</span>
          </v-col>
          <v-col cols="12" md="6" class="d-flex align-center">
            <v-icon color="black" small>mdi-check</v-icon>
            <span class="ml-1 text-body-1">Photos and Autographs</span>
          </v-col>
          <v-col cols="12" md="6" class="d-flex align-center">
            <v-icon color="black" small>mdi-check</v-icon>
            <span class="ml-1 text-body-1">Live Performance</span>
          </v-col>
          <v-col cols="12" md="6" class="d-flex align-center">
            <v-icon color="black" small>mdi-check</v-icon>
            <span class="ml-1 text-body-1">Event Publicity</span>
          </v-col>
        </v-row>
      </div>
      <v-sheet :width="$vuetify.breakpoint.mdAndUp ? '380' : undefined" color="surface" class="pa-4 rounded-r text-center">
        <div class="d-flex justify-center ml-n3 my-3">
          <div class="text-h5 font-weight-regular mr-1" style="margin-top: 4px">$</div>
          <div class="text-h1">275</div>
        </div>
        <div class="text-center my-3"><router-link class="secondary--text" to="#">More info</router-link></div>
        <v-btn x-large block color="primary">Buy Now</v-btn>
      </v-sheet>
    </v-card>
  </v-container>
</template>
