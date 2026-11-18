<script setup>

import InnerLayout from "@/views/layouts/inner-layout.vue";
import TwoColumnLayout from "@/views/layouts/TwoColumnLayout.vue";
import FacultyHeads from "@/views/faculty-and-staff/FacultyHeads.vue";
import FacultyNav from "@/views/faculty-and-staff/FacultyNav.vue";
</script>

<template>

  <inner-layout>

    <two-column-layout>
      <template #left-top>
        <faculty-nav/>
      </template>

      <template #left-bottom>
        <faculty-heads/>
      </template>

      <template #right-side>
        <router-view/>
      </template>
    </two-column-layout>

  </inner-layout>

</template>

<style scoped>

</style>