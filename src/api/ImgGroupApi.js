import request from '@/utils/HttpUtil'
import { baseUrl } from '/env'

export function pageListApi(params) {
  return request({
    url: baseUrl+'/imgGroup/pageList',
    method: 'get',
    params
  })
}
export function listGroupAllApi() {
  return request({
    url: baseUrl+'/imgGroup/listAll',
    method: 'get'
  })
}
export function saveOrUpdateApi(data) {
  return request({
    url: baseUrl+'/imgGroup/saveOrUpdate',
    method: 'post',
    data
  })
}
