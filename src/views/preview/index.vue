<template>
  <div :style="{width: windowWidth+'px',height: windowHeight+'px',backgroundColor: designCache.bgColor,
       backgroundImage: designCache.bgImg ? 'url('+fileUrl+'/file/img/'+designCache.bgImg+')':'none'}"
       style="background-size:100% 100%;overflow: auto">
    <div style="width: 100%;position:relative;overflow: hidden;" :style="{height:conHeight+'px'}">
      <transition-group appear name="bounce">
        <div v-for="(item) in designCache.components" :key="item.keyId"
             style="position: absolute;"
             :style="{width:Math.round(containerScale * item.cptWidth)+'px',
                  height:Math.round(containerScale * item.cptHeight)+'px',
                  top:Math.round(containerScale*item.cptY)+'px',
                  left:Math.round(containerScale*item.cptX)+'px',
                  zIndex:item.cptZ}">

          <comment :is="item.cptName" :width="Math.round(containerScale * item.cptWidth)"
                   :height="Math.round(containerScale * item.cptHeight)"
                   :option="item.option"/>
        </div>
      </transition-group>
    </div>

    <el-dialog title="请输入访问码" :visible.sync="authCodeDialogVisible" width="30%" center
               :show-close="false" :close-on-click-modal="false" :close-on-press-escape="false">
      <el-form>
        <el-form-item label="访问码">
          <el-input v-model="viewCode" autocomplete="off"/>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button type="primary" @click="authCode">提 交</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
import {authViewCodeApi, getByIdApi} from "@/api/DesignerApi";
import {fileUrl} from "/env";
import {loadFile} from "@/utils/FileUtil";

export default {
  name: "preview_index",
  data(){
    return{
      fileUrl:fileUrl,
      designCache:{},
      windowWidth: 0,
      windowHeight: 0,
      conHeight: 0,
      containerScale:1,
      authCodeDialogVisible:false,
      viewCode:''
    }
  },
  mounted() {
    const that = this;
    that.loadCacheData();
    window.onresize = () => {
      return (() => {
        that.loadSize()
      })();
    };
  },
  methods:{
    loadCacheData(){
      const path = this.$route.path;
      const that = this;
      const id = this.$route.query.id;
      if (path === '/preview'){
        if (!id){
          let designCache = JSON.parse(localStorage.getItem('designCache'));
          this.loadDesign(designCache,false);
        }else{//演示环境用
          loadFile('/cola-designer/designData/'+id+'.cd').then(text => {
            let designCache = text.data
            this.loadDesign(designCache,false);
          });
        }
      }else if(path === '/view'){
        if (!id){
          this.$message.error('id错');
          return;
        }
        const viewCode = localStorage.getItem('code'+id);//如果已经输入过访问码就带着访问码一起请求
        getByIdApi(id,1, viewCode).then(res => {
          if (res.data === 'NEED_AUTH'){
            that.authCodeDialogVisible = true;
          }else{
            that.loadDesign(res.data, true);
          }
        })
      }
    },
    loadDesign(design, componentPares){
      if (componentPares){
        design.components = JSON.parse(design.components);
      }
      document.title = design.title;
      this.designCache = design;
      this.loadSize();
    },
    authCode(){
      if (!this.viewCode){
        this.$message.error('请输入访问码');
        return;
      }
      const id = this.$route.query.id;
      authViewCodeApi({id: id, viewCode:this.viewCode}).then(res => {
        this.authCodeDialogVisible = false;
        localStorage.setItem('code'+id, res.data.viewCode);//缓存访问码避免二次刷新需要再次输入
        this.loadDesign(res.data,true)
      })
    },
    loadSize(){
      this.windowWidth = document.documentElement.clientWidth;
      this.windowHeight = document.documentElement.clientHeight;
      if(this.designCache){
        this.conHeight = Math.round(this.windowWidth / this.designCache.scaleX * this.designCache.scaleY);
        this.containerScale = this.windowWidth / 1024
      }else{
        this.conHeight = this.windowHeight;
      }
    }
  }
}
</script>

<style scoped>
.bounce-enter-active{
  transition: all 1s;
  /*animation: bounce-in 1s;*/
}
.bounce-enter{
  opacity: 0;
  transform: scale(.5);
}
@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  25% {
    transform: scale(0.5);
  }
  50% {
    transform: scale(1);
  }
  75% {
    transform: scale(1.5);
  }
  100% {
    transform: scale(1);
  }
}
</style>
