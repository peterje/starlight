<template>
  <v-layout>
    <v-main>
      <div class="surface">
        <Toolbar5></Toolbar5>
        <router-view :key="$route.fullPath"></router-view>
        <Footer8 class=""></Footer8>
      </div>
    </v-main>
  </v-layout>
</template>

<script>
import Toolbar5 from '@/components/ui/landing/toolbar/Toolbar5'
import Footer8 from '@/components/ui/landing/footer/Footer8'
export default {
  components: {
    Footer8,
    Toolbar5
  }
}
</script>
