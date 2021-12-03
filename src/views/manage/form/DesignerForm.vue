<template>
  <el-dialog :title="formData.id?'编辑':'添加'" :visible.sync="modelShow">
    <el-form ref="modelForm" :model="formData" label-width="120px" :rules="formRules">
      <el-form-item label="大屏名" prop="groupName">
        <el-input v-model="formData.title"/>
      </el-form-item>
      <el-form-item label="网站描述">
        <el-input type="textarea" v-model="formData.simpleDesc"></el-input>
      </el-form-item>
      <el-form-item label="屏幕比例">
        <el-select v-model="scale" placeholder="请选择" style="width: 100%" @change="scaleChange">
          <el-option v-for="item in scaleOptions" :key="item.value" :label="item.label" :value="item.value"/>
        </el-select>
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
      scaleOptions: [
        { value: '21*9', label: '21 : 9'},
        { value: '18*9', label: '18 : 9'},
        { value: '16*10', label: '16 : 10'},
        { value: '16*9', label: '16 : 9'},
        { value: '5*4', label: '5 : 4'},
        { value: '4*3', label: '4 : 3'},
        { value: '3*2', label: '3 : 2'},
        { value: '1*1', label: '1 : 1'}
      ]
    }
  },
  methods:{
    opened(isEdit,row){
      this.formData = isEdit ? row:{bgColor:'#2B3340',scaleX:16,scaleY:9};
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
    scaleChange(value){//关闭时待优化
      let split = value.split('*');
      this.formData.scaleX = split[0]
      this.formData.scaleY = split[1]
    },
  }
}
</script>

<style scoped>

</style>
