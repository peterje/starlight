<template>
  <v-sheet color="accent">
    <v-container class="py-4 py-lg-8">
      <v-row>
        <v-col>
          <v-sheet elevation="6" class="pt-4" rounded>
            <div class="d-flex text-center justify-center">
              <h2 class="text-h3 text-lg-h2">{{this.$props.title}}</h2>
            </div>
            <v-carousel
              v-model="model"
              hide-delimiters
              cycle
              height="400"
            >
              <v-carousel-item v-for="(item, i) in this.$props.images" :key="i">
                go
                <v-img :src="item" contain ></v-img>
              </v-carousel-item>
            </v-carousel>
            <div class="d-flex flex-column align-center justify-center">
              <v-btn large class="ma-2" outlined>Book Now</v-btn>
            </div>
          </v-sheet>
        </v-col>
<!--        <v-col class="align-center d-flex flex-column justify-center text-center">-->
<!--          <h2 class="text-h3 text-lg-h2">{{this.$props.title}}</h2>-->
<!--          <div class="subtitle-1">Subtitle</div>-->
<!--          <div class="text-h6 text-lg-h5 mt-6">{{this.$props.text}}</div>-->
<!--          <v-btn large class="mt-6" outlined>Book Now</v-btn>-->
<!--        </v-col>-->
      </v-row>
    </v-container>
  </v-sheet>
</template>

<script>
export default {
  props: ['title', 'text', 'images'],
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
