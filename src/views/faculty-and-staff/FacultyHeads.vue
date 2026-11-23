<script setup>
import FacultyContactCard from "@/views/faculty-and-staff/FacultyContactCard.vue";

const ericH = { /* Javascript Object */
  first_name: 'Eric',
  last_name: 'Hinderaker',
  title: 'Department Chair',
  address: '308 Carlson Hall',
  phoneNumber: '581-5685',
  email: 'ehinderaker@history.utah.edu'
}

const aBiesinger = {
  first_name: 'Amanda',
  last_name: 'Biesinger',
  title: 'Undergraduate Advisor',
  address: '211 Carlson Hall',
  phoneNumber: '581-6420',
  email: 'amanda.biesinger@utah.edu',
}

const rHorn = {
  first_name: 'Rebecca',
  last_name: 'Horn',
  title: 'Associate Chair',
  address: '211 Carlson Hall',
  phoneNumber: '581-5294',
  email: 'rebecca.horn@history.utah.edu',
}

const lAdams = {
  first_name: 'Lindsay',
  last_name: 'Adams',
  title: 'Graduate Director',
  address: '211 Carlson Hall',
  phoneNumber: '581-8592',
  email: 'winthrop.adams@utah.edu',
}

const faculty = [ericH, aBiesinger, rHorn, lAdams]
</script>

<template>

  <faculty-contact-card v-for="somebody in faculty" :their-info="somebody"/>

</template>

<style scoped>

</style>