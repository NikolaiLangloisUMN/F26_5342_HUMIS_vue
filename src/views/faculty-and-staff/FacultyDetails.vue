<script setup>
import {useRoute} from 'vue-router'

const route = useRoute()
</script>

<template>
  <h1>Details for a faculty member:</h1>

  <h3>This is the parameter from my route: {{ route.params.facultyId }}</h3>

</template>

<style scoped>

</style>