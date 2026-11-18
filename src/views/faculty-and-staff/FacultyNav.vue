<script setup>

</script>

<template>
  <section class="faculty-nav">
    <h4>Faculty &amp; Staff</h4>

    <div class="links">
      <a href="#">New faculty</a>
      <a href="#">Faculty listing</a>
      <a href="#">Staff listing</a>
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
    }
  }
}
</style>