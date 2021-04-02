<template>
  <v-sheet>
    <div class="d-flex flex-column flex-md-row">
      <div class="w-full w-md-half d-flex align-center">
        <div class="pa-6 pa-md-12">
          <h2 class="text-h3 text-lg-h2 mt-0 mt-xl-10">A Perfect Addition to any Celebration</h2>
          <div class="text-h6 text-lg-h5 mt-5">Each party is unique and tailored to your group size, the age of your child, and your character choice. </div>
        </div>
      </div>
      <div class="w-full w-md-half">
        <v-img
          src="/images/features/14.jpg"
          :max-height="$vuetify.breakpoint.mdAndUp ? '600' : '300'"
          alt=""
        ></v-img>
      </div>
    </div>
  </v-sheet>
</template>
