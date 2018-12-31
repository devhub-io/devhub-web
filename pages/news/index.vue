<template>
  <div>
    <page-title title="景区新闻"/>

    <!-- news-section -->
    <section class="news-section blog-classic sec-pad-2">
      <div class="container">
        <news-list :data="articles" />
        <ul v-if="articles.length > 0" class="pagination centred clearfix">
          <li v-show="page - 1 > 0"><nuxt-link :to="`/news?page=${page - 1}`"><i class="flaticon-left-arrow"/></nuxt-link></li>
          <li><a :href="void(0)" class="active">{{ page }}</a></li>
          <li v-show="page * per_page + 1 <= total"><nuxt-link :to="`/news?page=${page + 1}`"><i class="flaticon-right-arrow"/></nuxt-link></li>
        </ul>
      </div>
    </section>
    <!-- news-section -->
  </div>
</template>

<script>
import { getArticles } from '@/api/ext'
import PageTitle from '@/components/general/page-title'
import NewsList from '@/components/business/news'

export default {
  layout: 'default',
  watchQuery: ['page'],
  components: { PageTitle, NewsList },
  async asyncData({ query }) {
    const page = 'page' in query ? parseInt(query.page) : 1
    const perPage = 6
    let total = 0
    const articles = await getArticles({ per_page: perPage, page: page }).then((res) => {
      if (res.code === 200) {
        total = res.total
        console.log(res.data)
        return res.data
      } else {
        return []
      }
    })

    return { articles: articles, total: total, page: page, per_page: perPage }
  }
}
</script>
