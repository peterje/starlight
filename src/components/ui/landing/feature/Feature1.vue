<template>
  <v-sheet class="surface">
    <v-container class="py-4 py-lg-8">
      <v-row>
        <v-col cols="12" md="6">
          <h2 class="text-h3 text-lg-h2 mb-4 mt-xl-10">Ready to Make Magic?</h2>
          <v-btn submit x-large color="secondary" min-width="180">Book Now!</v-btn>
          <div class="mt-4">
            <router-link to="#" class="text-decoration-none font-weight-bold text-h6">Learn More</router-link>
          </div>
        </v-col>
        <v-col cols="12" md="6">
          <div class="w-full w-md-half">
            <v-img
              src="/images/book.png"
              :max-height="$vuetify.breakpoint.mdAndUp ? undefined : '300'"
              min-height="100%"
              alt=""
            ></v-img>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </v-sheet>
</template>
