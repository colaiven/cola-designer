<template>
  <el-dialog :title="formData.id?'编辑':'添加'" :visible.sync="modelShow">
    <el-form ref="imgGroupForm" :model="formData" label-width="120px" :rules="formRules">
      <el-form-item label="分组名" prop="groupName">
        <el-input v-model="formData.groupName"/>
      </el-form-item>
      <el-form-item>
        <el-button @click="modelShow = false">取 消</el-button>
        <el-button type="primary" @click="submitForm()">确 定</el-button>
      </el-form-item>
    </el-form>
  </el-dialog>
</template>

<script>
import {saveOrUpdateApi} from "@/api/ImgGroupApi";

export default {
  name: "ImgGroupForm",
  data() {
    return {
      formData:{},
      modelShow:false,
      formRules:{
        groupName: [
          { required: true, message: '请输入分组名', trigger: 'blur' },
          { min: 2, max: 90, message: '长度在 3 到 90 个字符', trigger: 'blur' }
        ]
      }
    }
  },
  methods:{
    opened(isEdit,row){
      this.formData = isEdit ? row:{};
      this.modelShow = true;
    },
    submitForm(){
      this.$refs['imgGroupForm'].validate((valid) => {
        if (valid) {
          saveOrUpdateApi(this.formData).then(() => {
            this.modelShow = false
            this.$emit('refreshTable');
          })
        }
      })
    },
  }
}
</script>

<style scoped>

</style>
