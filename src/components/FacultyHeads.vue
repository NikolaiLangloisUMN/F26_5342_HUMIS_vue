<script setup>
import FacultyContactCard from "@/components/FacultyContactCard.vue";

const ericH = { /* Javascript Object */
  fName: 'Eric',
  lName: 'Hinderaker',
  title: 'Department Chair',
  address: '308 Carlson Hall',
  phoneNumber: '581-5685',
  email: 'ehinderaker@history.utah.edu'
}

const aBiesinger = {
  fName: 'Amanda',
  lName: 'Biesinger',
  title: 'Undergraduate Advisor',
  address: '211 Carlson Hall',
  phoneNumber: '581-6420',
  email: 'amanda.biesinger@utah.edu',
}

const rHorn = {
  fName: 'Rebecca',
  lName: 'Horn',
  title: 'Associate Chair',
  address: '211 Carlson Hall',
  phoneNumber: '581-5294',
  email: 'rebecca.horn@history.utah.edu',
}

const lAdams = {
  fName: 'Lindsay',
  lName: 'Adams',
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