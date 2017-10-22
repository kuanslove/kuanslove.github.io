<template>
  <v-app dark>
    <v-navigation-drawer
      temporary 
      v-model="drawer"
      enable-resize-watcher
      fixed
    >
      <v-list dense>
        <v-list-tile to="/user">
          <v-list-tile-action>
            <v-icon>home</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            About
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar fixed class="light-blue darken-3" style="opacity:0.9;">
      <v-toolbar-side-icon @click.stop="drawer = !drawer" class="hidden-sm-and-up">
      </v-toolbar-side-icon>
      <v-toolbar-title>
        <router-link to="/" tag="span" style="cursor:pointer;color:white;">  
        Kuan Xing
        </router-link>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-xs-only">
        <v-btn class="ml-1" flat exact to="/">
          <v-icon class="mr-1">face</v-icon>
          About            
        </v-btn>
        <v-btn class="ml-1" flat to="/contact">
          <v-icon class="mr-1">email</v-icon>
          Contact
        </v-btn>
      </v-toolbar-items>
    </v-toolbar>
    <main>
      <v-container fluid class="pa-0">
        <v-layout fill-width="true">
          <v-flex>
            <!--v-router-->
            <router-view></router-view>
          </v-flex>
        </v-layout>
      </v-container>
    </main>

  </v-app>
</template>

<script>
  export default {
    data () {
      return {
        clipped: false,
        drawer: false,
        fixed: false,
        miniVariant: false,
        right: true,
        rightDrawer: false,
        title: 'CV Page'
      }
    }
  }
</script>

<style lang="stylus">
  @import './stylus/main'
</style>