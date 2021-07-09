<template>
  <div>
    <el-dialog title="网站设置" :visible.sync="dialogVisible" :close-on-click-modal="false" width="500px" center>
      <el-form :model="form" label-width="100px" size="small">
        <el-form-item label="网站标题">
          <el-input v-model="form.title" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="网站描述">
          <el-input type="textarea" v-model="form.simpleDesc"></el-input>
        </el-form-item>
        <el-form-item label="背景颜色">
          <el-color-picker v-model="form.bgColor" show-alpha/>
        </el-form-item>
        <el-form-item label="背景图片">
          <el-upload
              class="avatar-uploader"
              action="https://jsonplaceholder.typicode.com/posts/"
              :show-file-list="false"
              list-type="picture-card"
              :on-success="handleAvatarSuccess"
              :before-upload="beforeAvatarUpload">
            <img v-if="form.bgImg" :src="form.bgImg" class="avatar">
            <i v-else class="el-icon-plus avatar-uploader-icon"></i>
          </el-upload>
        </el-form-item>
        <el-form-item label="个性链接">
          <el-input v-model="form.id" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="访问码">
          <el-input v-model="form.viewCode" autocomplete="off"></el-input>
        </el-form-item>
      </el-form>
      <div style="text-align: center;margin-top: 10px;">
        <el-button @click="dialogVisible = false" size="small">取 消</el-button>
        <el-button style="background: #2B3340;color: #eee" @click="dialogVisible = false" size="small">保 存</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
export default {
  name: "configForm",
  data(){
    return {
      form:{title:'',simpleDesc:'',bgColor:'#2B3340',bgImg:'',viewCode:''},
      dialogVisible:false
    }
  },
  methods:{
    opened(){
      this.dialogVisible = true;
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
