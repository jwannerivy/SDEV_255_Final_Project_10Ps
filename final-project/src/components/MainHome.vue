<template>
<div class="home">
  <h1 class="title">Home</h1>
  <v-card
    class="mx-auto"
    max-width="344"
  >
    <v-img
      src="/laptop.png"
      height="200px"
      cover
    ></v-img>

    <v-card-title>
      Course #1
    </v-card-title>

    <v-card-subtitle>
      Subject: Programming
    </v-card-subtitle>

    <v-card-actions>
      <v-btn
        color="orange-lighten-2"
        variant="text"
      >
        Register
      </v-btn>

      <v-spacer></v-spacer>

      <v-btn
        :icon="show ? 'mdi-chevron-up' : 'mdi-chevron-down'"
        @click="show = !show"
      ></v-btn>
    </v-card-actions>

    <v-expand-transition>
      <div v-show="show">
        <v-divider></v-divider>

        <v-card-text>
          This is the description of the course!
          <v-spacer></v-spacer>
          Credits: 3
        </v-card-text>
      </div>
    </v-expand-transition>
  </v-card>
</div>
</template>

<style>
#courseView{
  width: 75%;
}
.title{
  text-align: center;
  padding: 1em;
}
</style>

<script>
  export default {
    data: () => ({
      items: [
        {
          title: 'Course #1',
          value: 1,
        },
        {
          title: 'Course #2',
          value: 2,
        },
        {
          title: 'Course #3',
          value: 3,
        },
      ],
      show: false
    }),
  }
</script>