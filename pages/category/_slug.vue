<template>
  <section id="content">
    <div class="single-product-area">
      <div class="container">
        <div class="row">
          <div class="col-md-3">
            <div class="single-sidebar">
              <h2 class="sidebar-title" style="font-size: 28px">Categories</h2>
              <ul>
                <li v-for="(item, index) in repos.category" :key="index" :class="{ active: item.slug === slug }"><nuxt-link :to="`/category/${item.slug}`" style="font-size: 19px;">{{ item.title }}</nuxt-link></li>
              </ul>
            </div>
          </div>
          <div class="col-md-9">
            <div class="product-content-right">
              <div class="row">
                <div v-for="(item, index) in repos.rows" :key="index" class="col-md-3">
                  <div class="thumbnail" style="height: 400px;">
                    <nuxt-link :to="`/repos/${item.slug}`"><img :src="item.cover ? item.cover + '&s=200' : '/img/200x200.png'" alt=" $item->login " title=" $item->login " class="lazyload" width="200"></nuxt-link>
                    <div class="caption">
                      <nuxt-link :to="`/repos/${item.slug}`">
                        <h4>{{ item.title }}</h4>
                      </nuxt-link>
                      <div style="margin-bottom: 10px">
                        <span title="star">
                          <i class="glyphicon glyphicon-star"/> {{ item.stargazers_count }}
                        </span>
                        <peity :type="'line'" :data="item.trends" title="Trends"/>
                      </div>
                      <p>{{ item.description }}</p>
                    </div>
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-sm-12 center">
                  <Paginate :page="repos.page" :total="repos.count" :last-page="repos.last_page" :base-url="$route.path" />
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
import { getCategoryRepos } from '@/api/repos'
import Paginate from '@/components/general/paginate'
import Peity from 'vue-peity'

export default {
  layout: 'default',
  components: { Paginate, Peity },
  watchQuery: ['page'],
  async asyncData({ query, params, error }) {
    const slug = params.slug
    const page = query.page || 1
    let repos = {}
    try {
      repos = await getCategoryRepos(slug, { page, limit: 12 }).then(res => {
        return res
      })
    } catch (e) {
      error({ statusCode: 404, message: 'Post not found' })
    }

    return { repos, slug }
  },
  head() {
    return {
      title: this.slug
    }
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
