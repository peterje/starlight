<template>
  <v-container class="py-4 py-lg-8">
    <v-responsive max-width="1200" class="mx-auto text-center">
      <h2 class="text-h3 text-lg-h2 ">Our Customers</h2>
      <div style="width: 80px; height: 4px" class="my-4 secondary mx-auto" />
      <div class="text-h6 text-lg-h5">What our customers are saying...</div>
    </v-responsive>

    <v-row class="mt-6 justify-center">
      <v-col
        v-for="(item, i) in testimonials"
        :key="i"
        cols="12"
        sm="6"
        lg="3"
      >
        <v-hover v-slot="{ hover }">
          <v-card class="pa-3 d-flex" :elevation="hover ? 12 : 2">
            <div class="text-h1 mr-2">“</div>
            <div class="text-body-1">{{ item.testimonial }}</div>
          </v-card>
        </v-hover>
        <div class="d-flex align-center mt-3">
          <div>
            <div class="text-h6">-{{ item.name }}</div>
            <div class="text-h7 secondary--text">{{ item.title }}</div>
          </div>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      testimonials: [{
        name: 'Brielle W',
        image: '/images/avatars/avatar3.svg',
        testimonial: 'Starlight Studio is absolutely wonderful. I had used Starlight for an Elsa performance and it was more than amazing. So professional and a real life princess. My 4 year old princess was in awe the entire time, Elsa was absolutely spectacular and I highly recommend using Starlight for your next princess party!'
      }, {
        name: 'Mary S',
        image: '/images/avatars/avatar3.svg',
        testimonial: 'We just had Elsa over for my daughter’s 5th birthday and it was absolutely magical! Age appropriate and simply adorable. We had a small outdoor party in our backyard and it was just perfect. Highly recommend!'
      },{
        name: 'Carmen C',
        image: '/images/avatars/avatar3.svg',
        testimonial: 'So amazing !! Super patient and gentle with the kids ! Such a pleasure I would do this 100 more times ! Highly recommended\n'
      },{
        name: 'Emily G',
        image: '/images/avatars/avatar4.svg',
        testimonial: 'Pamela is by far one of the sweetest most professional people I have had the pleasure of working with... her work as Elsa for our daughter’s 3rd birthday was out fo this world - she looks the part, sounds the part and is so well received by children. I can’y say enough good things about working with her. Can’t wait to book Pamela again!'
      // }, {
      //   name: 'Angela M',
      //   image: '/images/avatars/avatar17.svg',
      //   testimonial: 'We had Princess Aurora come for a home visit for Valentine’s Day. It was super cute and highly recommended. We will definitely try to book another visit when they are available!'
      }]
    }
  }
}
</script>
