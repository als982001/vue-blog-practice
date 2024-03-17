<template>
  <div v-if="$route.params.id < blog.length">
    <h5>{{ blog[$route.params.id].title }}</h5>
    <span>{{ blog[$route.params.id].date }}</span>
    <p>{{ blog[$route.params.id].content }}</p>
  </div>
  <div v-else>
    <h1>없음</h1>
  </div>
</template>

<script>
export default {
  name: "DetailComponent",
  props: {
    blog: Array,
  },
};
</script>

<style></style>
