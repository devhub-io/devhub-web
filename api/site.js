import request from '@/utils/request'

export function getCategories(params) {
  return request({
    url: `/categories`,
    method: 'get',
    params: params
  })
}

export function getSites() {
  return request({
    url: `/sites`,
    method: 'get'
  })
}

export function getCount() {
  return request({
    url: `/count`,
    method: 'get'
  })
}

export function feedback(params) {
  return request({
    url: `/feedback`,
    method: 'post',
    data: params
  })
}
