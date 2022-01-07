<template>
  <v-sheet class="text-center">
    <h2 class="text-h3 text-lg-h2 pa-2">Our Story</h2>
    <v-container class="py-4 py-lg-8 text-left">
      <v-row>
        <v-col cols="12" md="4" xl="3">
          <div style="width: 80px; height: 4px" class="mb-5 secondary" />
          <div class="text-h6 text-lg-h5 mt-5">Welcome to Starlight Studio, and thank you for getting to know who we are! </div>
          <div class="text-h6 text-lg-h5 mt-5">
            My passion behind this project is to spark a joy for the magic of performing arts by creating memorable character experiences for children and families. I want this to be an outlet for imagination and opportunity for creative collaboration in the hudson valley community.
          </div>
        </v-col>
        <v-col cols="12" md="4" offset-xl="1">
          <v-img
            class="rounded-lg elevation-6"
            src="/images/Headshot.png"
            :max-height="$vuetify.breakpoint.mdAndUp ? '700' : '300'"
            :min-height="$vuetify.breakpoint.mdAndUp ? '500' : '300'"
          ></v-img>
        </v-col>
        <v-col cols="12" md="4" xl="3" offset-xl="1">
          <div class="text-h6 text-lg-h5 mt-3">
            <div style="width: 80px; height: 4px" class="mb-5 secondary" />
            Born and raised in Seattle, Washington, as a child I was fortunate to be surrounded by an abundance of performing arts experiences for children and young audiences. As a young adult, this allowed me opportunities for on-stage experience that set me on a path of passion for the performing arts.
          </div>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12" md="4" xl="3">
          <div style="width: 80px; height: 4px" class="mb-5 secondary" />
          <div class="text-h6 text-lg-h5 mt-5">
            Moving to New Paltz, New York I fell in love with the community, and I have been serving the children and families of the hudson valley as a professional in early childhood education, in the classroom and now in leadership as a Program Director.
          </div>
        </v-col>
        <v-col cols="12" md="4" offset-xl="1">
          <v-img
            class="rounded-lg elevation-6"
            src="/images/story.jfif"
            :max-height="$vuetify.breakpoint.mdAndUp ? '700' : '300'"
            :min-height="$vuetify.breakpoint.mdAndUp ? '500' : '300'"
          ></v-img>
        </v-col>
        <v-col cols="12" md="4" xl="3" offset-xl="1">
          <div class="text-h6 text-lg-h5 mt-3">
            <div style="width: 80px; height: 4px" class="mb-5 secondary" />
            My mission is to blend my love for performing arts, and foundations of early childhood education to create enriching experiences for the children, families, and artists of the hudson valley.
          </div>
        </v-col>
      </v-row>
    </v-container>
  </v-sheet>
</template>
