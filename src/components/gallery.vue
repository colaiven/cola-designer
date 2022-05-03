<template>
  <div>
    <el-dialog title="图片素材库" :visible.sync="modelShow" width="75%" :close-on-click-modal="false" append-to-body>
      <el-tabs v-model="activeGroup" @tab-click="tabClick" type="border-card" @tab-remove="removeTab">
        <el-tab-pane v-for="item in groupPanes" :key="item.id"
                     :label="item.groupName" :name="item.id" ><!-- closable-->
          <el-row :gutter="6">
            <el-col :span="4" v-for="item2 in imgData" :key="item2.id" @click.native="checkImg(item2)">
              <div style="height: 150px;" :style="checkedItem.id === item2.id ? 'border: 2px solid #409eff;':'border: 1px solid #ccc;'">
                <el-image style="width: 100%; height: 100%" :src="imgUrl + item2.filePath" fit="fill"/>
              </div>
              <div style="height: 20px;margin-bottom: 6px;overflow: hidden">{{ item2.imgName }}</div>
            </el-col>
<!--            <el-col :span="4">
              <div style="border: 1px solid #ccc;height: 150px;
                  text-align: center;font-size: 90px;line-height: 140px;cursor: pointer;color: #aaa">
                <i class="el-icon-plus"></i>
              </div>
            </el-col>-->
          </el-row>
          <el-pagination style="margin-top: 16px;" background
                         @size-change="handleSizeChange" @current-change="handleCurrentChange"
                         :current-page="pageConfig.pageNo" :page-size="pageConfig.pageSize"
                         :page-sizes="[12, 24, 48]"
                         layout="total, sizes, prev, pager, next, jumper"
                         :total="pageConfig.total">
          </el-pagination>
        </el-tab-pane>
<!--        <el-tab-pane label="新增分组" name="add">
          <el-form :inline="true" :model="formGroup" class="demo-form-inline" size="small">
            <el-form-item label="分组名称">
              <el-input v-model="formGroup.groupName" placeholder="分组名称"/>
            </el-form-item>
            <el-form-item>
              <el-button type="primary">保 存</el-button>
            </el-form-item>
          </el-form>
        </el-tab-pane>-->
      </el-tabs>

      <span slot="footer" class="dialog-footer">
        <el-button @click="modelShow = false" size="small">取 消</el-button>
        <el-button type="primary" @click="confirmCheck" size="small">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
import {listGroupAllApi} from "@/api/ImgGroupApi";
import {pageListApi} from "@/api/ImgPool";
import {fileUrl} from "/env";

export default {
  name: "gallery",
  data(){
    return {
      imgUrl: fileUrl,
      groupPanes:[],
      imgData:[],
      modelShow:false,
      activeGroup:'',
      pageConfig:{
        groupId:'',
        pageNo:1,
        pageSize:10,
        total:0
      },
      checkedItem:{},
      formGroup:{name:''},
    }
  },
  methods:{
    opened(){
      listGroupAllApi().then(res => {
        this.groupPanes = res.data;
        this.activeGroup = this.groupPanes[0].id
        this.loadData();
      })
      this.modelShow = true
    },
    loadData(){
      this.pageConfig.groupId = this.activeGroup;
      pageListApi(this.pageConfig).then(res => {
        this.imgData = res.data.records;
        this.pageConfig.total = res.data.total
      })
    },
    confirmCheck(){
      if (!this.checkedItem || !this.checkedItem.id){
        this.$message.error('请选择图片')
      }else {
        this.$emit('confirmCheck', this.checkedItem.filePath);
        this.modelShow = false
      }
    },
    checkImg(item){
      this.checkedItem = item
    },
    removeTab(targetName) {//询问处理、当前选中项处理、刷新处理
      this.groupPanes = this.groupPanes.filter(tab => tab.id !== targetName);
      this.activeGroup = this.groupPanes[0].id
    },
    tabClick() {
      this.pageConfig.pageNo = 1;
      this.loadData();
    },
    handleSizeChange(val) {
      this.pageConfig.pageSize = val;
      this.loadData();
    },
    handleCurrentChange(val) {
      this.pageConfig.pageNo = val;
      this.loadData();
    },
  }
}
</script>

<style scoped>
/*.el-dialog__header,.el-dialog__body {
  background: #222;
}
.el-dialog__footer {
  background-color: #222 !important;

}*/
</style>
