<template>
    <v-toolbar dense>
      <v-btn>Home</v-btn>
      <v-btn>Courses</v-btn>

      <v-spacer></v-spacer>

      <v-btn icon>
        <v-icon>mdi-magnify</v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon>mdi-dots-vertical</v-icon>
      </v-btn>
    </v-toolbar>

    <v-content>
      <MainHome/>
    </v-content>
</template>

<script>
import MainHome from './components/MainHome.vue'
import Courses from './components/Courses.vue'

export default {
  name: 'App',

  components: {
    MainHome,
    Courses
  },

  data: () => ({
    //
  }),
}
</script>
