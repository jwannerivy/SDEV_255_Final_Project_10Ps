<template>
  <div id="body" class="col-12">
    <div class="card textcenter mt-3">
      <div class="card-header bg-primary text-white" @click="hidepanel=!hidepanel">
       Add New Course:
      </div>

      <div class="card-body" :class="{ 'd-none': hidepanel}">
        <form id="aptForm" @submit.prevent="requestAdd">
          <div class="form-group form-row">
            <label class="col-md-2 col-form-label text-md-right" for="courseName">Course Name</label>
            <div class="col-md-10">
              <input
                type="text"
                class="form-control"
                name="courseName"
                id="courseName"
                placeholder="Course Name"
                v-model="formData.courseName"
              >
            </div>
          </div>

          <div class="form-group form-row">
            <label class="col-md-2 col-form-label text-md-right" for="courseDesc">Course Description</label>
            <div class="col-md-10">
              <input
                type="text"
                class="form-control"
                id="courseDesc"
                placeholder="Course Description"
                v-model="formData.courseDesc"
              >
            </div>
          </div>

          <div class="form-group form-row">
            <label class="col-md-2 col-form-label text-md-right" for="courseSubject">Course Subject</label>
            <div class="col-md-10">
              <input
                type="text"
                class="form-control"
                id="courseSubject"
                placeholder="Course Subject"
                v-model="formData.courseSubject"
              >
            </div>
          </div>

          <div class="form-group form-row">
            <label class="col-md-2 col-form-label text-md-right" for="numOfCredits">Number of Credits</label>
            <div class="col-md-10">
              <input
                type="text"
                class="form-control"
                id="numOfCredits"
                placeholder="Number of Credits"
                v-model="formData.numOfCredits"
              >
            </div>
          </div>

             
          <div class="form-group form-row mb-0">
            <div class="offset-md-2 col-md-10">
              <button type="submit" class="addCourse">Add Course</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>

</template>
<script>
export default {
  data() {
    return {
      formData: [],
      hidepanel: true
    };
  },
  components: {
   },
  methods: {
    requestAdd: function() {
      this.formData = {
        title: this.formData.courseName,
        description: this.formData.courseDesc,
        subject: this.formData.courseSubject,
        credits: this.formData.numOfCredits
      };
      this.$emit("add", this.formData);
      this.formData = [];
      this.hidepanel = true;
    }
  }
};
</script>


<style scoped>
.card-header {
  cursor: pointer;
}
#body{
    background-color: blue;
    text-align: center;
}
.addCourse{
    background-color: white;
    color: blue;
}
</style>