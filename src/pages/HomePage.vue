<template>
  <div class="surface">
    <Feature14 :items="carouselItems"></Feature14>
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

</style>
