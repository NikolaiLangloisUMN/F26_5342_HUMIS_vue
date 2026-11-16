<script setup>

import InnerLayout from "@/views/layouts/inner-layout.vue";
import TwoColumnLayout from "@/views/layouts/TwoColumnLayout.vue";
import FacultyHeads from "@/components/FacultyHeads.vue";
</script>

<template>

  <inner-layout>

    <p>Faculty page</p>

    <two-column-layout>
      <template #left-top>
        Faculty and staff content for the top of the left column
      </template>

      <template #left-bottom>
        this should be that list of the department heads
        <faculty-heads/>
      </template>

      <template #right-side>
        This could be all the content for Mr. Basso
      </template>
    </two-column-layout>

  </inner-layout>

</template>

<style scoped>

</style>