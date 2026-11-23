<script setup>
import facultyAndStaffTogether from "@/data/faculty-and-staff-together-data.js"
import FacultyContactCard from "@/views/faculty-and-staff/FacultyContactCard.vue";

const props = defineProps({
  type: {
    type: String,
    required: true,
  }
})
</script>

<template>
  <h5>{{ props.type }} listing</h5>

  <faculty-contact-card
      v-for="person in facultyAndStaffTogether.filter(item => item.type === props.type)"
      :their-info="person"/>
</template>

<style>
@media screen and (width < 700px) {
  .faculty-contact-card {
    font-size: 1rem !important;
  }
}
</style>