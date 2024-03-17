<template>
  <div v-for="(item, index) in blog" :key="index">
    <h5>{{ item.title }}</h5>
    <span>{{ item.date }}</span>
  </div>
</template>

<script>
export default {
  name: "ListComponent",
  props: {
    blog: Array,
  },
};
</script>

<style></style>
