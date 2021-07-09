<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App',
}
</script>

<style>
* {margin: 0;padding: 0;}
.hoverPointer:hover{cursor: pointer}
*::-webkit-scrollbar {width: 5px;height: 5px;}
*::-webkit-scrollbar-thumb {border-radius: 6px;background: #5E708D;}
*::-webkit-scrollbar-track {border-radius: 6px;background: #ddd;}
</style>
