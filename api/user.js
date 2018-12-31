import request from '@/utils/request'

export function requestLogin(params) {
  return request({
    url: `/member/login`,
    method: 'post',
    data: params
  })
}

export function captchaInfo() {
  return request({
    url: `/captcha/info`,
    method: 'get'
  })
}

export function createUser(params) {
  return request({
    url: `/member/register`,
    method: 'post',
    data: params
  })
}

export function updateUser(params) {
  return request({
    url: `/member/update`,
    method: 'post',
    data: params
  })
}

export function getUser() {
  return request({
    url: `/member`,
    method: 'get'
  })
}
