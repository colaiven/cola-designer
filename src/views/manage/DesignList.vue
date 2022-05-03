<template>
  <div class="app-container">
    <el-form :inline="true" :model="searchForm" size="mini">
      <el-form-item>
        <el-button type="primary" size="mini" @click="showForm(false,null)">新增</el-button>
      </el-form-item>
      <el-form-item label="大屏名称">
        <el-input v-model="searchForm.title" placeholder="请输入大屏名称"/>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSearch">查询</el-button>
      </el-form-item>
    </el-form>
    <el-row :gutter="24">
      <el-col :span="6" v-for="item in tableData" :key="item.id">
        <div class="designItem" :style="{backgroundImage: item.designImgPath ? 'url('+imgUrl+item.designImgPath+')':'none'}">
          <div style="text-indent: 1em;position: absolute;">{{item.title}}</div>
          <div class="editMask">
            <div style="text-align: center;line-height: 45px;">
              <el-button type="primary" size="mini" icon="el-icon-edit-outline" @click="toDesign(item)">设计</el-button>
            </div>
            <div style="text-align: center;line-height: 45px;">
              <el-button type="primary" size="mini" icon="el-icon-view" @click="toView(item)">访问</el-button>
            </div>
            <div style="text-align: center;line-height: 45px;">
              <el-button type="primary" size="mini" icon="el-icon-share" @click="toShare(item)">分享</el-button>
            </div>
            <div style="text-align: center;line-height: 45px;">
              <el-button type="primary" size="mini" icon="el-icon-delete" @click="deleteItem(item)">删除</el-button>
            </div>
          </div>
        </div>
      </el-col>
    </el-row>
    <el-pagination background style="margin-top: 20px"
                   @size-change="handleSizeChange" @current-change="handleCurrentChange"
                   :current-page="pageConfig.pageNo" :page-size="pageConfig.pageSize"
                   :page-sizes="[10, 30, 50, 100]" :total="pageConfig.total"
                   layout="total, sizes, prev, pager, next, jumper">
    </el-pagination>
    <DesignerForm ref="designerForm" @refreshTable="loadData"/>
  </div>
</template>

<script>
import {pageListApi, deleteApi} from "@/api/DesignerApi";
import {fileUrl} from '/env'
import DesignerForm from "@/views/manage/form/DesignerForm";

export default {
  name: "DesignList",
  components: {DesignerForm},
  data() {
    return {
      imgUrl: fileUrl,
      searchForm:{groupName:""},
      pageConfig:{
        pageNo:1,
        pageSize:10,
        total:0
      },
      tableData:[]
    }
  },
  created() {
    this.onSearch();
  },
  methods:{
    toView(item){
      window.open( '/#/view?id='+item.id);
    },
    toDesign(item){
      window.open('/#/design?id='+item.id);
    },
    deleteItem(item){
      this.$confirm('此操作将永久删除该数据, 是否继续?', '提示', {
        confirmButtonText: '确定', cancelButtonText: '取消', type: 'warning'
      }).then(() => {
        deleteApi(item.id).then(() => {
          this.$message.success('删除成功');
          this.loadData();
        })
      }).catch(() => {});
    },
    toShare(item){
      let text = window.location.host+'/#/view?id='+item.id
      this.$alert(text, '分享链接').catch(() => {});
    },
    onSearch(){
      this.pageConfig.pageNo = 1;
      this.pageConfig.pageSize = 10;
      this.loadData();
    },
    loadData(){
      pageListApi(Object.assign(this.searchForm,this.pageConfig)).then(res => {
        this.tableData = res.data.records;
        this.pageConfig.total = res.data.total
      })
    },
    handleSizeChange(val) {
      this.pageConfig.pageSize = val;
      this.loadData();
    },
    handleCurrentChange(val) {
      this.pageConfig.pageNo = val;
      this.loadData();
    },
    showForm(isEdit,row){
      let rowData = {}
      if(isEdit){
        rowData = JSON.parse(JSON.stringify(row))
      }
      this.$refs.designerForm.opened(isEdit, rowData);
    }
  }
}
</script>

<style scoped>
.editMask{width: 100%;height: 100%;position:absolute;display:none; background-color: rgba(0,0,0,.6)}
.designItem{height: 240px;position: relative;background-color: #2b3340;color: #eee;line-height: 30px;background-size: cover}
.designItem:hover .editMask{display:block}
</style>
