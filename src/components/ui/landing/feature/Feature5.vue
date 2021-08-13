<template>
  <v-sheet color="accent">
    <v-container class="py-4 py-lg-8">
      <v-row>
        <v-col>
          <v-sheet elevation="6" class="pt-4" rounded>
            <v-carousel
              v-model="model"
              hide-delimiters
              cycle
              height="400"
            >
              <v-carousel-item v-for="(item, i) in carousel" :key="i">
                <v-sheet light>
                  <v-responsive max-width="360" class="mx-auto text-center">
                    <v-img :src="item.img" contain></v-img>
                  </v-responsive>
                </v-sheet>
              </v-carousel-item>
            </v-carousel>
          </v-sheet>
        </v-col>
        <v-col class="align-center d-flex flex-column justify-center text-center">
          <h2 class="text-h3 text-lg-h2">{{this.$props.title}}</h2>
          <div class="subtitle-1">Subtitle</div>
          <div class="text-h6 text-lg-h5 mt-6">{{this.$props.text}}</div>
          <v-btn large class="mt-6" outlined>Book Now</v-btn>
        </v-col>
      </v-row>
    </v-container>
  </v-sheet>
</template>

<script>
export default {
  props: ['title', 'text'],
  data: () => ({
    model: 0,
    carousel: [{
      img: "https://picsum.photos/360",
    }, {
      img: "https://picsum.photos/360",
    }]
  })
}
</script>
<style scoped>
</style>
