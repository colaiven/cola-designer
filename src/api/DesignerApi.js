import request from '@/utils/HttpUtil'
import { baseUrl,fileUrl } from '/env'

export function getByIdApi(id,mode,viewCode) {
    return request({
        url: baseUrl+'/design/getById/'+id+'/'+mode+'/'+viewCode,
        method: 'get'
    })
}

export function authViewCodeApi(params) {
    return request({
        url: baseUrl+'/design/authViewCode',
        method: 'get',
        params
    })
}

export function uploadFileApi(oldId, data) {
    return request({
        headers: {'Content-Type':'multipart/form-data'},
        url: fileUrl+'/file/upload?dir=design&oldId='+oldId,
        method: 'post',
        data: data
    })
}

export function saveOrUpdateApi(data) {
    return request({
        url: baseUrl+'/design/saveOrUpdate',
        method: 'post',
        data
    })
}


export function pageListApi(params) {
    return request({
        url: baseUrl+'/design/pageList',
        method: 'get',
        params
    })
}
export function deleteApi(id) {
    return request({
        url: baseUrl+'/design/delete?id='+id,
        method: 'delete'
    })
}
