<template>
  <div id="page-wrap">
    <coursesGrid :courses="courses" />
    <add-course @add="addCourse"/>
    <router-link to="/createcourse">
      <v-btn id="createBtn" text>Add New Course</v-btn>
    </router-link>
  </div>
</template>

<script>
import { courses } from '../test-data';
import CoursesGrid from '../components/CoursesGrid.vue';
import CreateCourse from '../views/CreateCourse.vue';
import _ from "lodash";


export default {
  name: 'coursesPage',
  components: {
    CoursesGrid,
    CreateCourse,
},
  data() {
    return {
      courses,
    };
  },
  mounted() {

  },
  methods: {
    addCourse: function (apt) {
      apt.aptId = this.aptIndex;
      this.aptIndex++;
      this.courses.push(apt);
    },
    removeItem: function (apt) {
      this.courses = _.without(this.courses, apt);
    },
    editItem: function (id, field, text) {
      const aptIndex = _.findIndex(this.courses, {
        aptId: id
      });
      this.courses[aptIndex][field] = text;
    }
  }
};
</script>

 <style>
 #createBtn {
   background-color: blue;
   color: white;
 }
 </style>