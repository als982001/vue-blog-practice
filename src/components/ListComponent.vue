<template>
  <div v-for="(item, index) in blog" :key="index">
    <h5 @click="$router.push(`/detail/${item.number}`)">{{ item.title }}</h5>
    <span>{{ item.date }}</span>
  </div>
</template>

<script>
export default {
  name: "ListComponent",
  props: {
    blog: Array,
  },
  mounted() {
    console.log(this.blog);
  },
};
</script>

<style></style>
