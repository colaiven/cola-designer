<template>
  <div>
    <el-form label-width="80px" size="mini">
      <el-form-item label="切换触发">
        <el-select v-model="option.trigger" placeholder="请选择触发切换方式">
          <el-option label="hover" value="hover"/>
          <el-option label="click" value="click"/>
        </el-select>
      </el-form-item>
      <el-form-item label="图片填充">
        <el-select v-model="option.fit" placeholder="请选择图片填充方式">
          <el-option label="fill" value="fill"/>
          <el-option label="contain" value="contain"/>
          <el-option label="cover" value="cover"/>
          <el-option label="none" value="none"/>
          <el-option label="scale-down" value="scale-down"/>
        </el-select>
      </el-form-item>
      <el-form-item label="轮播图片">
        <el-upload action="#"
            :before-upload="beforeImgUpload"
            :on-error="handleError" list-type="picture"
            :on-success="handleAvatarSuccess">
          <el-button size="small" type="primary">点击上传</el-button>
        </el-upload>
      </el-form-item>
      <el-row :gutter="4">
        <el-col :span="12" v-for="(item,index) in option.imgUrls" :key="index" class="imgBlock">
          <el-image style="width: 100%; height: 100%" :src="item" fit="cover"/>
          <div class="dleMask">
            <div style="width: 24px;margin: 40px auto;" @click="handleRemove(index)">
              <i class="el-icon-delete"/>
            </div>
          </div>
        </el-col>
      </el-row>
    </el-form>
  </div>
</template>

<script>
export default {
  name: "cpt-carousel-option",
  props: {option: Object},
  data(){
    return {
      fileList:[]
    }
  },
  methods: {
    beforeImgUpload(file) {
      const isImg = file.type.indexOf('image') !== -1;
      const isLt2M = file.size / 1024 / 1024 < 3;
      if (!isImg) {
        this.$message.error('不支持的格式');
      }
      if (!isLt2M) {
        this.$message.error('上传图片大小不能超过 3MB!');
      }
      return isImg && isLt2M;
    },
    handleRemove(index) {
      this.option.imgUrls.splice(index, 1);
    },
    handleAvatarSuccess(res) {
      this.option.imgUrls.push(res.data.url);
    },
    handleError(err, file){
      this.$message.error("图片上传失败，使用本地路径")
      this.option.imgUrls.push(file.url);
    }
  }
}
</script>

<style scoped>
.imgBlock{position: relative;height: 100px}
.imgBlock:hover .dleMask{display: block;cursor: pointer}
.dleMask{position: absolute;width:100%;height:100%;top: 0;background: #6667;color: #fff;font-size: 20px;display: none}
</style>
