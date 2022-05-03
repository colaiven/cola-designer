import httpUtil from "@/utils/HttpUtil";
import {Message} from "element-ui";
import {executeSelectApi} from "@/api/sqlExecuteApi";

export async function getDataJson(cptDataForm){
    let resStr = '{}';//防止JSON解析报错
    let iptStr = cptDataForm.dataText;
    if (cptDataForm.dataSource === 1){
        resStr = JSON.parse(iptStr);
    }else if(cptDataForm.dataSource === 2){//调接口
        iptStr = cptDataForm.apiUrl
        if (iptStr){
            await httpUtil.doRequest(iptStr,'get').then(res => {
                resStr = res.data?res.data:res;
            })
        }else{
            Message.error("接口地址不能为空");
        }
    }else if(cptDataForm.dataSource === 3){
        iptStr = cptDataForm.sql
        if (iptStr){
            await executeSelectApi({sql:iptStr}).then(res => {
                resStr = res.data;
            })
        }else{
            Message.error("SQL不能为空");
        }
    }
    return resStr;
}

let cptTimer = {}

export function pollingRefresh(uuid, cptDataForm, loadData){
    if(uuid) {
        clearInterval(cptTimer[uuid]);//清除旧的定时器
    }
    if (!cptDataForm){
        Message.warning("cptDataForm==>null");
        return;
    }
    if (!loadData){
        Message.warning("子组件未实现数据解析方法");
        return;
    }
    loadData();
    if (cptDataForm.pollTime && cptDataForm.pollTime !== 0) {//轮询
        cptTimer[uuid] = setInterval(function () {
            loadData();
        }, cptDataForm.pollTime * 1000)
    }
}

export function clearCptInterval(uuid, clearAll){
    if(uuid) {
        clearInterval(cptTimer[uuid]);//清除旧的定时器
    }
    if (clearAll){
        for (const key in cptTimer) {
            clearInterval(cptTimer[key]);
        }
    }
}
