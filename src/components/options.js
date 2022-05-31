import cpt_chart_column_option from '@/components/echarts/attr/cpt-chart-column-option'
import cpt_chart_pie_option from '@/components/echarts/attr/cpt-chart-pie-option'
import cpt_chart_line_option from '@/components/echarts/attr/cpt-chart-line-option'
import cpt_chart_gauge_option from '@/components/echarts/attr/cpt-chart-gauge-option'
import cpt_chart_mapGc_option from '@/components/echarts/attr/cpt-chart-mapGc-option'
import cpt_chart_mapMigrate_option from '@/components/echarts/attr/cpt-chart-mapMigrate-option'
import cpt_text_option from '@/components/element/attr/cpt-text-option'
import cpt_dataV_scrollTable_option from '@/components/dataV/attr/cpt-dataV-scrollTable-option'

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
                cptDataForm:{dataText:'{"value":"按钮2"}',dataSource: 1, pollTime: 0},
                attribute:{
                    url: '', bgColor: '#409eff', textColor: '#fff',
                    radius: 6,
                }
            },
            'cpt-text-option': cpt_text_option,
            'cpt-input-option': {
                attribute:{
                    label: '姓名', placeholderValue: '请输入姓名',
                    value: '', type: 'text',
                    labelWidth: 80, labelPosition: 'left', formSize: 'mini'
                }
            },
            'cpt-image-option':{
                attribute:{
                    url:null,
                    fit:'fill',preview:false
                }
            },
            'cpt-carousel-option':{
                attribute:{
                    trigger:'hover',fit:'cover',
                    imgUrls:[],
                }
            },
            'cpt-dataV-decoration-option': {
                attribute:{
                    decorationType:'dv-decoration-1',
                    color1:'#409eff',color2:'#f00',text:'若比伤春意未多',textColor:'#ff0'
                }
            },
            'cpt-dataV-digitalFlop-option': {
                cptDataForm:{dataText:'{"value":"29999,333"}',dataSource: 1, pollTime: 0},
                attribute:{
                    content: '{nt}个{nt}元', toFixedNum: 2, textAlign:'center',rowGap: 30,
                    style:{fontSize: 30, fill: '#3de7c9'}
                }
            },
            'cpt-dataV-percentPond-option': {
                cptDataForm:{dataText: '{"value":66}',dataSource: 1, pollTime: 0},
                attribute:{
                    borderWidth: 2,borderRadius: 4,borderGap: 3,
                    lineWidth: 3,lineSpace: 2, localGradient: true,
                    colors: ['#01c4f9', '#c135ff'],
                }
            },
            'cpt-iframe-option':{
                attribute:{
                    url: 'https://www.rainy.pub/'
                }
            },
            'cpt-num-option':{
                cptDataForm:{dataText:'{"value":"275.39","unit":"人"}',dataSource: 1, pollTime: 0,apiUrl:'/text', sql:'select id from test limit 1'},
                attribute:{
                    title:'总人数',numColor:'#32B0FF',numSize:20,numHeight:30
                }
            },
            'cpt-rect-num-option':{
                cptDataForm:{
                    dataSource: 1, pollTime: 0, dataText: '{"value":"1920"}',
                },
                attribute:{
                    fontSize:50,padding:10,borderColor:'#22628D',bgColor: 'rgba(5,30,85,0.68)',color:'#7ca1d3'
                }
            }
        }
    },
    chart:{
        name:'图表',
        icon:'',
        opened:true,
        options: {
            'cpt-chart-column-option': cpt_chart_column_option,
            'cpt-chart-tdColumn-option': {
                attribute:{
                    chartTitle: '标题一', titleLeft: 'center', titleTop: 10, titleTextColor: '#ccc',
                    xAxisShow: true, yAxisShow: true, xLineShow: true, yLineShow: true,
                    xLabelColor: '#ccc', xLineColor: '#ccc', yLabelColor: '#0bd124', yLineColor: '#ccc',
                    yGridLineShow: false, yTickShow: true, xTickShow:true, barBgShow: false,
                    gradualColor: true, barColor:'#017ebb', barColor1: '#017ebb',barColor2: '#06fbfe',barColor3: '#06fbfe',
                    barWidth: 18, xFontRotate:0
                },
                cptDataForm:{
                    dataText:'{"xData":"Mon,Tue,Wed,Thu,Fri,Sat,Sun","yData":"320,302,120,100,540,123,345","yData2":"120,102,90,150,120,123,145","yData3": "320,302,120,100,540,123,345","yData4": "440,404,210,250,660,246,490"}',
                    dataSource: 1, pollTime: 0
                },
            },
            'cpt-chart-pie-option': cpt_chart_pie_option,
            'cpt-chart-clock-option':{
                attribute:{
                    axisLineWidth: 3,axisLabelSize:16,hourPointerColor:'#C0911F',
                    axisLabelDistance:8, splitLineDistance:4
                }
            },
            'cpt-dataV-scrollTable-option':cpt_dataV_scrollTable_option,
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
            'cpt-chart-line-option': cpt_chart_line_option,
            'cpt-dataV-activeRing-option':{
                cptDataForm:{
                    dataSource: 1, pollTime: 0,
                    dataText: '[{"name": "周口","value": 55},{"name": "南阳","value": 120},{"name": "西峡","value": 78},{"name": "驻马店","value": 66}]',
                },
                attribute:{
                    lineWidth: 10,radius:80,activeRadius:60,showOriginValue:false,
                    color: ['#91cc75', '#fac858', '#ee6666', '#73c0de' , '#5470c6', '#ff8c71']
                }
            },
            'cpt-chart-gauge-option':cpt_chart_gauge_option,
        }
    },
    map:{
        name:'地图',
        icon:'',
        opened:true,
        options:{
            'cpt-chart-mapGc-option':cpt_chart_mapGc_option,
            'cpt-chart-mapMigrate-option':cpt_chart_mapMigrate_option
        }
    },
    /*threeD:{
        name:'3D',
        icon:'',
        opened:true,
        options:{
            'cpt-threeJs-dom-option':{
                attribute:{
                    cameraX:5,cameraY:2,cameraZ:8,bgColor:'#1f245a',bgAlpha:0.5
                }
            }
        }
    }*/
}
export default cptOptions
