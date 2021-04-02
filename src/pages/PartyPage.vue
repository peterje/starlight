<template>
  <div class="container flex-column">
    <Feature2></Feature2>
    <Feature10></Feature10>
    <Pricing4></Pricing4>
  </div>
</template>

<script>
import Pricing4 from '@/components/ui/landing/pricing/Pricing4'
import Feature2 from '@/components/ui/landing/feature/Feature2'
import Feature10 from '@/components/ui/landing/feature/Feature10'
export default {
  name: 'PartyPage',
  components: {
    Pricing4,
    Feature2,
    Feature10
  }
}
</script>

<style scoped>

</style>
