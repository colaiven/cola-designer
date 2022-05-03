const dataText = JSON.stringify(
    [{"name":"南海诸岛","value":0},{"name":"北京","value":54},{"name":"天津","value":13},{"name":"上海","value":40},
        {"name":"重庆","value":75},{"name":"河北","value":13},{"name":"河南","value":83},{"name":"云南","value":11},
        {"name":"辽宁","value":19},{"name":"黑龙江","value":15},{"name":"湖南","value":69},{"name":"安徽","value":60},
        {"name":"山东","value":39},{"name":"新疆","value":4},{"name":"江苏","value":31},{"name":"浙江","value":104},
        {"name":"江西","value":36},{"name":"湖北","value":1052},{"name":"广西","value":33},{"name":"甘肃","value":7},
        {"name":"山西","value":9},{"name":"内蒙古","value":7},{"name":"陕西","value":22},{"name":"吉林","value":4},
        {"name":"福建","value":18},{"name":"贵州","value":5},{"name":"广东","value":98},{"name":"青海","value":1},
        {"name":"西藏","value":0}, {"name":"四川","value":44},{"name":"宁夏","value":4},{"name":"海南","value":22},
        {"name":"台湾","value":3}, {"name":"香港","value":5},{"name":"澳门","value":5}]
)
export default {
    cptDataForm:{
        dataSource: 1, pollTime: 0,
        dataText:dataText,
    },
    attribute:{
        map:'china',
        roam:false,titleText:'肺炎地图',titleLeft: 'center', titleTop: 10,
        subtext:'数据纯属虚构',titleFontSize:20,titleColor: '#ddd',
        subTitleColor:'#aaa',subTitleFontSize:13,
        seriesName:'确诊病例',geoLabelColor:'#555',geoLabelSize:14,
        piecesLabel1:'> 100 人',piecesColor1:'#7f1100',
        piecesLabel2:'10 - 100 人',piecesColor2:'#ff5428',
        piecesLabel3:'1 - 9 人',piecesColor3:'#ff8c71',
        piecesLabel4:'疑似',piecesColor4:'#ffd768',
        piecesLabel5:'无',piecesColor5:'#ffffff',
    }
}
