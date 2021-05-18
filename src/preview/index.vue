<template>
  <div v-if="containerScale">
    <div v-for="(item,index) in designCache.comments" :key="item+index"
         style="position: absolute;overflow: auto"
         :style="{width:Math.round(containerScale * item.cptWidth)+'px',height:Math.round(containerScale * item.cptHeight)+'px',
                  top:Math.round(containerScale*item.cptY)+'px',left:Math.round(containerScale*item.cptX)+'px',zIndex:item.cptZ}">
      <comment :is="item.cptName" :width="item.cptWidth" :height="item.cptHeight"
               :option="item.option"></comment>
    </div>
  </div>
</template>

<script>
export default {
  name: "preview_index",
  data(){
    return{
      designCache:{},
      containerScale:undefined
    }
  },
  created() {
    this.loadCacheData();
  },
  methods:{
    loadCacheData(){
      let designCache = JSON.parse(localStorage.getItem('designCache'));
      this.containerScale = document.documentElement.clientWidth/(1024 * designCache.designScale)
      this.designCache = designCache;
    }
  }
}
</script>

<style scoped>

</style>
