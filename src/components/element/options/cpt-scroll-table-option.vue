<template>
  <div>
    <el-form labelWidth="100px">
      <el-form-item label="显示序号">
        <el-switch v-model="attribute.showIndex" active-text="开" inactive-text="关" size="small"/>
      </el-form-item>
      <el-form-item label="表头高度">
        <el-input-number v-model="attribute.theadHeight" size="small" :min="1" :max="800"/>
      </el-form-item>
      <el-form-item label="表头背景">
        <el-color-picker v-model="attribute.theadBg[0]" size="mini"/>
        <el-color-picker v-model="attribute.theadBg[1]" size="mini"/>
      </el-form-item>
      <el-form-item label="表头字色">
        <el-color-picker v-model="attribute.theadColor" size="mini"/>
      </el-form-item>
      <el-form-item label="表头字号">
        <el-input-number v-model="attribute.theadSize" size="small" :min="1" :max="200"/>
      </el-form-item>
      <el-form-item label="表格字色">
        <el-color-picker v-model="attribute.tbodyColor" size="mini"/>
      </el-form-item>
      <el-form-item label="表格字号">
        <el-input-number v-model="attribute.tbodySize" size="small" :min="1" :max="200"/>
      </el-form-item>
      <el-form-item label="奇数行背景">
        <el-color-picker v-model="attribute.oddRowBg" size="mini" show-alpha/>
      </el-form-item>
      <el-form-item label="偶数行背景">
        <el-color-picker v-model="attribute.evenRowBg" size="mini" show-alpha/>
      </el-form-item>
      <el-form-item label="显示行数">
        <el-input-number v-model="attribute.showLine" size="small" :min="1" :max="200"/>
      </el-form-item>

      <div style="text-indent: 1em">
        表格列设置：<el-button size="small" theme="primary" @click="addCol">新增列</el-button>
      </div>
      <el-table style="font-size: 12px;margin-top: 10px;" size="mini" :data="attribute.columns" @row-click="editRow">
        <el-table-column label="标识" prop="colKey"/>
        <el-table-column label="名称" prop="title"/>
        <el-table-column label="宽度" prop="width"/>
      </el-table>
    </el-form>
    <el-dialog :title="currentRow.id?'编辑':'添加'" :visible.sync="modelShow" :append-to-body="true" width="400px">
      <el-form labelWidth="100px" size="mini">
        <el-form-item label="字段标识">
          <el-input v-model="currentRow.colKey"/>
        </el-form-item>
        <el-form-item label="字段名">
          <el-input v-model="currentRow.title"/>
        </el-form-item>
        <el-form-item label="字段类型">
          <el-select v-model="currentRow.type">
            <el-option label="文本" value="text"/>
            <el-option label="图片" value="img"/>
          </el-select>
        </el-form-item>
        <el-form-item label="宽度">
          <el-input-number v-model="currentRow.width" :min="0" :max="1000"/>
        </el-form-item>
        <el-form-item v-show="currentRow.id">
          <el-button theme="danger" @click="delCol">删除此列</el-button>
        </el-form-item>
        <el-button v-show="!currentRow.id" @click="confirmRow">添加</el-button>
      </el-form>
    </el-dialog>
  </div>
</template>

<script>
export default {
  name: "cpt-scroll-table-option",
  props: { attribute: Object },
  data(){
    return {
      columns:[
        {colKey: 'colKey', title: '字段标识'},
        {colKey: 'title', title: '字段名'},
        {colKey: 'width', title: '宽度'}
      ],
      modelShow:false,
      currentIndex:0,
      currentRow:{}
    }
  },
  methods:{
    confirmRow(){
      if (!this.currentRow.colKey || !this.currentRow.title){
        this.$message.error('请输入字段标识或字段名称');
        return;
      }
      const id = new Date().getTime();
      this.attribute.columns.push(Object.assign(this.currentRow,{id: id}));
      this.modelShow = false
    },
    addCol(){
      this.currentRow = {width:0};
      this.modelShow = true
    },
    editRow(row){
      this.currentRow = row;
      this.currentIndex = this.attribute.columns.indexOf(row);
      this.modelShow = true
    },
    delCol(){
      this.attribute.columns.splice(this.currentIndex, 1);
      this.modelShow = false
    }
  }
}
</script>

<style scoped>

</style>
