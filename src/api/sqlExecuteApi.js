import request from '@/utils/HttpUtil'
import { baseUrl } from '/env'

export function executeSelectApi(params) {
    return request({
        url: baseUrl+'/sql/executeSelect',
        method: 'get',
        params
    })
}
