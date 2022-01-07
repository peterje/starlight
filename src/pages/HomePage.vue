<template>
  <div class="surface">
    <Feature14 :items="carouselItems"></Feature14>
<!--    <v-sheet class="text-center my-4 transparent" style="position:relative;">-->
<!--        <h1 class="my-2 text-h3" v-show="$vuetify.breakpoint.smAndDown" style="z-index: 100">Creating Magical Memories to Last a Lifetime</h1>-->
<!--        <h1 class="my-2 display-4 centered white&#45;&#45;text text&#45;&#45;darken-3" v-show="$vuetify.breakpoint.mdAndUp" style="z-index: 100">Creating Magical Memories to Last a Lifetime</h1>-->
<!--        <img src="@/assets/images/bannerEdit2.jpg" width="100%" height="auto"></img>-->
<!--&lt;!&ndash;        <v-img src="@/assets/images/bannerEdit2.jpg" style="border-radius: 20px;" gradient="to top right, rgba(255,253,255,0.0), rgba(241,154,232,0.3)"></v-img>&ndash;&gt;-->
<!--    </v-sheet>-->
    <Testimonial3></Testimonial3>
    <Contact5></Contact5>
  </div>
</template>

<script>
import Feature14 from '@/components/ui/landing/feature/Feature14'
import Testimonial3 from '@/components/ui/landing/testimonial/Testimonial3'
import Contact5 from '@/components/ui/landing/contact/Contact5'
export default {
  name: 'HomePage',
  components: {
    Testimonial3,
    Feature14,
    Contact5
  },
  data()  {
    return {
      // List of images displayed in the carousel
      carouselItems: [
        { src: '/images/img0.jpg' },
        { src: '/images/banner0.jpg' },
        { src: '/images/banner2.jpg' }
      ]
    }
  }
}
</script>

<style scoped>

.centered {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
/*@supports (-webkit-text-stroke: 1px black) {*/
/*  h1 {*/
/*    -webkit-text-stroke: 0.1px black;*/
/*    -webkit-text-fill-color: white;*/
/*  }*/
/*}*/
</style>
