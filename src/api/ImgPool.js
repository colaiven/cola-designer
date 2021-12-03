import request from '@/utils/HttpUtil'
import { baseUrl } from '/env'

export function pageListApi(params) {
  return request({
    url: baseUrl+'/imgPool/pageList',
    method: 'get',
    params
  })
}
export function saveOrUpdateApi(data) {
  return request({
    url: baseUrl+'/imgPool/saveOrUpdate',
    method: 'post',
    data
  })
}
export function delApi(id) {
  return request({
    url: baseUrl+'/imgPool/delete/'+id,
    method: 'delete'
  })
}
