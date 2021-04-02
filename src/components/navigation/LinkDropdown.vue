<template>
  <v-menu offset-y open-on-hover >
    <template v-slot:activator="{ on, attrs }" class="elevation-0">
      <router-link v-if="links.length === 1" :to="links[0].to">
        <v-btn v-bind="attrs" plain class="text-uppercase" v-on="on">
          {{ title }}
        </v-btn>
      </router-link>
      <v-btn
        v-else
        v-bind="attrs"
        plain
        class="text-uppercase"
        v-on="on"
      >
        {{ title }}
      </v-btn>
    </template>
    <v-list v-if="links.length > 1" elevation="0">
      <v-list-item v-for="(item, index) in links" :key="index" class="elevation-0">
        <router-link :to="item.to" class="d-flex align-center text-decoration-none mr-2">
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </router-link>
      </v-list-item>
    </v-list>
  </v-menu>
</template>

<script>
export default {
  name: 'LinkDropdown',
  props: {
    title: {
      type: String,
      required: true
    },
    links: {
      type: Array,
      required: true
    }
  }
}
</script>

<style scoped>
a{
  text-decoration: none;
}
</style>
