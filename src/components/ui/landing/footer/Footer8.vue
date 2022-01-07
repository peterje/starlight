<template>
  <v-footer>
    <v-container>
      <div class="d-flex flex-wrap align-center justify-center font-weight-bold text-uppercase body-2">
        <router-link to="/faq" class="text-decoration-none mx-2 mb-1">FAQ</router-link>
        <router-link to="/terms" class="text-decoration-none mx-2 mb-1">Terms of Use</router-link>
        <router-link to="/contact" class="text-decoration-none mx-2 mb-1">Contact</router-link>
      </div>
      <div class="d-flex align-center justify-center mt-4">
        <v-btn icon color="secondary lighten-2" class="mx-1"><v-icon>mdi-facebook</v-icon></v-btn>
        <v-btn icon color="secondary lighten-2" class="mx-1"><v-icon>mdi-instagram</v-icon></v-btn>
      </div>
      <div class="d-flex flex-column flex-sm-row align-center justify-center mt-4 overline">
        <div class="secondary--text">© Starlight Studio 2021</div>
      </div>
    </v-container>
  </v-footer>
</template>
