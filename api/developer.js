import request from '@/utils/request'

export function getDevelopers(params) {
  return request({
    url: `/developer/list`,
    method: 'get',
    params: params
  })
}

export function getDeveloper(slug) {
  return request({
    url: `/developer/${slug}`,
    method: 'get'
  })
}
