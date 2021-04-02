<template>
  <div>
    <el-row style="position: fixed;width: 260px;height:400px;bottom: 70px;
      left: 20px;border-radius: 6px;border: 1px solid #409eff;z-index: 2000" v-show="activeName===2">
      <el-row v-drag class="cptTitle">选择组件</el-row>
      <el-row style="height: 350px;width: 100%;overflow: auto">
        <el-col :span="8" v-for="(item,index) in listComponent" :key="item.name"
                style="height: 70px;text-align: center;
        border-bottom: 1px solid #409eff;" :style="(index+1)%3!==0?'border-right: 1px solid #409eff':''">
          <div draggable="true" :config="JSON.stringify(item)" @dragstart="dragStart">
            <div style="font-size: 20px;line-height: 40px;"><i :class="item.icon?item.icon:'el-icon-question'"></i>
            </div>
            <div style="color: #666">{{ item.name }}</div>
          </div>
        </el-col>
      </el-row>
    </el-row>
    <el-row style="position: fixed;width: 260px;height:400px;bottom: 70px;
      left: 20px;border-radius: 6px;border: 1px solid #409eff;z-index: 2000" v-show="activeName===1">
      <el-row v-drag class="cptTitle">选择栏目</el-row>
      <el-row>
        <el-card shadow="never" class="card-sty" v-for="(item,index) in columnComponent" :key="index">
          <div draggable="true" :config="JSON.stringify(item)" @dragstart="dragStart">
            <div style="color: #666">{{ item.name }}</div>
          </div>
        </el-card>
      </el-row>
    </el-row>
  </div>
</template>

<script>
import listComponent from '@/components/registerCpt'
import columnComponent from '@/components/columnCpt'

export default {
  name: "componentBar",
  props: {
    activeName: Number, default() {
      return 1
    }
  },
  data() {
    return {
      listComponent,
      columnComponent,
    }
  },
  methods: {
    dragStart(e) {
      let copyDom = e.currentTarget.cloneNode(true);
      this.$emit('dragStart', copyDom);
    },
    handleClick(tab, event) {
      console.log(tab, event);
    },
  },
  directives: {
    drag(el) {
      el.onmousedown = function (e) {
        console.log(e)
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
.cptTitle {
  line-height: 35px;
  text-align: center;
  background: #409eff;
  color: #fff
}

.cptTitle:hover {
  cursor: move
}

.card-sty {
  height: 35px;
  margin: 0 auto;
  line-height: 0;
  margin-top: 7px;
  width: 250px;
}

.ChooseClass {
  color: #666;
}

.noChoose {
  color: #ccc;

}
</style>
