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

export function getTopics() {
  return request({
    url: `/topics`,
    method: 'get'
  })
}

export function getTopicRepos(topic, params) {
  return request({
    url: `/topic/${topic}`,
    method: 'get',
    params: params
  })
}
