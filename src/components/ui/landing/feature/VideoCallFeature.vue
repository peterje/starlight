<template>
  <v-sheet>
    <div class="d-flex flex-column flex-md-row">
      <div class="w-full w-md-half d-flex align-center">
        <div class="pa-6 pa-md-12 d-flex flex-column justify-center align-center">
          <h2 class="text-h3 text-lg-h2 mt-0 mt-xl-10">Magic Mirror Video Calls</h2>
          <div class="text-h6 text-lg-h5 mt-5">Receive a video call live from the castle from any one princess of your
            choice. Enchant your little one with special one on one time with their favorite fairytale character!
          </div>
          <div class="text-h6 text-lg-h5 mt-5">Receive a video call live from the castle from any one princess of your
            choice. Enchant your little one with special one on one time with their favorite fairytale character!
          </div>
          <v-btn outlined x-large class="mt-2">Order</v-btn>
        </div>
      </div>
      <div class="d-flex w-full w-md-half surface align-center justify-center">
        <v-img
          src="/images/features/magic-mirror-call.png"
          :max-height="$vuetify.breakpoint.mdAndUp ? '500' : '300'"
          contain
          alt=""
        ></v-img>
      </div>
    </div>
  </v-sheet>
</template>
