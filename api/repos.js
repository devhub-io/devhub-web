import request from '@/utils/request'

export function getCategories(params) {
  return request({
    url: `/category/top`,
    method: 'get',
    params: params
  })
}

export function getNews(params) {
  return request({
    url: `/news`,
    method: 'get',
    params: params
  })
}
