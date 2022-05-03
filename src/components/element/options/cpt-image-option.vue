<template>
  <div>
    <el-form label-width="80px" size="mini">
      <el-form-item label="图库选择">
<!--        <div class="formItemDiv" @click="showGallery">图库选择</div>-->
        <el-image @click="showGallery" style="width: 168px; height: 160px"
                  :src="attribute.url ? fileUrl+attribute.url : require('@/assets/logo.png')" fit="fill"/>
      </el-form-item>
      <el-form-item label="填充方式">
        <el-select v-model="attribute.fit" placeholder="请选择填充方式">
          <el-option label="fill" value="fill"/>
          <el-option label="contain" value="contain"/>
          <el-option label="cover" value="cover"/>
          <el-option label="none" value="none"/>
          <el-option label="scale-down" value="scale-down"/>
        </el-select>
      </el-form-item>
      <el-form-item label="点击放大">
        <el-radio-group v-model="attribute.preview">
          <el-radio :label="true">是</el-radio>
          <el-radio :label="false">否</el-radio>
        </el-radio-group>
      </el-form-item>
    </el-form>
    <gallery ref="gallery" @confirmCheck="confirmCheck"/>
  </div>
</template>

<script>
import Gallery from "@/components/gallery";
import {fileUrl} from "/env";
export default {
  name: "cpt-image-option",
  components: {Gallery},
  props: {attribute: Object},
  data(){
    return {
      fileUrl:fileUrl,
    }
  },
  methods:{
    showGallery(){
      this.$refs.gallery.opened();
    },
    confirmCheck(fileUrl){
      this.attribute.url = fileUrl
    }
  }
}
</script>

<style scoped>
.formItemUpload{width: 120px; height: 120px;background-color: #fff;border-radius: 6px;text-align: center;line-height: 120px;font-size: 40px;color: #aaa}
</style>
