import * as echarts from 'echarts'

//注册echarts地图
import chinaGeoJson from '@/assets/map/china.json'
import changZhou from '@/assets/map/city/changzhou.json'

echarts.registerMap('china', chinaGeoJson);
echarts.registerMap('changZhou', changZhou);
