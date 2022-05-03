import axios from 'axios'
import { MessageBox, Message } from 'element-ui'
import {getToken, removeToken} from "@/utils/auth";

const httpUtil = axios.create({
    timeout: 12000 // request timeout
})
httpUtil.interceptors.request.use(
    config => {
        const token = getToken();
        if (token) {
            config.headers['X-Token'] = token
        }
        return config
    },
    error => {
        return Promise.reject(error)
    }
)

httpUtil.interceptors.response.use(
    response => {
        const res = response.data
        if (res.code && res.code !== 1) {
            if(res.code === 301 || res.code === 302) {
                MessageBox.confirm('登录状态失效，请退出重新登录', '确认退出', {
                    confirmButtonText: '重新登录',
                    cancelButtonText: '关闭',
                    type: 'warning'
                }).then(() => {
                    removeToken();
                    location.reload()
                })
            }
            Message.error(res.msg)
            return Promise.reject(new Error(res.msg || 'Error'))
        }
        return res;
    }, error => {
        console.log('err', error)
        Message.error(error.message)
        return Promise.reject(error)
    }
)
httpUtil.doRequest = function (url, method, params) {
    return httpUtil({
        url: url,
        method: method,
        params
    })
}
httpUtil.doGet = function (url, params) {
    return httpUtil({
        url: url,
        method: 'get',
        params
    })
}
httpUtil.doPost = function (headers, url, data) {
    return httpUtil({
        headers: headers,
        url: url,
        method: 'post',
        data: data
    })
}
export default httpUtil
