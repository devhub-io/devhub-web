<template>
  <section id="content">
    <div class="single-product-area">
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <h1 class="text-center">
              {{ slug }}
              <a :href="`https://stackoverflow.com/documentation/${slug}/topics`" target="_blank" rel="nofollow">
                <i class="fab fa-stack-overflow" aria-hidden="true"/>
              </a>
            </h1>
            <p v-if="topic.explain" style="margin-bottom: 25px;"> {{ topic.explain.text }} </p>
          </div>
        </div>
        <div class="row">
          <div class="col-md-12">
            <div class="product-content-right">
              <div class="row">
                <div v-for="(item, index) in topic.rows" :key="index" class="col-sm-6 col-md-3">
                  <div class="card card-body" style="height: 380px;">
                    <nuxt-link :to="`/repos/${item.slug}`"><img :src="item.cover.length > 0 ? item.cover + '&s=200' : '/img/200x200.png'" alt=" $item->title " title=" $item->title " class="lazyload" width="200"></nuxt-link>
                    <div class="caption">
                      <nuxt-link :to="`/repos/${item.slug}`"><h5> {{ item.title }} </h5></nuxt-link>
                      <div style="margin-bottom: 10px">
                        <span title="star">
                          <i class="fas fa-star"/>  {{ item.stargazers_count }}
                        </span>
                        <peity :type="'line'" :data="item.trends" title="Trends"/>
                      </div>
                      <p> {{ item.description }} </p>
                    </div>
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-sm-12 center">
                  <Paginate :page="topic.page" :total="topic.count" :last-page="topic.last_page" :base-url="$route.path" />
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
import { getTopicRepos } from '@/api/repos'
import Paginate from '@/components/general/paginate'
import Peity from 'vue-peity'

export default {
  layout: 'default',
  components: { Paginate, Peity },
  watchQuery: ['page'],
  async asyncData({ query, params }) {
    const slug = params.slug
    const page = query.page || 1
    const topic = await getTopicRepos(slug, { limit: 12, page: page }).then(res => {
      return res
    })
    return { topic, slug, page }
  },
  head() {
    return {
      title: `Topic: ${this.slug}`,
      meta: [
        { hid: 'description', name: 'description', content: this.topic.explain.text }
      ]
    }
  }
}
</script>
