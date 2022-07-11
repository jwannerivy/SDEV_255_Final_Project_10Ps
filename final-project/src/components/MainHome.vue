<template>
  <div class="home">
    <v-row>
      <!-- cols="4" sm="3" md="4"  -->
      <v-col v-for="item in items" :key="item">
        <v-card id="courseView" class="mx-auto" max-width="344">
          <v-img src="laptop.png" height="200px" cover></v-img>

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
#courseView{
  margin-top: 2em;
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
        title: "Programming 101",
        subject: "Programming",
        description: "Intro Programming Class! Learn the basics of html,css, and javascript.",
        credits: 3,
        value: 1,
      },
      {
        title: "College Algebra",
        subject: "Mathematics",
        description: "Intro College Algebra Class!",
        credits: 2,
        value: 2
      },
      {
        title: "US History",
        subject: "History",
        description: "Intro History Class!",
        credits: 3,
        value: 3
      },
      {
        title:"English Comp",
        subject: "English",
        description: "Intro English Class!",
        credits: 4,
        value:4
      }
    ]
  })
}
</script>