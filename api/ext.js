import request from '@/utils/request'

export function getCategories(params) {
  return request({
    url: `/categories`,
    method: 'get',
    params: params
  })
}

export function getCategory(id) {
  return request({
    url: `/category/${id}`,
    method: 'get'
  })
}

export function getArticles(params) {
  return request({
    url: `/articles`,
    method: 'get',
    params: params
  })
}

export function getArticle(id) {
  return request({
    url: `/article/${id}`,
    method: 'get'
  })
}

export function getGoodsList(params) {
  return request({
    url: `/goods`,
    method: 'get',
    params: params
  })
}

export function getGoods(id) {
  return request({
    url: `/goods/${id}`,
    method: 'get'
  })
}

export function getGoodsCalendar(id) {
  return request({
    url: `/goods/${id}/calendar`,
    method: 'get'
  })
}

export function getImages(params) {
  return request({
    url: `/images`,
    method: 'get',
    params: params
  })
}

export function createOrder(params) {
  return request({
    url: `/order/create`,
    method: 'post',
    data: params
  })
}

export function getOrder(params) {
  return request({
    url: `/order/show`,
    method: 'get',
    params: params
  })
}

export function getOrders(params) {
  return request({
    url: `/order/list`,
    method: 'get',
    params: params
  })
}

export function cancelOrder(params) {
  return request({
    url: `/order/cancel`,
    method: 'post',
    data: params
  })
}
