<template>
  <v-app>
    <v-main>
      <MainHome/>
    </v-main>
  </v-app>
</template>

<script>
import MainHome from './components/MainHome.vue'

export default {
  name: 'App',

  components: {
    MainHome,
  },

  data: () => ({
    //
  }),
}
</script>
