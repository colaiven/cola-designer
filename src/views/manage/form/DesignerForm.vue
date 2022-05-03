<template>
  <el-dialog :title="formData.id?'编辑':'添加'" :visible.sync="modelShow" width="600px">
    <el-form ref="modelForm" :model="formData" label-width="120px" :rules="formRules">
      <el-form-item label="大屏名" prop="groupName">
        <el-input v-model="formData.title"/>
      </el-form-item>
      <el-form-item label="网站描述">
        <el-input type="textarea" v-model="formData.simpleDesc"></el-input>
      </el-form-item>
      <el-form-item label="分辨率X">
        <el-input-number v-model="formData.scaleX" :min="640" :max="10240" style="width: 100%"/>
      </el-form-item>
      <el-form-item label="分辨率Y">
        <el-input-number v-model="formData.scaleY" :min="320" :max="10240" style="width: 100%"/>
      </el-form-item>
      <el-form-item label="访问码">
        <el-input v-model="formData.viewCode" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button @click="modelShow = false">取 消</el-button>
        <el-button type="primary" @click="submitForm()">确 定</el-button>
      </el-form-item>
    </el-form>
  </el-dialog>
</template>

<script>
import {saveOrUpdateApi} from "@/api/DesignerApi";

export default {
  name: "DesignerForm",
  data() {
    return {
      formData:{bgColor:'#2B3340',scaleX:16,scaleY:9},
      modelShow:false,
      formRules:{
        title: [
          { required: true, message: '请输入大屏名', trigger: 'blur' },
          { min: 2, max: 90, message: '长度在 3 到 90 个字符', trigger: 'blur' }
        ]
      },
      scale:'16*9',
    }
  },
  methods:{
    opened(isEdit,row){
      this.formData = isEdit ? row:{bgColor:'#2B3340',scaleX:1920,scaleY:1080};
      this.modelShow = true;
    },
    submitForm(){
      this.$refs['modelForm'].validate((valid) => {
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
