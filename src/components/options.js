const cptOptions = {
    element:{
        name:'基础',
        icon:'',
        opened:true,
        options:{
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
            }
        }
    }
}
export default cptOptions
