<template>
  <v-sheet class="white mt-10 elevation-3">
    <div class="d-flex flex-column flex-md-row">
      <div class="w-full w-md-half d-flex align-center">
        <div class="pa-6 pa-md-12">
          <h2 class="text-h3 text-lg-h2">Celebrate like <span class="text--white text--lighten-5">Royalty</span></h2>

          <div class="text-lg-h5 mt-4">Starlight Studio specializes in creating magical experiences for children and families in the Hudson Valley community by bringing favorite childhood fairytales to life. </div>
          <div class="text-lg-h5 mt-4">Character performers with extensive performing arts and early childhood knowledge and training, create magical memories through meaningful interactions and activities for young children.</div>
          <div class="text-lg-h5 mt-4">You can experience the magic of Starlight Studio through one of our Princess Party experiences for you next celebration, attending one of our community events, or virtually with a recorded message from a favorite princess for a loved one.</div>
        </div>
      </div>
      <div class="w-full w-md-half">
        <v-carousel height="100%" cycle hide-delimiter-background hide-delimiters >
          <v-carousel-item v-for="(item, i) in items" :key="i">
            <v-card height="100%" class="d-flex">
              <v-img :src="item.src"></v-img>
            </v-card>
          </v-carousel-item>
        </v-carousel>
      </div>
    </div>
  </v-sheet>
</template>
<script>
export default {
  props: {
    items : {
      type: Array,
      default: () => []
    }

  }
}
</script>
<style scoped>
.accent-text {
  font-family: 'MADE Likes Script',serif
}
</style>
