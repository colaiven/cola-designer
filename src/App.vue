<template>
  <div id="app" style="overflow-x: hidden">
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App',
}
</script>

<style>
html, body ,#app{ height: 100%;}
* {margin: 0;padding: 0;}
.formItemDiv{width: 100%;height: 30px;border-radius:4px;background-color: #fff;
  text-indent: 1em;font-size: 13px;cursor: pointer;color: #666}
*::-webkit-scrollbar {width: 4px;height: 4px;}
*::-webkit-scrollbar-thumb {border-radius: 4px;background: #5E708D;}
*::-webkit-scrollbar-track {border-radius: 4px;background: #ddd;}
</style>
