<template>
  <section id="content">
    <div class="single-product-area">
      <h1 class="text-center">Developers</h1>
      <div class="container">
        <div class="row">
          <div class="col-md-12" style="margin-bottom: 15px;">
            <div class="btn-group float-right" role="group" >
              <button :class="{ btn: true, 'btn-primary': type === 'User' }" type="button" @click="$router.push('/developers')">User</button>
              <button :class="{ btn: true, 'btn-primary': type === 'Organization' }" type="button" @click="$router.push('/developers?type=Organization')">Organization</button>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-md-12">
            <div class="product-content-right">
              <div class="row">
                <div v-for="(item, index) in developers.rows" :key="index" class="col-md-3">
                  <div class="card card-body" style="height: 310px;">
                    <nuxt-link :to="`/developer/${item.login}`"><img :src="item.avatar_url ? item.avatar_url + '&s=200' : '/img/200x200.png'" alt=" $item->login " title=" $item->login " class="lazyload" width="200"></nuxt-link>
                    <div class="caption">
                      <nuxt-link :to="`/developer/${item.login}`">
                        <h5>
                          <i v-if="item.type === 'Organization'" class="fas fa-users" title="Organization"/><i v-else class="fas fa-user" title="User"/>
                          {{ item.name ? item.name : item.login }}
                        </h5>
                      </nuxt-link>
                      <div style="margin-bottom: 10px">
                        <span v-if="item.type === 'User'" title="star">
                          <gh-btns-follow :user="item.login" show-count/>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="row pagination">
          <div class="col-md-12">
            <Paginate :page="developers.page" :total="developers.count" :last-page="developers.last_page" :base-url="$route.path" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import Paginate from '@/components/general/paginate'

export default {
  layout: 'default',
  components: { Paginate },
  watchQuery: ['page', 'type'],
  async asyncData({ query, store }) {
    const type = query.type || 'User'
    const page = query.page || 1
    const developers = await store.dispatch('getDevelopers', { type, page, limit: 12 })
    return { developers, type }
  },
  head: {
    title: 'Developers'
  }
}
</script>
