<template>
  <div>
    <el-row style="position: fixed;width: 260px;height:400px;z-index: 2000;
      bottom: 60px;right: 20px;border-radius: 6px;border: 1px solid #66b1ff;">
      <el-row v-drag class="cptTitle">
        <el-col :span="21"><div>组件属性</div></el-col>
        <el-col :span="3">
          <div class="closeItem" @click="closeBar"><i class="el-icon-close"/></div>
        </el-col>
      </el-row>
      <el-tabs v-model="configTab" :stretch="true">
        <el-tab-pane label="基础属性" name="basic">
          <div style="width: 200px;margin:0 auto">
            <el-row style="padding: 10px 6px 0 6px;">
              宽度：<el-input-number :min="20" :max="2000"
                      v-model="currentPosition.cptWidth"  size="small" @change="changeConfig"/>
            </el-row>
            <el-row style="padding: 10px 6px 0 6px;">
              高度：<el-input-number :min="20" :max="1500"
                      v-model="currentPosition.cptHeight" size="small" @change="changeConfig"/>
            </el-row>
            <el-row style="padding: 10px 6px 0 6px;">
              X 轴：<el-input-number :min="-500" :max="2500"
                       v-model="currentPosition.cptX" size="small" @change="changeConfig"/>
            </el-row>
            <el-row style="padding: 10px 6px 0 6px;">
              Y 轴：<el-input-number :min="-500"
                       v-model="currentPosition.cptY" size="small" @change="changeConfig"/>
            </el-row>
            <el-row style="padding: 10px 6px 0 6px;">
              Z 轴：<el-input-number :min="-500" :max="1500"
                       v-model="currentPosition.cptZ" size="small" @change="changeConfig"/>
            </el-row>
          </div>
        </el-tab-pane>
        <el-tab-pane label="自定义属性" name="custom">
          <div v-show="!customOptionShow" style="text-align: center">未注册自定义组件属性</div>
          <div v-if="customOptionShow" class="customForm">
            <comment :is="currentCpt.cptName+'-option'" :option="currentCpt.option"></comment>
          </div>
        </el-tab-pane>
      </el-tabs>
    </el-row>
  </div>
</template>

<script>
import listOptions from '@/components/registerOption'
export default {
  name: "configBar",
  props:{
    currentCpt:Object
  },
  watch:{
    currentCpt(newVal) {
      for (let i = 0; i < listOptions.length; i++) {
        if(newVal.cptName+'-option' === listOptions[i]){
          this.customOptionShow = true;
          return;
        }
      }
      this.$message.warning('组件属性未注册')
      this.customOptionShow = false;
    },
  },
  data(){
    return{
      customOptionShow:false,
      configTab:'basic',
      currentPosition:{
        cptWidth:30,cptHeight:30,cptX:0,cptY:0,cptZ:0
      }
    }
  },
  methods:{
    updateData(currentPosition){
      this.currentPosition = currentPosition
    },
    changeConfig(){
      this.$emit('change',this.currentPosition);
    },
    closeBar(){
      this.$emit('close');
    }
  },
  directives: {
    drag(el) {
      el.onmousedown = function (e) {
        const disX = e.clientX - el.parentNode.offsetLeft;
        const disY = e.clientY - el.parentNode.offsetTop;
        document.onmousemove = function (e) {
          el.parentNode.style.left = e.clientX - disX + 'px';
          el.parentNode.style.top = e.clientY - disY + 'px';
        }
        document.onmouseup = function () {
          document.onmousemove = document.onmouseup = null;
        }
        return false;
      }
    }
  },
}
</script>

<style scoped>
.cptTitle{line-height: 35px; text-align: center;background: #409eff;color: #fff}
.cptTitle:hover{cursor: move}
.closeItem:hover{cursor: pointer;background: #66b1ff}
.customForm{padding: 0 6px 0 4px;height: 300px;overflow: auto}
</style>
