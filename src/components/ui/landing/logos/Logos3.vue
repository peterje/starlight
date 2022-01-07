<template>
  <v-sheet>
    <v-container class="text-center">
      <div class="text-body-1 text-uppercase font-weight-bold">Our partners</div>
      <div class="logos3 my-4">
        <v-row dense class="justify-center">
          <v-col cols="12" sm="6" md="4">
            <a href="#">
              <v-sheet color="transparent">
                <img src="@/assets/images/walkwaylogo.jpeg">
              </v-sheet>
            </a>
          </v-col>
          <v-col cols="12" sm="6" md="4">
            <a href="#">
              <v-sheet color="transparent">
                <img src="@/assets/images/ginamariezlogo.jpeg">
              </v-sheet>
            </a>
          </v-col>
        </v-row>
        <v-row dense class="justify-center">
          <v-col cols="12" sm="6" md="4">
            <a href="#">
              <v-sheet color="transparent">
                <img src="@/assets/images/frozencabooselogo.jpeg">
              </v-sheet>
            </a>
          </v-col>
          <v-col cols="12" sm="6" md="4">
            <a href="#">
              <v-sheet color="transparent">
                <img src="@/assets/images/potteryfactorylogo.png">
              </v-sheet>
            </a>
          </v-col>
        </v-row>
      </div>
    </v-container>
  </v-sheet>
</template>

<style lang="scss" scoped>
.logos3 {
  img {
    height: 150px;
  }

  a:hover {
    img {
      filter: none;
    }
  }
}
</style>
