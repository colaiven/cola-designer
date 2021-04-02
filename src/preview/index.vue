<template>
  <div>
    <div v-for="(item,index) in pageComponents" :key="item+index"
         style="position: absolute;overflow: auto"
         :style="{width:item.cptWidth+'px',height:item.cptHeight+'px',
                  top:item.cptY+'px',left:item.cptX+'px',zIndex:item.cptZ}">
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
      pageComponents:[]
    }
  },
  created() {
    this.loadCacheData();
  },
  methods:{
    loadCacheData(){
      this.pageComponents = JSON.parse(localStorage.getItem('cptCache'));
    }
  }
}
</script>

<style scoped>

</style>
