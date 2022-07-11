<!-- <template>
  <div class="base">
    <v-toolbar dense>
      <v-btn class="home">Home</v-btn>
      <v-btn class="courses" href="#/Courses">Courses</v-btn>

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
      <CoursesSect/>
    </v-content>
    <router-view/>
  </div>
</template> -->

<!-- <style>
.base {
  height: 100vh;
  width: 100vw;
  background: #155094;
}
.home {
  background: #371594;
  padding: 10px;
  margin: 10px;
}
.courses {
  background: #159459;
  padding: 10px;
  margin: 10px;
}
</style> -->

<!-- <script>
import MainHome from './components/MainHome.vue'
import CoursesSect from './components/CoursesSect.vue'

export default {
  name: 'App',

  components: {
    MainHome,
    CoursesSect,
  },

  data: () => ({
    //
  }),
}
</script> -->


<script>

import MainHome from './components/MainHome.vue'
import MainCourses from './components/CoursesSect.vue'
import TeacherSignIn from './components/SignIn'

const routes = {
  '/': MainHome,
  '/Courses': MainCourses,
  '/Sign-In': TeacherSignIn
}

export default {
  name: 'App',

  components: {
    MainHome,
    MainCourses,
    TeacherSignIn
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
  <v-toolbar dense class="bg-blue-darken-2" :sticky="sticky"
>
    <v-btn href="#/">Home</v-btn>
    <v-btn href="#/Courses">Courses</v-btn>

    <v-spacer></v-spacer>

    <v-btn icon>
      <v-icon>mdi-magnify</v-icon>
    </v-btn>
    <v-btn href="#/Sign-In">Sign In</v-btn>

    
  </v-toolbar>
  <component :is="currentView"/>
</template>