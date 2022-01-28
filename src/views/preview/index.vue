<template>
  <div :style="{width:windowWidth+'px',height:conHeight+'px',backgroundColor: designCache.bgColor,
  backgroundImage: designCache.bgImg ? 'url('+fileUrl+'/file/img/'+designCache.bgImg+')':'none'}"
       style="background-size:100% 100%;background-color: #2b3340;overflow: hidden">
    <div style="position:relative;transform-origin:0 0;"
         :style="{width:windowWidth+'px',height:conHeight+'px',transform: 'scale('+containerScale+')'}">
      <transition-group appear name="bounce">
        <div v-for="(item) in designCache.components" :key="item.keyId"
             style="position: absolute;"
             :style="{width:Math.round(item.cptWidth)+'px',
                  height:Math.round(item.cptHeight)+'px',
                  top:Math.round(item.cptY)+'px',
                  left:Math.round(item.cptX)+'px',
                  zIndex:item.cptZ}">

          <comment :is="item.cptName" :width="Math.round(item.cptWidth)"
                   :height="Math.round(item.cptHeight)" @reload="loadCacheData"
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
      this.containerScale = Math.round(this.windowWidth / 1920 * 100) / 100//原始比例1920
      this.conHeight = this.windowWidth /this.designCache.scaleX * this.designCache.scaleY
      if(this.conHeight<this.windowHeight){
        this.conHeight=this.windowHeight
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
