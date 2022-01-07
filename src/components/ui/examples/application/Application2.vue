<template>
  <v-layout class="fill-height">
    <!-- Navigation -->
    <ApplicationSideBar @changeView="changeView"></ApplicationSideBar>
    <!-- Toolbar -->
    <v-app-bar
      app
      flat
      color="surface"
      class="app-bar-full"
      clipped-left
    >
      <v-card
        class="flex-grow-1 d-flex pa-1"
        tile
      >
        <div class="d-flex flex-grow-1 align-center">
          <v-app-bar-nav-icon class="d-lg-none" @click.stop="drawer = !drawer"></v-app-bar-nav-icon>

          <div class="d-flex px-1 align-center">
            <img src="/images/logo.png" height="60" alt="logo" class="mr-1">
            <div>
              <div class="title font-weight-bold text-uppercase primary--text">{{ config.product.name }}</div>
              <div class="overline grey--text">{{ config.product.version }}</div>
            </div>
          </div>
        </div>
      </v-card>
    </v-app-bar>
    <v-content class="mt-10 fill-height text-center">
      <h1 class="text-h4">{{activeView}}</h1>
      <v-switch label="Show Archived" @click="doShowArchive"> </v-switch>

      <div :key="contentKey">
        <div v-if="activeView === 'Bookings'">
          <v-divider class="my-2"></v-divider>
          <UserTable :show-archived="showArchived" />
        </div>

        <div v-if="activeView === 'Casting'">
          <v-divider class="my-2"></v-divider>
          <CastingTable :show-archived="showArchived" />
        </div>

        <div v-if="activeView === 'Messages'">
          <v-divider class="my-2"></v-divider>
          <MessagesTable :show-archived="showArchived"/>
        </div>

      </div>
    </v-content>
  </v-layout>
</template>

<script>
import config from '@/configs'
import MainMenu from '@/components/navigation/MainMenu'
import ToolbarUser from '@/components/toolbar/ToolbarUser'
import ToolbarNotifications from '@/components/toolbar/ToolbarNotifications'
import menu from '@/components/ui/application/layout/menu'
import UserTable from '@/components/examples/UserTable'
import Card2 from '@/components/ui/application/card/Card2'
import Card5 from '@/components/ui/application/card/Card5'
import CastingTable from "@/components/examples/CastingTable";
import MessagesTable from "@/components/examples/MessagesTable";
import ApplicationSideBar from "@/components/ui/examples/application/ApplicationSideBar";

export default {
  components: {
    ApplicationSideBar,
    MainMenu,
    ToolbarUser,
    ToolbarNotifications,
    UserTable,
    CastingTable,
    MessagesTable,
    Card2,
    Card5
  },
  data() {
    return {
      menu,
      config,
      drawer: null,
      isContentBoxed: false,
      activeView: 'Bookings',
      showArchived: false,
      contentKey: 1
    }
  },
  methods:{
    changeView(view) {
      console.log("showView", view)
      this.activeView = view
    },
    doShowArchive(){
      this.showArchived = !this.showArchived;
      console.log(this.showArchived)
      this.contentKey*=-1;
    },
  }
}
</script>

<style lang="scss">
.app-bar-full {
  .v-toolbar__content,
  .v-toolbar__extension {
    padding: 0;
  }
}
</style>
