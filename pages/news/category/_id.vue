<template>
  <div>
    <page-title :title="category"/>

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
import { getArticles, getCategory } from '@/api/ext'
import PageTitle from '@/components/general/page-title'
import NewsList from '@/components/business/news'

export default {
  watchQuery: ['page'],
  components: { PageTitle, NewsList },
  async asyncData({ params, query, error }) {
    const siteId = process.env.SITE_ID
    const id = 'id' in params ? parseInt(params.id) : 0
    const page = 'page' in query ? parseInt(query.page) : 1
    const perPage = 6
    let total = 0
    const category_name = await getCategory(id).then((res) => {
      if (res.code === 200) {
        return res.name
      } else {
        error({ statusCode: 404, message: 'Post not found' })
      }
    })
    const articles = await getArticles({ per_page: perPage, page: page, site_id: siteId, category_id: id }).then((res) => {
      if (res.code === 200) {
        total = res.total
        return res.data
      } else {
        return { articles: [], total: 0, page: page, per_page: perPage, category: category_name }
      }
    })

    return { articles: articles, total: total, page: page, per_page: perPage, category: category_name }
  }
}
</script>
