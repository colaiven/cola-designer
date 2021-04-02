<template>
  <div>
    <el-form label-width="80px" size="mini">
      <el-form-item label="切换触发">
        <el-select v-model="option.trigger" placeholder="请选择触发切换方式">
          <el-option label="hover" value="hover"/>
          <el-option label="click" value="click"/>
        </el-select>
      </el-form-item>
      <el-form-item label="轮播图片">
        <el-upload
            action="https://jsonplaceholder.typicode.com/posts/"
            list-type="picture-card"
            :on-preview="handlePictureCardPreview"
            :on-remove="handleRemove"
            :on-success="handleAvatarSuccess">
          <i class="el-icon-plus"></i>
        </el-upload>
        <el-dialog :visible.sync="dialogVisible">
          <img width="100%" :src="dialogImageUrl" alt="">
        </el-dialog>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  name: "cpt-carousel-option",
  props: {option: Object},
  data() {
    return {
      dialogImageUrl: '',
      dialogVisible: false
    }
  },
  methods: {
    handleRemove(file, fileList) {
      console.log(file, fileList);
      let temp = this.option.url.indexOf(file.url)
      if (temp > -1) {
        this.option.url.split(temp, 1);
      }
    },
    handlePictureCardPreview(file) {
      this.dialogImageUrl = file.url;
      this.dialogVisible = true;
    },
    handleAvatarSuccess(res, file) {
      this.option.url = this.option.url ? this.option.url.join(',') : '';
      this.imageUrl = URL.createObjectURL(file.raw);
      if (this.option.url) {
        this.option.url = this.option.url + ',' + this.imageUrl;
      } else {
        this.option.url = this.imageUrl;
      }
      this.option.url = this.option.url.split(',')
    },
  }
}
</script>

<style scoped>

</style>
