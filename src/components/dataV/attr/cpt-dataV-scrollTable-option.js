const dataText = JSON.stringify([
    {userName:"张三",age:24,birth:'2001-10-20'},
    {userName:"李四",age:14,birth:'2003-12-20'},
    {userName:"李四2",age:14,birth:'2013-03-12'},
    {userName:"李四3",age:19,birth:'2013-03-11'},
    {userName:"李四5",age:19,birth:'2011-02-21'},
    {userName:"李四6",age:29,birth:'2021-01-11'},
    {userName:"李四8",age:29,birth:'2004-05-16'},
])

export default {
    cptDataForm:{
        dataSource: 1, pollTime: 0,
        dataText:dataText
    },
    attribute:{
        columns: JSON.stringify([
            {key:'userName',title:'姓名',width:80},
            {key:'age',title:'年龄',width:80},
            {key:'birth',title:'生日',width:null},
        ]),//表头数据
        rowNum: 4,//显示行数
        headerBGC:'#00BAFF',//表头背景色
        oddRowBGC:'#003B51',//奇数行背景色
        evenRowBGC:'#0A2732',//偶数行背景色
        waitTime: 2000,//轮播时间间隔(ms)
        headerHeight: 35,//表头高度
        indexHeader: '序号',//行号表头
        carousel:'single',//轮播方式'single'|'page'
        hoverPause:true,//悬浮暂停轮播
        index: true,//开启序号

    }
}
