import request from '@/utils/request'

export function getCategories(params) {
  return request({
    url: `/categories`,
    method: 'get',
    params: params
  })
}
