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
                  <div class="card card-body" style="height: 500px;">
                    <nuxt-link :to="`/repos/${item.slug}`">
                      <img :alt="item.title" :title="item.title" :src="item.cover.length > 0 ? item.cover : '/img/300x300.png'" class="lazyload" width="200">
                    </nuxt-link>
                    <div class="caption">
                      <nuxt-link :to="`/repos/${item.slug}`"><h5> {{ item.owner }} / {{ item.repo }} </h5></nuxt-link>
                      <span title="Stargazers count"><i class="fas fa-star"/> {{ item.stargazers_count }} </span>&nbsp;
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
import Paginate from '@/components/general/paginate'
import Peity from 'vue-peity'

export default {
  layout: 'default',
  components: { Paginate, Peity },
  watchQuery: ['page', 'keyword'],
  async asyncData({ query, store }) {
    const page = query.page || 1
    const keyword = query.keyword || ''
    let repos = {
      page: 0,
      count: 0,
      last_page: 0,
      rows: []
    }
    if (keyword.length > 0) {
      repos = await store.dispatch('searchRepos', { page: page, limit: 12, keyword: keyword })
    }
    return { page, keyword, repos }
  },
  head: {
    title: 'Search'
  },
  methods: {
    search() {
      this.page = 1
      if (this.keyword.length > 0) {
        this.$store.dispatch('searchRepos', { page: this.page, limit: 12, keyword: this.keyword }).then(res => {
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
