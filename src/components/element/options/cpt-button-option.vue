<template>
  <div>
    <el-form label-width="80px" size="mini">
      <el-form-item>
        <span slot="label">
          点击跳转
          <el-tooltip effect="light" content="跳转外链请写全路径如：https://www.baidu.com，大屏间跳转请写view?id=大屏ID，如：view?id=6580439c70e1d2c2ff2b98" placement="bottom-end">
            <i class="el-icon-warning" />
          </el-tooltip>
        </span>
        <el-input type="textarea" :rows="3" v-model="attribute.url"></el-input>
      </el-form-item>
      <el-form-item label="背景颜色">
        <el-color-picker v-model="attribute.bgColor" show-alpha/>
      </el-form-item>
      <el-form-item label="文本颜色">
        <el-color-picker v-model="attribute.textColor" show-alpha/>
      </el-form-item>
      <el-form-item label="圆角">
        <el-input-number v-model="attribute.radius" :min="0" :max="500"/>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  name: "cpt-button-option",
  props:{attribute:Object},
  data(){
    return{

    }
  },
}
</script>

<style scoped>

</style>
