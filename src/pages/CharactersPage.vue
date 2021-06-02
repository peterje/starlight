<template>
  <div class="container surface mt-5">
    <v-row class="justify-space-between mb-4" v-for="i in 2">
      <div class="d-flex flex-column text-center align-center" v-for="n in 3">
          <v-hover v-slot="{ hover }">
            <v-img 
            src="https://via.placeholder.com/480x480"
            max-width="500px" style="border-radius: 50%">
                 <v-expand-transition class="justify-center align-center" >
                  <div v-if="hover" class="d-flex flex-column transition-fast-in-fast-out darken-2 v-card--reveal text-h2 white--text" style="height: 100%;"
                  >
                      <div class="display-1"> Something catchy </div>
                      <div class="headline"> Description </div>
                  </div>
                </v-expand-transition>
            </v-img>
          </v-hover>
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
.blur{
    backdrop-filter: blur(5px)
}

.v-card--reveal {
  align-items: center;
  bottom: 0;
  justify-content: center;
  background-color: rgba(51, 170, 51, .7);
  position: absolute;
  width: 100%;
}

</style>
