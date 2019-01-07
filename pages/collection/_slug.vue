<template>
  <section id="content">
    <div class="single-product-area">
      <div class="zigzag-bottom"/>
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <h1 class="sidebar-title" style="text-align: center;font-size: 36px;"> {{ collection.title }} </h1>
          </div>

          <div class="col-md-12">
            <div class="product-content-right">
              <div class="row">
                <div v-for="(item, index) in repos" :key="index" class="col-sm-4 col-md-3">
                  <div class="thumbnail" style="height: 362px;">
                    <nuxt-link :to="`/repos/${item.repos.slug}`"><img :src="item.repos && item.repos.cover.length > 0 ? item.repos.cover : '/img/200x200.png'" :alt="item.repos.title" :title="item.repos.title" width="200"></nuxt-link>
                    <div class="caption">
                      <nuxt-link :to="`/repos/${item.repos.slug}`"><h3> {{ item.repos.title }} </h3></nuxt-link>
                      <span class="line"> {{ item.repos.trends }} </span>
                      <p> {{ item.repos.description }}} </p>
                    </div>
                  </div>
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
import { getCollectionRepos } from '@/api/repos'

export default {
  layout: 'default',
  async asyncData({ query, params, error }) {
    const slug = params.slug
    const { collection, repos } = await getCollectionRepos(slug).then(res => {
      return res
    })
    if (repos === undefined || repos === null || repos.length === 0) {
      error({ statusCode: 404, message: 'Post not found' })
    }
    return { repos, collection }
  }
}
</script>
