<template>
  <iframe loading="lazy" width="100%" height="100%" :src="option.attribute.url"></iframe>
</template>

<script>
export default {
  name: "cpt-iframe",
  props: {
    option: Object
  },
}
</script>

<style scoped>

</style>
