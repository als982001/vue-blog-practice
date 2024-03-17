<template>
  <div>
    <span>{{ item.author ?? "작가 모름" }}</span>
  </div>
</template>

<script>
export default {
  name: "AuthorComponent",
  props: {
    item: Object,
  },
  mounted() {
    console.log(this.item);
  },
};
</script>

<stlye></stlye>
