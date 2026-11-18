<script setup>

</script>

<template>
  <section class="faculty-nav">
    <h4>Faculty &amp; Staff</h4>

    <div class="links">

      <router-link :to="{ name: 'new-faculty'}">New faculty</router-link>

      <router-link :to="{ name: 'faculty-listing'}">Faculty listing</router-link>

      <router-link :to="{ name: 'staff-listing'}">Staff listing</router-link>

    </div>

  </section>
</template>

<style scoped>
section.faculty-nav {

  div.links {
    display: flex;
    flex-direction: column;
    font-size: 0.75rem;
    gap: 4px;

    a {
      color: var(--black);
      text-decoration: none;

      &:hover {
        text-decoration: underline;
      }

      &.router-link-active {
        font-weight: bold;
      }
    }
  }
}
</style>