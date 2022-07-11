<template>
  <div class="home">

    <h1 class="title">Home</h1>
    <v-row>
      <v-col cols="12" sm="3" md="4" v-for="item in items" :key="item">
        <v-card class="mx-auto" max-width="344">
          <v-img src="/laptop.png" height="200px" cover></v-img>

          <v-card-title>
            {{item.title}}
          </v-card-title>

          <v-card-subtitle>
            Subject: {{item.subject}}
          </v-card-subtitle>

          <v-card-actions>
            <v-btn color="orange-lighten-2" variant="text">
              Register
            </v-btn>

            <v-spacer></v-spacer>

            <v-btn :icon="item.show ? 'mdi-chevron-up' : 'mdi-chevron-down'" @click="item.show = !item.show"></v-btn>
          </v-card-actions>

          <v-expand-transition>
            <div v-show="item.show">
              <v-divider></v-divider>

              <v-card-text>
                {{item.description}}
                <v-spacer></v-spacer>
                Credits: {{item.credits}}
              </v-card-text>
            </div>
          </v-expand-transition>
        </v-card>
      </v-col>
    </v-row>

  </div>
</template>


<style>
#courseView {
  width: 75%;
}

.title {
  text-align: center;
  padding: 1em;
}
</style>


<script>
export default {
  data: () => ({
    course: [
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
    show: false,
    items: [
      {
        title: "Programming",
        subject: "Programming",
        description: "Intro Programming Class!",
        credits: 3,
        value: 1,
      },
      {
        title: "Math",
        subject: "Math",
        description: "Intro Math Class!",
        credits: 2,
        value: 2
      },
      {
        title: "History",
        subject: "History",
        description: "Intro History Class!",
        credits: 3,
        value: 3
      },
      {
        title:"English",
        subject: "English",
        description: "Intro English Class!",
        credits: 4,
        value:4
      }
    ]
  })
}
</script>