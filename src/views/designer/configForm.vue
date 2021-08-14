<template>
  <div>
    <el-dialog title="网站设置" :visible.sync="dialogVisible" :close-on-click-modal="false" width="500px" center :before-close="close">
      <el-form :model="formData" label-width="100px" size="small">
        <el-form-item label="网站标题">
          <el-input v-model="formData.title" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="网站描述">
          <el-input type="textarea" v-model="formData.simpleDesc"></el-input>
        </el-form-item>
        <el-form-item label="背景颜色">
          <el-color-picker v-model="formData.bgColor" show-alpha/>
        </el-form-item>
        <el-form-item label="背景图片">
          <el-upload
              class="avatar-uploader"
              action="https://jsonplaceholder.typicode.com/posts/"
              :show-file-list="false"
              list-type="picture-card"
              :on-success="handleAvatarSuccess"
              :before-upload="beforeAvatarUpload">
            <img v-if="formData.bgImg" :src="formData.bgImg" class="avatar">
            <i v-else class="el-icon-plus avatar-uploader-icon"></i>
          </el-upload>
        </el-form-item>
        <el-form-item label="个性链接">
          <el-input v-model="formData.id" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="访问码">
          <el-input v-model="formData.viewCode" autocomplete="off"></el-input>
        </el-form-item>
      </el-form>
      <div style="text-align: center;margin-top: 10px;">
        <el-button @click="close" size="small">取 消</el-button>
        <el-button style="background: #2B3340;color: #eee" @click="save" size="small">保 存</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
export default {
  name: "configForm",
  props:{
    formData:Object
  },
  data(){
    return {
      dialogVisible:false
    }
  },
  methods:{
    opened(){
      this.dialogVisible = true;
    },
    close(){
      this.$emit('cancel');
      this.dialogVisible = false
    },
    save(){
      this.$emit('saveConfigForm',JSON.parse(JSON.stringify(this.formData)));
      this.dialogVisible = false
    },
    handleAvatarSuccess(){

    },
    beforeAvatarUpload(){

    }
  }
}
</script>

<style scoped>

</style>
