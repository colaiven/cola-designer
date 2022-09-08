<template>
  <table :style="{width:width+'px',height:height+'px'}" style="border-collapse: collapse;color: #fff;text-align: center;">
    <colgroup v-if="option.attribute.showIndex" style="width: 60px;"/>
    <colgroup v-for="(item) in option.attribute.columns" :key="item.colKey" :style="{width: item.width>0?item.width+'px':''}"/>
    <thead style="background-color: #001A59;"
           :style="{backgroundImage: 'linear-gradient('+option.attribute.theadBg.toString()+')',
           height: option.attribute.theadHeight+'px',color:option.attribute.theadColor,
           fontSize:option.attribute.theadSize+'px'}">
    <tr>
      <td v-if="option.attribute.showIndex">序号</td>
      <td v-for="(column) in option.attribute.columns" :key="column.colKey" :ref="column.colKey">{{column.title}}</td>
    </tr>
    </thead>
    <tbody is="transition-group" name="bounce" appear>
    <tr style="position: absolute;" v-for="(temp,index) in rollData" :key="temp.rowNum"
        :style="{width: width+'px',height: rowHeight+'px',marginTop: index * rowHeight+'px',
        backgroundColor: temp.rowNum % 2=== 0 ? option.attribute.oddRowBg:option.attribute.evenRowBg,
        color:option.attribute.tbodyColor,fontSize: option.attribute.tbodySize+'px'}">
      <td v-if="option.attribute.showIndex" style="width: 60px;" :style="{lineHeight:rowHeight+'px'}">{{temp.rowNum+1}}</td>
      <td v-for="(column) in option.attribute.columns" :key="column.colKey" :style="{width: colWidths[column.colKey]+'px'}">
        <div style="position: absolute;top: 50%;transform: translateY(-50%);" :style="{width: colWidths[column.colKey]+'px'}">
          <img v-if="column.type === 'img'" style="width: 60px;height: 60px;"
               :src="temp[column.colKey].indexOf('http') === 0 ? temp[column.colKey] : fileUrl+ temp[column.colKey]"/>
          <span v-else>{{temp[column.colKey]}}</span>
        </div>
      </td>
    </tr>
    </tbody>
  </table>
</template>

<script>
import {getDataJson, pollingRefresh} from "@/utils/refreshCptData";
import {fileUrl} from '/env'
export default {
  name: "cpt-scroll-table",
  props: {
    option: Object,
    width: Number,
    height: Number,
    show: Boolean
  },
  watch:{
    'option.attribute.showLine':{
      handler() {
        this.computeRowHeight();
        this.scrollTable();
      },
      deep: true//深度监听
    },
    width(){
      this.computeColWidth();
    },
    height(){
      this.computeRowHeight();
    },
    show(val){
      if (val){
        this.computeColWidth();
      }
    },
  },
  data() {
    return {
      fileUrl,
      colWidths:{},
      rowHeight:10,
      tableData:[],
      rollData:[],
      cptData: '',
      uuid: null,
      timer:null
    }
  },
  created() {
    this.uuid = require('uuid').v1();
    this.refreshCptData();
  },
  mounted() {
    this.computeColWidth();
    this.computeRowHeight();
  },
  methods: {
    computeRowHeight(){
      this.rowHeight = (this.height - this.option.attribute.theadHeight)/this.option.attribute.showLine
    },
    computeColWidth(){
      const that = this;
      that.colWidths={};
      this.option.attribute.columns.forEach(item => {
        that.colWidths[item.colKey] = that.$refs[item.colKey][0].clientWidth
      })
    },
    refreshCptData() {
      pollingRefresh(this.uuid, this.option.cptDataForm, this.loadData)
    },
    loadData() {
      getDataJson(this.option.cptDataForm).then(res => {
        let parse = res;
        for (let i = 0; i < parse.length; i++) {
          parse[i].rowNum = i
        }
        this.tableData = parse;
        this.scrollTable();
      });
    },
    scrollTable(){
      const that = this;
      if(this.timer){
        clearInterval(this.timer);
      }
      that.rollData = that.tableData.slice(0,this.option.attribute.showLine)
      if(this.option.attribute.showLine >= that.tableData.length){
        return
      }
      let i = this.option.attribute.showLine;
      this.timer = setInterval(()=>{
        that.rollData.shift();
        that.rollData.push(that.tableData[i]);
        i++;
        if(i >= that.tableData.length) {
          i = 0
        }
      }, 2000)
    }
  },
  beforeDestroy() {
    clearInterval(this.timer);
  }
}
</script>

<style scoped>
.bounce-enter {
  transform: scaleY(.5);
  transform-origin:100% 100%;
}
.bounce-leave-to {
  opacity: 0;
  transform: translateY(-30px);
}
.bounce-enter-active,.bounce-leave-active {
  transition: all .5s;
}
.bounce-move {
  transition: transform .5s;
}
</style>
