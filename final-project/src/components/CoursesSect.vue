<template>
  <div class="courses">
    <h1 class="title">Course Selection</h1>
    <v-card class="mx-auto" id="courseView">
      <v-list :items="items"></v-list>
    </v-card>
  </div>
  <!-- <v-btn>Add Course</v-btn> -->
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
    }),
  }
</script>