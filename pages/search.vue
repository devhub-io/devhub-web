<template>
  <section id="content">
    <div class="single-product-area">
      <div class="container">
        <h1 class="text-center">Search</h1>
        <div class="row search-box">
          <div class="col-md-12">
            <input v-model="keyword" class="form-control" type="search" name="keyword" placeholder="search..." @keyup.enter="search">
          </div>
        </div>
        <div class="row">
          <div class="col-md-12">
            <div class="product-content-left">
              <div class="row">
                <div v-for="(item, index) in repos.rows" :key="index" class="col-sm-6 col-md-3">
                  <div class="thumbnail" style="height: 500px;">
                    <nuxt-link :to="`/repos/${item.slug}`">
                      <img :alt="item.title" :title="item.title" :src="item.cover.length > 0 ? item.cover : '/img/300x300.png'" class="lazyload" width="200">
                    </nuxt-link>
                    <div class="caption">
                      <nuxt-link :to="`/repos/${item.slug}`"><h3> {{ item.owner }} / {{ item.repo }} </h3></nuxt-link>
                      <span title="Stargazers count"><i class="fa fa-star"/> {{ item.stargazers_count }} </span>&nbsp;
                      <Peity :type="'line'" :data="item.trends || ''" title="Trends"/>
                      <p> {{ item.description }} </p>
                    </div>
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-sm-12 center">
                  <Paginate :page="repos.page" :total="repos.count" :last-page="repos.last_page" :base-url="$route.path + '?keyword=' + keyword" />
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
import { searchRepos } from '@/api/repos'
import Paginate from '@/components/general/paginate'
import Peity from 'vue-peity'

export default {
  layout: 'default',
  components: { Paginate, Peity },
  watchQuery: ['page', 'keyword'],
  async asyncData({ query }) {
    const page = query.page || 1
    const keyword = query.keyword || ''
    let repos = {
      page: 0,
      count: 0,
      last_page: 0,
      rows: []
    }
    if (keyword.length > 0) {
      repos = await searchRepos({ page: page, limit: 12, keyword: keyword }).then(res => {
        return res
      })
    }
    return { page, keyword, repos }
  },
  methods: {
    search() {
      this.page = 1
      if (this.keyword.length > 0) {
        searchRepos({ page: this.page, limit: 12, keyword: this.keyword }).then(res => {
          this.repos = res
        })
      }
    }
  }
}
</script>

<style scoped>
  .search-box {
    margin-bottom: 25px;
  }
</style>
