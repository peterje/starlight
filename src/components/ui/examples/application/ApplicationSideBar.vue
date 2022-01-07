<template>
  <v-navigation-drawer
    app
    floating
    clipped
    :color="$vuetify.breakpoint.lgAndUp ? 'surface': ''"
    :right="$vuetify.rtl"
    width="260"
  >
    <v-list nav dense>
      <v-list-item link v-for="item in links" :key="item" @click="changeView(item)">
        <v-list-item-avatar>
          <v-icon>mdi-view-grid</v-icon>
        </v-list-item-avatar>
        {{item}}
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
export default {
  name: "ApplicationSideBar",
  methods:{
    changeView(item){
      console.log("emit")
      this.$emit('changeView', item);
    }
  },
  data () {
    return {
      links: [
        "Bookings",
        "Messages",
        "Casting",
      ]
    }
  }
}
</script>

<style scoped>

</style>
