<template>
  <div id="app">
    <Designer/>
  </div>
</template>

<script>
import Designer from './designer/index.vue'

export default {
  name: 'App',
  components: {Designer}
}
</script>

<style>
* {margin: 0;padding: 0;}
*::-webkit-scrollbar {width: 5px;height: 5px;}
*::-webkit-scrollbar-thumb {border-radius: 6px;background: #66b1ff;}
*::-webkit-scrollbar-track {border-radius: 6px;background: #ddd;}
</style>
