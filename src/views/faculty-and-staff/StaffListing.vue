<script setup>
import facultyAndStaffTogether from "@/data/faculty-and-staff-together-data.js"
import FacultyContactCard from "@/views/faculty-and-staff/FacultyContactCard.vue";
</script>

<template>
  <h5>Staff listing</h5>

  <faculty-contact-card
      v-for="person in facultyAndStaffTogether.filter(item => item.type === 'staff')"
      :their-info="person"/>

</template>

<style scoped>

</style>