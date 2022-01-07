<template>
  <div class="container">

    <v-container class="py-4 py-lg-8 white" >
      <v-row class="justify-center">
        <v-col cols="8" >
          <div class="text-center">
            <h2 class="text-h3 text-lg-h2 primary--text">Enchanted Events</h2>
            <div class="font-italic text-uppercase text-subtitle-1 font-weight-bold body-2 primary--text text--darken-2 my-2">Public Appearance Opportunities</div>
            <v-carousel hide-delimiters :show-arrows="false">
              <v-carousel-item>
                <v-img src="@/assets/images/event1.png"></v-img>
              </v-carousel-item>
<!--              <v-carousel-item src="@/assets/images/event1.png"></v-carousel-item>-->
              <v-carousel-item src="@/assets/images/event2.jpg"></v-carousel-item>
              <v-carousel-item src="@/assets/images/event5.png"></v-carousel-item>
              <v-carousel-item src="@/assets/images/event3.png"></v-carousel-item>
            </v-carousel>
            <v-responsive max-width="1200" class="mx-auto">
              <div class="text-h6 text-lg-h5 mt-4">Theme parks draw thousands of visitors everyday to experience the magic of meeting their most beloved fairytale characters. Add magic to your festival, fundraiser, or corporate event by offering a character appearance at your event! A meet & greet is the perfect way to draw a crowd, and provide a truly memorable and interactive experience for your guests! Character performers will arrive at your venue picture perfect. We will collaborate with you to design a meet & greet structure that best compliments your venue and event, and we will create and execute your design from start to finish. Don’t know where to start? We are happy to provide our professional expertise to lead the design of the event for you! </div>
              <div class="body-1 primary--text text--darken-2 my-4">Each public character apperance event is designed to be a perfect fit for the event and venue. Contact us today to start designing your magical event!</div>
            </v-responsive>
            <v-btn  large color="primary" class="darken-1" to="/book">Book Now</v-btn>
          </div>
        </v-col>

      </v-row>
    </v-container>
    <Logos3></Logos3>
    <Pricing3></Pricing3>
  </div>
</template>

<script>
import Pricing3 from "@/components/ui/landing/pricing/Pricing3";
import Logos3 from "../components/ui/landing/logos/Logos3";
export default {
  name: "EventsPage",
  components:{
    Logos3,
    Pricing3,
  },
  data () {
    return {
      items: [
        {
          src: "./event1.JPG"
        },
        {
          src: 'https://cdn.vuetifyjs.com/images/carousel/sky.jpg',
        },
        {
          src: 'https://cdn.vuetifyjs.com/images/carousel/bird.jpg',
        },
        {
          src: 'https://cdn.vuetifyjs.com/images/carousel/planet.jpg',
        },
      ],
    }
  },

}
</script>

<style scoped>

</style>
