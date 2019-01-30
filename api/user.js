import request from '@/utils/request'

export function authToken() {
  return request({
    url: `/auth`,
    method: 'get'
  })
}

export function getStars(params) {
  return request({
    url: `/stars`,
    method: 'get',
    params: params
  })
}

export function star(params) {
  return request({
    url: `/star`,
    method: 'post',
    data: params
  })
}
