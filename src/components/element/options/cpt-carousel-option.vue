<template>
  <div>
    <el-form label-width="80px" size="mini">
      <el-form-item label="切换触发">
        <el-select v-model="attribute.trigger" placeholder="请选择触发切换方式">
          <el-option label="hover" value="hover"/>
          <el-option label="click" value="click"/>
        </el-select>
      </el-form-item>
      <el-form-item label="图片填充">
        <el-select v-model="attribute.fit" placeholder="请选择图片填充方式">
          <el-option label="fill" value="fill"/>
          <el-option label="contain" value="contain"/>
          <el-option label="cover" value="cover"/>
          <el-option label="none" value="none"/>
          <el-option label="scale-down" value="scale-down"/>
        </el-select>
      </el-form-item>
      <el-form-item label="轮播图片">
        <el-upload :action="fileUrl+'/file/upload?dir=imgPool'"
                   :headers="uploadHeaders"
                   :before-upload="beforeBgImgUpload"
                   :show-file-list="false"
            :on-error="handleError" list-type="picture"
            :on-success="handleAvatarSuccess">
          <el-button size="small" type="primary">点击上传</el-button>
        </el-upload>
      </el-form-item>
      <el-row :gutter="4">
        <el-col :span="12" v-for="(item,index) in attribute.imgUrls" :key="index" class="imgBlock">
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
import {fileUrl} from "/env";
import {getToken} from "@/utils/auth";

export default {
  name: "cpt-carousel-option",
  props: {attribute: Object},
  data(){
    return {
      fileUrl:fileUrl,
      uploadHeaders:{'X-Token':getToken()},
      fileList:[]
    }
  },
  methods: {
    beforeBgImgUpload(file){
      const isIMG = file.type.substr(0,5) === 'image';
      const isLt5M = file.size / 1024 / 1024 < 25;
      if (!isIMG) {
        this.$message.error('上传图片只能是图片格式!');
      }
      if (!isLt5M) {
        this.$message.error('上传图片大小不能超过 25MB!');
      }
      return isIMG && isLt5M;
    },
    handleRemove(index) {
      this.attribute.imgUrls.splice(index, 1);
    },
    handleAvatarSuccess(res) {
      if (res.code !== 1){
        this.$message.error(res.msg)
      }
      this.attribute.imgUrls.push(fileUrl+'/file/img/'+res.data);
    },
    handleError(err, file){
      this.$message.error("图片上传失败，使用本地路径")
      this.attribute.imgUrls.push(file.url);
    }
  }
}
</script>

<style scoped>
.imgBlock{position: relative;height: 100px}
.imgBlock:hover .dleMask{display: block;cursor: pointer}
.dleMask{position: absolute;width:100%;height:100%;top: 0;background: #6667;color: #fff;font-size: 20px;display: none}
</style>
