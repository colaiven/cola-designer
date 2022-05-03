const dataText = JSON.stringify({
    xData:"Mon,Tue,Wed,Thu,Fri,Sat,Sun",yData: "120,200,150,80,70,110,130"
})
export default {
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
        dataText:dataText,
        dataSource: 1, pollTime: 0
    },
}
