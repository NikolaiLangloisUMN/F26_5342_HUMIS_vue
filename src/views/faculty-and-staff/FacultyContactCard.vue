<script setup>
const props = defineProps({
  theirInfo: {
    type: Object,
    required: true
  }
})
</script>

<template>

  <p class="faculty-contact-card">
    <span class="name">{{ props.theirInfo.fName }} {{ props.theirInfo.lName }}</span>
    <span class="title">{{ props.theirInfo.title }}</span>
    <span class="address">{{ props.theirInfo.address }}</span>
    <a :href="'tel: ' + props.theirInfo.phoneNumber" v-text="props.theirInfo.phoneNumber"/>
    <a :href="'mailto: ' + props.theirInfo.email" v-text="props.theirInfo.email"/>
  </p>

</template>

<style scoped>
p.faculty-contact-card {
  font-size: 0.75rem;

  span {
    display: block;

    &.name {
      font-weight: bold;
    }

    &.title {
      font-style: italic;
    }
  }

  a {
    display: block;
    color: black;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
}
</style>