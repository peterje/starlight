<template>
  <div class="container surface mt-5">
    <v-row class="justify-space-between mb-4">
      <div class="d-flex flex-column text-center">
        <v-img src="http://via.placeholder.com/640x360" max-width="500px" gradient="to top right, rgba(100,115,201,.33), rgba(25,32,72,.7)" style="border-radius: 50%"></v-img>
        <div class="justify-center">
          <v-btn width="50%">Book Now</v-btn>
        </div>
      </div>
      <div class="d-flex flex-column text-center">
        <v-img src="/images/characters/rapunzel.png" max-width="500px"></v-img>
        <div class="justify-center">
          <v-btn width="50%">Book Now</v-btn>
        </div>
      </div>
      <div class="d-flex flex-column text-center">
        <v-img src="/images/characters/elsa.png" max-width="500px"></v-img>
        <div class="justify-center">
          <v-btn width="50%">Book Now</v-btn>
        </div>
      </div>
    </v-row>
    <v-row class="justify-space-between mb-5">
      <div class="d-flex flex-column text-center">
        <v-img src="/images/characters/elsa.png" max-width="500px"></v-img>
        <div class="justify-center">
          <v-btn width="50%">Book Now</v-btn>
        </div>
      </div>
      <div class="d-flex flex-column text-center">
        <v-img src="/images/characters/elsa.png" max-width="500px"></v-img>
        <div class="justify-center">
          <v-btn width="50%">Book Now</v-btn>
        </div>
      </div>
      <div class="d-flex flex-column text-center">
        <v-img src="/images/characters/elsa.png" max-width="500px"></v-img>
        <div class="justify-center">
          <v-btn width="50%">Book Now</v-btn>
        </div>
      </div>
    </v-row>

  </div>
</template>

<script>
export default {
  name: 'CharactersPage'
}
</script>

<style >
img {
  border-radius: 50% !important;
}
</style>
