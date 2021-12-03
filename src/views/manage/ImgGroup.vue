<template>
  <div class="app-container">
    <el-form :inline="true" :model="searchForm" size="mini">
      <el-form-item>
        <el-button type="primary" size="mini" @click="showForm(false,null)">新增</el-button>
      </el-form-item>
      <el-form-item label="分组名">
        <el-input v-model="searchForm.groupName" placeholder="请输入分组名"/>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSearch">查询</el-button>
      </el-form-item>
    </el-form>
    <el-table :data="tableData" stripe style="width: 100%" border size="mini">
      <el-table-column prop="groupName" label="分组名" align="center"/>
      <el-table-column prop="createTime" label="创建时间" align="center"/>
      <el-table-column label="操作" align="center">
        <template slot-scope="scope">
          <el-button type="text" size="small" @click="showForm(true,scope.row)">编辑</el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-pagination background style="margin-top: 20px"
                   @size-change="handleSizeChange" @current-change="handleCurrentChange"
                   :current-page="pageConfig.pageNo" :page-size="pageConfig.pageSize"
                   :page-sizes="[10, 30, 50, 100]" :total="pageConfig.total"
                   layout="total, sizes, prev, pager, next, jumper">
    </el-pagination>
    <ImgGroupForm ref="imgGroupForm" @refreshTable="loadData"/>
  </div>
</template>

<script>
import {pageListApi} from "@/api/ImgGroupApi";
import ImgGroupForm from "@/views/manage/form/ImgGroupForm";

export default {
  name: "ImgGroup",
  components: {ImgGroupForm},
  data() {
    return {
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
      this.$refs.imgGroupForm.opened(isEdit, rowData);
    }
  }
}
</script>

<style scoped>

</style>
