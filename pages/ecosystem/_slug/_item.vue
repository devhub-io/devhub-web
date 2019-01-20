<template>
  <section id="content">
    <div class="single-product-area">
      <div class="container-fluid">
        <div class="row flex-xl-nowrap">
          <div class="col-12 col-md-1 col-xl-1 bd-sidebar">
            <div>&nbsp;</div>
          </div>
          <div class="col-12 col-md-8 col-xl-8 py-md-3 pl-md-5 bd-content">
            <h1 class="text-center">Misc elements</h1>
            <div class="product-content-right">
              <div class="row">
                <div v-for="(item, index) in items" :key="index" class="col-md-3">
                  <div class="card card-body" style="height: 400px;">
                    <nuxt-link :to="`/repos/${item.slug}`"><img :src="item.cover ? item.cover + '&s=200' : '/img/200x200.png'" alt=" $item->login " title=" $item->login " class="lazyload" width="150"></nuxt-link>
                    <div class="caption">
                      <nuxt-link :to="`/repos/${item.slug}`">
                        <h5>{{ item.title }}</h5>
                      </nuxt-link>
                      <div style="margin-bottom: 10px">
                        <span title="star">
                          <i class="fas fa-star"/> {{ item.stargazers_count }}
                        </span>
                        <!--<Peity :type="'line'" :data="item.trends" title="Trends"/>-->
                      </div>
                      <p>{{ item.description }}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-xl-2 col-md-2 bd-toc">
            <h4>Node.js</h4>
            <ul class="section-nav">
              <li v-for="one in outline" :key="one.id" class="toc-entry toc-h2">
                <nuxt-link :to="`/ecosystem/${topic_slug}/${one.slug}`">{{ one.title }}</nuxt-link>
                <ul>
                  <li v-for="two in one.children" :key="two.id" class="toc-entry toc-h3"><nuxt-link :to="`/ecosystem/${topic_slug}/${two.slug}`">{{ two.title }}</nuxt-link></li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { getEcosystem, getEcosystemOutline, getEcosystemCollectionItems } from '@/api/ecosystem'
import Peity from 'vue-peity'

export default {
  layout: 'default',
  components: { Peity },
  watchQuery: ['page'],
  async asyncData({ query, params, error }) {
    const topic_slug = params.slug
    const collection_slug = params.item
    const items = await getEcosystemCollectionItems(topic_slug, collection_slug).then(res => {
      return res
    })
    const ecosystem = await getEcosystem(topic_slug).then(res => {
      return res
    })
    const outline = await getEcosystemOutline(topic_slug).then(res => {
      return res
    })
    return { ecosystem, outline, topic_slug, collection_slug, items }
  },
  head() {
    return {
      title: this.collection_slug
    }
  }
}
</script>

<style scoped>
  .bd-toc {
    position: sticky;
    top: 4rem;
    height: calc(100vh - 4rem);
    overflow-y: auto;
    order: 2;
    padding-top: 1.5rem;
    padding-bottom: 1.5rem;
    font-size: .875rem;
  }

  .section-nav {
    padding-left: 0;
    border-left: 1px solid #eee;
  }
  .section-nav  ul {
    padding-left: 1rem;
  }
  .toc-entry {
    display: block;
  }
  .toc-entry a {
    display: block;
    padding: .125rem 1.5rem;
    color: #99979c;
  }
  .toc-entry a:hover {
    color: #267df4;
    text-decoration: none;
  }
  .active > a:first-child {
    color: #267df4;
  }
</style>
