<template>
  <section id="content">
    <div class="single-product-area">
      <h1 style="text-align: center">Developers</h1>
      <div class="container">
        <div class="row">
          <div class="col-md-12" style="margin-bottom: 15px;">
            <div class="btn-group float-right">
              <nuxt-link :class="{ btn: true, 'btn-info': type === 'User' }" type="button" to="/developers">User</nuxt-link>
              <nuxt-link :class="{ btn: true, 'btn-info': type === 'Organization' }" type="button" to="/developers?type=Organization">Organization</nuxt-link>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-md-12">
            <div class="product-content-right">
              <div class="row">
                <div v-for="(item, index) in developers.rows" :key="index" class="col-md-3">
                  <div class="card card-body" style="height: 300px;">
                    <nuxt-link :to="`/developer/${item.login}`"><img :src="item.avatar_url ? item.avatar_url + '&s=200' : '/img/200x200.png'" alt=" $item->login " title=" $item->login " class="lazyload" width="200"></nuxt-link>
                    <div class="caption">
                      <nuxt-link :to="`/developer/${item.login}`">
                        <h4>
                          <i v-if="item.type === 'Organization'" class="fas fa-users" title="Organization"/><i v-else class="fas fa-user" title="User"/>  {{ item.name ? item.name : item.login }}
                        </h4>
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
              <div class="row">
                <div class="col-sm-12 center">
                  <Paginate :page="developers.page" :total="developers.count" :last-page="developers.last_page" :base-url="$route.path" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { getDevelopers } from '@/api/developer'
import Paginate from '@/components/general/paginate'

export default {
  layout: 'default',
  components: { Paginate },
  watchQuery: ['page', 'type'],
  async asyncData({ query }) {
    const type = query.type || 'User'
    const page = query.page || 1
    const developers = await getDevelopers({ type, page, limit: 12 }).then(res => {
      return res
    })
    return { developers, type }
  },
  head: {
    title: 'Developers'
  }
}
</script>

<style scoped>
  .single-sidebar li {
    border-bottom: 1px solid #f1f1f1;
    padding: 10px 0 10px 20px;
  }
  .single-sidebar li.active {
    color: #fff;
    background-color: #1abc9c;
  }
  .single-sidebar li.active a {
    color: #fff;
  }
</style>
