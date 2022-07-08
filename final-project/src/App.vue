<script>

import MainHome from './components/MainHome.vue'
import MainCourses from './components/MainCourses.vue'

const routes = {
  '/': MainHome,
  '/Courses': MainCourses
}

export default {
  name: 'App',

  components: {
    MainHome,
    MainCourses
  },
  data() {
    return {
      currentPath: window.location.hash
    }
  },
  computed: {
    currentView() {
      return routes[this.currentPath.slice(1) || '/']
    }
  },
  mounted() {
    window.addEventListener('hashchange', () => {
      this.currentPath = window.location.hash
    })
  }
}

</script>

<template>
  <v-toolbar dense>
    <v-btn href="#/">Home</v-btn>
    <v-btn href="#/Courses">Courses</v-btn>

    <v-spacer></v-spacer>

    <v-btn icon>
      <v-icon>mdi-magnify</v-icon>
    </v-btn>

    <v-btn icon>
      <v-icon>mdi-dots-vertical</v-icon>
    </v-btn>
    
  </v-toolbar>
  <component :is="currentView"/>
</template>
