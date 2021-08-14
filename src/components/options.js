const cptOptions = {
    element:{
        name:'基础',
        icon:'',
        opened:true,
        options:{
            'cpt-dataV-border-option':{
                borderType:'dv-border-box-1',
                borderColor1:'#409eff',borderColor2:'#f00',backgroundColor:'rgba(0, 0, 0, 0)',
                borderTitle:'标题1',titleWidth:250,//样式11特殊配置
                dur:3, reverse:false//样式8特殊配置
            },
            'cpt-button-option': {
                text: '按钮1', url: '', bgColor: '#409eff', textColor: '#fff',
                radius: 6,
            },
            'cpt-text-option': {
                text: '普通文本',
                url: '',
                textColor: '#4BB344',
                textSize: 25,
                fontWeight: 'bold',
                textLineHeight: 40,
                textFamily: '微软雅黑',
                textAlign: 'center',
                fontStyle:'normal',
                textDecoration:'none'
            },
            'cpt-input-option': {
                label: '姓名',
                placeholderValue: '请输入姓名',
                value: '',
                type: 'text',
                labelWidth: 80,
                labelPosition: 'left',
                formSize: 'mini'
            },
            'cpt-image-option':{
                url:require('/src/assets/exam/btfGirl.png'),
                fit:'fill',preview:false
            },
            'cpt-carousel-option':{
                trigger:'hover',
                imgUrls:[
                    require('@/assets/readme/test.png'),
                    require('@/assets/readme/options.png')
                ],
                fit:'cover'
            }
        }
    },
    echarts:{
        name:'图表',
        icon:'',
        opened:true,
        options: {
            'cpt-chart-column-option': {
                chartTitle: '标题一', titleLeft: 'center', titleTop: 10, titleTextColor: '#aaa',
                xLabelColor: '#0a7eea', xLineColor: '#aaa', yLabelColor: '#0bd124', yLineColor: '#aaa',
                yGridLineShow: false, yTickShow: true,
                barBgShow: false, barBorderRadius: 5, barColor: '#0775eb',
                barWidth: 24,
                xData: "Mon,Tue,Wed,Thu,Fri,Sat,Sun",
                yData: "120,200,150,80,70,110,130"
            },
            'cpt-chart-pie-option': {
                theme:'light',chartTitle: '标题一', titleX: 40, titleY: 'top', titleTextColor: '#ccc',
                subtext:'纯属虚构',titleFontSize:18, orient: 'horizontal',legendTextColor:'#ddd',legendX:'center',
                legendY:'bottom',seriesData:"[{\"value\":1048,\"name\":\"搜索引擎\"},{\"value\":735,\"name\":\"直接访问\"},{\"value\":580,\"name\":\"邮件营销\"},{\"value\":484,\"name\":\"联盟广告\"},{\"value\":300,\"name\":\"视频广告\"}]"
            },
            'cpt-chart-clock-option':{
                axisLineWidth: 3,axisLabelSize:16,hourPointerColor:'#C0911F',axisLabelDistance:8,
                splitLineDistance:4
            }
        }
    }
}
export default cptOptions
