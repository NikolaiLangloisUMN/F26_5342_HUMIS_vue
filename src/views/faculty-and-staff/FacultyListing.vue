<script setup>
import facultyAndStaffTogether from "@/data/faculty-and-staff-together-data.js"
import FacultyContactCard from "@/views/faculty-and-staff/FacultyContactCard.vue";
</script>

<template>
  <h5>Faculty listing</h5>

  <faculty-contact-card
      v-for="facultyMember in facultyAndStaffTogether.filter(item => item.type === 'faculty')"
      :their-info="facultyMember"/>

</template>

<style scoped>

</style>