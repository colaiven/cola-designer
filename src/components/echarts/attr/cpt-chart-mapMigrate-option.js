const dataText = JSON.stringify(
    {
        "start":[116.4551,40.2539],
        "end":[{"name": "上海", "value": 95},{"name": "广州", "value": 90},{"name": "大连", "value": 80},
            {"name": "南宁", "value": 70},{"name": "南昌", "value": 60},{"name": "拉萨", "value": 50},
            {"name": "长春", "value": 40},{"name": "包头", "value": 30},{"name": "重庆", "value": 20},
            {"name": "乌鲁木齐", "value": 100}]}
)
export default {
    cptDataForm: {
        dataSource: 1, pollTime: 0,
        dataText:dataText
    },
    attribute:{
        titleText:'模拟迁徙',seriesName:'迁徙top10',seriesColor:'#a6c84c',
        roam:false,titleLeft: 'center', titleTop: 10,
        subtext:'数据纯属虚构',titleFontSize:20,titleColor: '#ddd',
        subTitleColor:'#aaa',subTitleFontSize:13
    }
}
