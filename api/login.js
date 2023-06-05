// 引用网络请求中间件
import request from '@/utils/requset.js';
/**
 *    登陆请求
 */
export function login(data) {
    return request({
        url: '/session',
        method: 'POST',
        data
    })
}

export function validation(data){
    return request({
        url:'/validation_codes',
        method:'POST',
        data
    })
}