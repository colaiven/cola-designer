const cptOptions = {
    basic:{
        name:'基础',
        icon:'',
        opened:true,
        options:{
            'cpt-dataV-border-option':{
                attribute:{
                    borderType:'dv-border-box-1',
                    borderColor1:'#409eff',borderColor2:'#f00',backgroundColor:'rgba(0, 0, 0, 0)',
                    borderTitle:'标题1',titleWidth:250,//样式11特殊配置
                    dur:3, reverse:false//样式8特殊配置
                }
            },
            'cpt-button-option': {
                cptDataForm:{dataText:'按钮2',dataSource: 1, pollTime: 0},
                attribute:{
                    url: '', bgColor: '#409eff', textColor: '#fff',
                    radius: 6,
                }
            },
            'cpt-text-option': {
                cptDataForm:{dataText:'普通文本',dataSource: 1, pollTime: 0},
                attribute:{
                    url: '', textColor: '#4BB344', textSize: 16,
                    fontWeight: 'bold', textLineHeight: 30,
                    textFamily: '微软雅黑', textAlign: 'center',
                    fontStyle:'normal', textDecoration:'none'
                }
            },
            'cpt-input-option': {
                attribute:{
                    label: '姓名', placeholderValue: '请输入姓名',
                    value: '', type: 'text',
                    labelWidth: 80, labelPosition: 'left', formSize: 'mini'
                }
            },
            'cpt-image-option':{
                attribute:{
                    url:require('/src/assets/logo.png'),
                    fit:'fill',preview:false
                }
            },
            'cpt-carousel-option':{
                attribute:{
                    trigger:'hover',fit:'cover',
                    imgUrls:[
                        require('@/assets/readme/test.png'),
                        require('@/assets/readme/options.png')
                    ],
                }
            },
            'cpt-dataV-decoration-option': {
                attribute:{
                    decorationType:'dv-decoration-1',
                    color1:'#409eff',color2:'#f00',text:'若比伤春意未多',textColor:'#ff0'
                }
            },
            'cpt-dataV-digitalFlop-option': {
                cptDataForm:{dataText:'29999,333',dataSource: 1, pollTime: 0},
                attribute:{
                    content: '{nt}个{nt}元', toFixedNum: 2, textAlign:'center',rowGap: 30,
                    style:{fontSize: 30, fill: '#3de7c9'}
                }
            },
            'cpt-dataV-percentPond-option': {
                cptDataForm:{dataText: '66',dataSource: 1, pollTime: 0},
                attribute:{
                    borderWidth: 2,borderRadius: 4,borderGap: 3,
                    lineWidth: 3,lineSpace: 2, localGradient: true,
                    colors: ['#01c4f9', '#c135ff'],
                }
            }
        }
    },
    chart:{
        name:'图表',
        icon:'',
        opened:true,
        options: {
            'cpt-chart-column-option': {
                attribute:{
                    chartTitle: '标题一', titleLeft: 'center', titleTop: 10, titleTextColor: '#ccc',
                    xAxisShow: true, yAxisShow: true, xLineShow: true, yLineShow: true,
                    xLabelColor: '#ccc', xLineColor: '#ccc', yLabelColor: '#0bd124', yLineColor: '#ccc',
                    yGridLineShow: false, yTickShow: true, xTickShow:true,
                    barBgShow: false, barBorderRadius: 5,barLabelShow: true,
                    barLabelColor: '#ff0',barLabelSize: 10,
                    gradualColor: true, barColor:'#409eff', barColor1: '#e9a90a',barColor2: '#0bcfcf',barColor3: '#cc0ce6',
                    barWidth: 18, barType: 'bar',xFontRotate:0,
                    barPath: 'path://M0,10 L10,10 C5.5,10 5.5,5 5,0 C4.5,5 4.5,10 0,10 z',
                },
                cptDataForm:{
                    dataText:'{"xData":"Mon,Tue,Wed,Thu,Fri,Sat,Sun","yData": "120,200,150,80,70,110,130"}',
                    dataSource: 1, pollTime: 0
                },
            },
            'cpt-chart-pie-option': {
                attribute:{
                    theme:'light',chartTitle: '标题一', titleX: 40, titleY: 'top', titleTextColor: '#ccc',
                    subtext:'纯属虚构',subtextColor: '#aaa', titleFontSize:18, orient: 'horizontal',
                    legendTextColor:'#ddd',legendX:'center', legendY:'bottom',
                    pieColor: ['#91cc75', '#fac858', '#ee6666', '#73c0de' , '#5470c6', '#ff8c71'],
                },
                cptDataForm:{dataText: '[{"value":1048,"name":"搜索引擎"},{"value":735,"name":"直接访问"},{"value":580,"name":"邮件营销"},{"value":484,"name":"联盟广告"},{"value":300,"name":"视频广告"}]',dataSource: 1, pollTime: 0},
            },
            'cpt-chart-clock-option':{
                attribute:{
                    axisLineWidth: 3,axisLabelSize:16,hourPointerColor:'#C0911F',
                    axisLabelDistance:8, splitLineDistance:4
                }
            },
            'cpt-dataV-scrollTable-option':{
                cptDataForm:{
                    dataSource: 1, pollTime: 0,
                    dataText: '[["行1列1","行1列2","行1列3"],["行2列1","行2列2","行2列3"],["行3列1","行3列2","行3列3"],["行4列1","行4列2","行4列3"],["行5列1","行5列2","行5列3"],["行6列1","行6列2","行6列3"],["行7列1","行7列2","行7列3"],["行8列1","行8列2","行8列3"],["行9列1","行9列2","行9列3"],["行10列1","行10列2","行10列3"]]'
                },
                attribute:{
                    header: ['列1', '列2', '列3'],//表头数据
                    rowNum: 4,//显示行数
                    headerBGC:'#00BAFF',//表头背景色
                    oddRowBGC:'#003B51',//奇数行背景色
                    evenRowBGC:'#0A2732',//偶数行背景色
                    waitTime: 2000,//轮播时间间隔(ms)
                    headerHeight: 35,//表头高度
                    indexHeader: '#a',//行号表头
                    carousel:'single',//轮播方式'single'|'page'
                    hoverPause:true,//悬浮暂停轮播
                    index: true,//开启序号
                    columnWidth: [50],//列宽
                    align: ['center'],//对齐方式
                }
            },
            'cpt-dataV-scrollList-option':{
                cptDataForm:{
                    dataSource: 1, pollTime: 0,
                    dataText: '[{"name":"周口","value":55},{"name":"南阳","value":120},{"name":"西峡","value":78},{"name":"驻马店","value":66},{"name":"新乡","value":80},{"name":"信阳","value":45},{"name":"漯河","value":29}]'
                },
                attribute:{
                    data:[],//表数据
                    rowNum:5,//表行数
                    waitTime:2000,//轮播时间间隔(ms)
                    carousel:'single',//轮播方式'single'|'page'
                    unit:'个',//数值单位
                    sort:true,//自动排序
                    valueFormatter:null,//数值格式化
                }
            },
            'cpt-dataV-waterLevel-option':{
                cptDataForm:{
                    dataSource: 1, pollTime: 0,
                    dataText: '["55"]',
                },
                attribute:{
                    shape: 'rect',//水位图形状rect/roundRect/round
                    colors: ['#1b6782'],//水位图配色
                    waveNum: 3,//波浪数量
                    waveHeight: 40,//波浪高度
                    waveOpacity: 0.4,//波浪透明度
                    formatter: '{value}%',//信息格式化
                }
            },
            'cpt-chart-line-option': {
                cptDataForm:{
                    dataSource: 1, pollTime: 0,
                    dataText: '{"xData":"Mon,Tue,Wed,Thu,Fri,Sat,Sun","yData": "120,200,150,80,70,110,130"}',
                },
                attribute:{
                    title: '一天用电量分布',subtext:'纯属虚构',titleLeft: 'center', titleTop: 10,
                    subtextColor: '#aaa',yTickShow: true,yGridLineShow:false,
                    xLineShow: true, yLineShow: true, xTickShow:true,
                    xLabelShow: true, yLabelShow: true,
                    lineColor: '#409eff',xLabelColor:'#eee',xLineColor:'#eee',titleTextColor:'#ccc',
                    yLabelColor:'#eee',yLineColor:'#eee',smooth:false,
                    areaColor1:'rgba(80,141,255,0.39)',areaColor2:'rgba(56,155,255,0.25)',areaColor3:'rgba(38,197,254,0.00)',
                }
            }
        }
    },
    map:{
        name:'地图',
        icon:'',
        opened:true,
        options:{
            'cpt-chart-mapGc-option':{
                cptDataForm:{
                    dataSource: 1, pollTime: 0,
                    dataText:'[{"name":"南海诸岛","value":0},{"name":"北京","value":54},{"name":"天津","value":13},{"name":"上海","value":40},{"name":"重庆","value":75},{"name":"河北","value":13},{"name":"河南","value":83},{"name":"云南","value":11},{"name":"辽宁","value":19},{"name":"黑龙江","value":15},{"name":"湖南","value":69},{"name":"安徽","value":60},{"name":"山东","value":39},{"name":"新疆","value":4},{"name":"江苏","value":31},{"name":"浙江","value":104},{"name":"江西","value":36},{"name":"湖北","value":1052},{"name":"广西","value":33},{"name":"甘肃","value":7},{"name":"山西","value":9},{"name":"内蒙古","value":7},{"name":"陕西","value":22},{"name":"吉林","value":4},{"name":"福建","value":18},{"name":"贵州","value":5},{"name":"广东","value":98},{"name":"青海","value":1},{"name":"西藏","value":0},{"name":"四川","value":44},{"name":"宁夏","value":4},{"name":"海南","value":22},{"name":"台湾","value":3},{"name":"香港","value":5},{"name":"澳门","value":5}]',
                },
                attribute:{
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
            },
            'cpt-chart-mapMigrate-option':{
                cptDataForm: {
                    dataSource: 1, pollTime: 0,
                    dataText:'{"start":[116.4551,40.2539],"end":[{"name": "上海", "value": 95},{"name": "广州", "value": 90},{"name": "大连", "value": 80},{"name": "南宁", "value": 70},{"name": "南昌", "value": 60},{"name": "拉萨", "value": 50},{"name": "长春", "value": 40},{"name": "包头", "value": 30},{"name": "重庆", "value": 20},{"name": "乌鲁木齐", "value": 100}]}'
                },
                attribute:{
                    titleText:'模拟迁徙',seriesName:'迁徙top10',seriesColor:'#a6c84c',
                    roam:false,titleLeft: 'center', titleTop: 10,
                    subtext:'数据纯属虚构',titleFontSize:20,titleColor: '#ddd',
                    subTitleColor:'#aaa',subTitleFontSize:13
                }
            }
        }
    }
}
export default cptOptions
