import request from '@/utils/HttpUtil'
import { baseUrl } from '/env'

export function login(data) {
  return request({
    url: baseUrl+'/login?username=' + data.username + '&password=' + data.password + '&authCode=' + data.authCode,
    method: 'post',
    data
  })
}

export function logout() {
  return request({
    url: baseUrl+'/logout',
    method: 'post'
  })
}

export function pageListApi(params) {
  return request({
    url: baseUrl+'/sysUser/pageList',
    method: 'get',
    params
  })
}
export function saveOrUpdateApi(data) {
  return request({
    url: baseUrl+'/sysUser/saveOrUpdate',
    method: 'post',
    data
  })
}
