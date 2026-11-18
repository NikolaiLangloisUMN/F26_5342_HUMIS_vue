<script setup>

</script>

<template>

  <section class="two-column-layout">

    <section class="left-side">
      <div class="top">

        <slot name="left-top">
          top of left side
        </slot>

      </div>

      <div class="bottom">

        <slot name="left-bottom">
          bottom of left side
        </slot>

      </div>
    </section>

    <section class="right-side">

      <slot name="right-side">
        right side
      </slot>

    </section>

  </section>

</template>

<style scoped>
section.two-column-layout {
  display: flex;
  gap: 10px;
  border: 1px dotted blue;
  min-height: 500px;

  section {
    border: 1px dashed green;

    &.left-side {
      width: 35%;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    }

    &.right-side {
      width: 65%;
    }
  }
}
</style>