import axios from 'axios'
import { Message } from "element-ui";

const httpUtil = axios.create({
  timeout: 12000 // request timeout
})
httpUtil.interceptors.request.use(
    config => {
        const token = localStorage.getItem("token");
        if (token) {
          config.headers['X-Token'] = token
        }
        return config
    },
    error => {
        console.log(error)
        return Promise.reject(error)
    }
)

httpUtil.interceptors.response.use(
  response => {
    const res = response.data
    if (res.code !== 1) {
        Message.error(res.msg)
      return Promise.reject(new Error(res.message || 'Error'))
    } else {
      return res
    }
  },
  error => {
    console.log('err' + error)
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
export default httpUtil

