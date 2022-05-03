<template>
  <el-dialog :title="formData.id?'编辑':'添加'" :visible.sync="modelShow">
    <el-form ref="modelForm" :model="formData" label-width="120px" :rules="formRules">
      <el-form-item label="分组" prop="groupId">
        <el-select v-model="formData.groupId" placeholder="选择分组" style="width: 100%">
          <el-option v-for="item in groups" :key="item.id"
                     :label="item.groupName" :value="item.id"/>
        </el-select>
      </el-form-item>
      <el-form-item label="文件">
        <el-upload
          :action="baseUrl+'/file/upload?dir=imgPool'"
          :show-file-list="false"
          :headers="uploadHeaders"
          list-type="picture-card"
          :on-success="handleAvatarSuccess"
          :before-upload="beforeAvatarUpload">
          <el-image v-if="filePath" style="width: 100%;height: 100%" :src="fileUrl+filePath"/>
          <i v-else class="el-icon-plus avatar-uploader-icon"></i>
        </el-upload>
      </el-form-item>
      <el-form-item label="资源名称">
        <el-input v-model="formData.imgName" placeholder="请输入资源名称"/>
      </el-form-item>
      <el-form-item>
        <el-button @click="modelShow = false">取 消</el-button>
        <el-button type="primary" @click="submitForm()">确 定</el-button>
      </el-form-item>
    </el-form>
  </el-dialog>
</template>

<script>
import {saveOrUpdateApi} from "@/api/ImgPool";
import {listGroupAllApi} from "@/api/ImgGroupApi";
import {baseUrl,fileUrl} from "/env";
import {getToken} from "@/utils/auth";

export default {
  name: "ImgPoolForm",
  data() {
    return {
      uploadHeaders:{'X-Token':getToken()},
      fileUrl:fileUrl,
      baseUrl,
      filePath:'',
      formData:{},
      modelShow:false,
      formRules:{
        groupId: [
          { required: true, message: '请选择分组', trigger: 'blur' }
        ]
      },
      groups:[]
    }
  },
  methods:{
    opened(isEdit,row){
      listGroupAllApi().then(res => {
        this.groups = res.data
      })
      this.formData = {};
      this.filePath = '';
      if (isEdit){
        this.formData = row;
        this.filePath = this.formData.filePath
      }
      this.modelShow = true;
    },
    submitForm(){
      this.$refs['modelForm'].validate((valid) => {
        if (valid) {
          if (!this.filePath){
            this.$message.error('请上传图片')
          }
          this.formData.filePath = this.filePath
          saveOrUpdateApi(this.formData).then(() => {
            this.modelShow = false
            this.$emit('refreshTable');
          })
        }
      })
    },
    handleAvatarSuccess(res,file) {
      if (res.code !== 1){
        this.$message.error(res.msg)
      }
      this.filePath = res.data;
      this.formData.imgName = file.name.substr(0,file.name.lastIndexOf('.'));
    },
    beforeAvatarUpload(file) {
      const isIMG = file.type.substr(0,5) === 'image';
      const isLt2M = file.size / 1024 / 1024 < 10;
      if (!isIMG) {
        this.$message.error('上传资源只能是图片格式!');
      }
      if (!isIMG) {
        this.$message.error('上传图片大小不能超过 10MB!');
      }
      return isIMG && isLt2M;
    }
  }
}
</script>

<style scoped>

</style>
