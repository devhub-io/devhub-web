import request from '@/utils/request'

export function getEcosystems(params) {
  return request({
    url: `/ecosystems`,
    method: 'get',
    params: params
  })
}

export function getEcosystem(slug) {
  return request({
    url: `/ecosystem/${slug}`,
    method: 'get'
  })
}

export function getEcosystemOutline(slug) {
  return request({
    url: `/ecosystem/${slug}/outline`,
    method: 'get'
  })
}

export function getEcosystemCollectionItems(topic_slug, collection_slug) {
  return request({
    url: `/ecosystem/${topic_slug}/collection/${collection_slug}/items`,
    method: 'get'
  })
}
