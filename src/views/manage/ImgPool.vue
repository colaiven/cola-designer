<template>
  <div class="app-container">
    <el-form :inline="true" :model="searchForm" size="mini">
      <el-form-item>
        <el-button type="primary" size="mini" @click="showForm(false,null)">上传资源</el-button>
      </el-form-item>
      <el-form-item label="资源名">
        <el-input v-model="searchForm.groupName" placeholder="请输入资源名"/>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSearch">查询</el-button>
      </el-form-item>
    </el-form>
    <el-table :data="tableData" stripe style="width: 100%" border size="mini">
      <el-table-column prop="imgName" label="资源名" align="center"/>
      <el-table-column label="图片" align="center">
        <template slot-scope="scope">
          <el-image style="width: 80px;height: 80px" :src="imgUrl+scope.row.fileId" :preview-src-list="[imgUrl+scope.row.fileId]"></el-image>
        </template>
      </el-table-column>
      <el-table-column prop="groupName" label="分组" align="center"/>
      <el-table-column prop="username" label="创建者" align="center"/>
      <el-table-column prop="createTime" label="创建时间" align="center"/>
      <el-table-column label="操作" align="center">
        <template slot-scope="scope">
          <el-button type="text" size="small" @click="showForm(true,scope.row)">编辑</el-button>
          <el-button type="text" size="small" @click="del(scope.row)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-pagination background style="margin-top: 20px"
                   @size-change="handleSizeChange" @current-change="handleCurrentChange"
                   :current-page="pageConfig.pageNo" :page-size="pageConfig.pageSize"
                   :page-sizes="[10, 30, 50, 100]" :total="pageConfig.total"
                   layout="total, sizes, prev, pager, next, jumper">
    </el-pagination>
    <ImgPoolForm ref="imgPoolForm" @refreshTable="loadData"/>
  </div>
</template>

<script>
import {delApi, pageListApi} from "@/api/ImgPool";
import ImgPoolForm from "@/views/manage/form/ImgPoolForm";
import {fileUrl} from "/env";

export default {
  name: "ImgPool",
  components: {ImgPoolForm},
  data() {
    return {
      imgUrl: fileUrl+'/file/img/',
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
      this.$refs.imgPoolForm.opened(isEdit, rowData);
    },
    del(row){
      this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
        confirmButtonText: '确定', cancelButtonText: '取消', type: 'warning'
      }).then(() => {
        delApi(row.id).then(() => {
          this.$message.success('删除成功')
          this.loadData();
        })
      }).catch(() => {});
    }
  }
}
</script>

<style scoped>

</style>
