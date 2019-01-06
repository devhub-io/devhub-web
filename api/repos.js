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

export function getCollections(params) {
  return request({
    url: `/repos/collections`,
    method: 'get',
    params: params
  })
}

export function getRecommend(params) {
  return request({
    url: `/repos/recommend`,
    method: 'get',
    params: params
  })
}

export function getHottest(params) {
  return request({
    url: `/repos/hottest`,
    method: 'get',
    params: params
  })
}

export function getNewest(params) {
  return request({
    url: `/repos/newest`,
    method: 'get',
    params: params
  })
}

export function getTrend(params) {
  return request({
    url: `/repos/trend`,
    method: 'get',
    params: params
  })
}

export function getRepos(slug) {
  return request({
    url: `/repos/${slug}`,
    method: 'get'
  })
}

export function getHomeRepos() {
  return request({
    url: `/repos/home`,
    method: 'get'
  })
}
