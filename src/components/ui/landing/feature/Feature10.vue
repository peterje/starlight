<template>
  <v-sheet color="transparent">
    <v-container class="py-4 py-lg-8">
      <v-responsive max-width="1200" class="mx-auto text-center mb-4">
        <h2 class="text-h3 text-lg-h2 ">The Party Experience</h2>
        <div style="width: 80px; height: 4px" class="my-4 secondary mx-auto" />
        <div class="text-h6 text-lg-h5">All princess parties include these magical elements!</div>
      </v-responsive>
      <v-row>
        <v-col
          v-for="(item, i) in features"
          :key="i"
          cols="12"
          sm="6"
          lg="4"
        >
          <v-card class="py-4 px-2">
            <v-responsive max-width="300" class="mx-auto text-center">
              <div class="mb-2">
                <v-icon class="text-h2" color="secondary">{{ item.icon }}</v-icon>
              </div>
              <div class="text-h6 mt-3">{{ item.title }}</div>
              <div class="font-weight-regular mt-2">{{ item.description }}</div>
            </v-responsive>
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
      features: [{
        icon: 'fa-heart',
        title: 'Photos & Autographs',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse expedita fugit quam aliquam. Autem assumenda'
      }, {
        icon: 'fa-book-reader',
        title: 'Story Time',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse expedita fugit quam aliquam. Autem assumenda'
      }, {
        icon: 'fa-music',
        title: 'Music',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse expedita fugit quam aliquam. Autem assumenda'
      }, {
        icon: 'fa-child',
        title: 'Dancing',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse expedita fugit quam aliquam. Autem assumenda'
      }, {
        icon: 'fa-paint-brush',
        title: 'Pixie Dust Wish',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse expedita fugit quam aliquam. Autem assumenda'
      }, {
        icon: 'fa-crown',
        title: 'Royal Ceremony',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse expedita fugit quam aliquam. Autem assumenda'
      }]
    }
  }
}
</script>
