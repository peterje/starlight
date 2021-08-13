<template>
  <v-sheet>
    <div class="d-flex flex-column flex-md-row">
      <div class="w-full w-md-half d-flex align-center justify-center">
        <div class="pa-6 pa-md-12 d-flex flex-column align-center justify-center">
          <h2 class="text-h3 text-lg-h2 mt-0 mt-xl-10">Magical Messages</h2>
          <div class="text-h6 text-lg-h5 mt-5">Special delivery just for you! A personalized letter from the princess of your choice complete with an autographed photo and keepsake card from their enchanted kingdom!</div>
          <div class="text-h6 text-lg-h5 mt-5">Your magical message includes all postage and delivery costs, and will arrive to wish your loved one any message of your choice! </div>
          <v-btn outlined x-large class="mt-2">Order</v-btn>
        </div>
      </div>
      <div class="d-flex w-full w-md-half surface align-center justify-center">
        <v-img
          src="/images/features/message-icon.png"
          :max-height="$vuetify.breakpoint.mdAndUp ? '500' : '300'"
          contain
          alt=""
        ></v-img>
      </div>
    </div>
  </v-sheet>
</template>
