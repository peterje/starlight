<template>
  <div>
    <v-navigation-drawer v-model="drawer" app temporary>
      <v-list dense nav>
        <v-subheader class="text-uppercase font-weight-bold">Menu</v-subheader>
        <v-list-item v-for="(item, index) in menu" :key="index" link>
          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
      <template v-slot:append>
        <div class="pa-2">
          <v-btn block color="primary">
            Log In
          </v-btn>
        </div>
      </template>
    </v-navigation-drawer>

    <v-btn
      class="d-md-none drawer-button"
      rounded
      @click="drawer = !drawer"
    >
      <v-icon right>mdi-menu</v-icon>
    </v-btn>

    <v-app-bar :height="$vuetify.breakpoint.mdAndUp ? '240' : '160'" class="white">
      <v-container class="py-0 px-0 px-sm-2 d-flex outer-wrapper">
        <div class="left inner-wrapper nav-edge justify-center">
          <div class="d-flex align-center">
            <v-btn fab class="surface elevation-0 ma-2 hidden-md-and-down" >
              <v-icon x-large >mdi-facebook</v-icon>
            </v-btn>
            <v-btn fab class="surface elevation-0 ma-2 hidden-md-and-down" >
              <v-icon x-large >mdi-instagram</v-icon>
            </v-btn>
            <v-btn fab class="surface elevation-0 ma-2 hidden-md-and-down" >
              <v-icon x-large >mdi-google-plus</v-icon>
            </v-btn>
          </div>
        </div>
        <div class="center inner-wrapper">
          <v-container class="py-0 px-0 px-sm-2 d-flex flex-column text-center justify-center align-center" >
            <div class="mb-md-3">
              <router-link to="#" class="d-flex align-center mr-2">
                <v-toolbar-title>
                  <v-img src="images/logo.png" style="max-width: 350px;"></v-img>
                </v-toolbar-title>
              </router-link>
            </div>
            <div class="d-none d-md-block">
              <LinkDropdown v-for="(item,index) in menu" :key="index" :title="item.title" :links="item.links"> </LinkDropdown>
            </div>
          </v-container>
        </div>
        <div class="right inner-wrapper">
        </div>
      </v-container>
    </v-app-bar>
  </div>
</template>

<script>
import { NavBar as menu } from './menus.js'
import LinkDropdown from '@/components/navigation/LinkDropdown'
export default {
  components: {
    LinkDropdown
  },
  data() {
    return {
      drawer: null,
      menu
    }
  }
}
</script>

<style>
.drawer-button {
  position: fixed;
  top: 44px;
  left: -22px;
  z-index: 6;
}
.outer-wrapper {
  display: flex;
}
.left.inner-wrapper, .right.inner-wrapper {
  flex: 1;
  display: flex;
  min-width: -webkit-min-content; /* Workaround to Chrome bug */
}
.right.inner-wrapper {
  justify-content: flex-end;
}
</style>
