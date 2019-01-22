<template>
  <section id="content">
    <div class="single-product-area">
      <div class="container-fluid">
        <div class="row flex-xl-nowrap">
          <div class="col-12 col-md-1 col-xl-1 bd-sidebar">
            <div>&nbsp;</div>
          </div>
          <div class="col-12 col-md-8 col-xl-8 py-md-3 pl-md-5 bd-content">
            <h1 class="text-center">{{ collection.title }}</h1>
            <div class="product-content-right">
              <div class="card-columns">
                <div v-for="(item, index) in items" :key="index">
                  <div v-if="item.type === 'text'" class="card text-center">
                    <div class="card-body">
                      <h5 class="card-title">{{ item.title }}</h5>
                    </div>
                  </div>
                  <div v-if="item.type === 'repos' && item.foreign" class="card">
                    <img :src="item.foreign.cover ? item.foreign.cover + '&s=200' : '/img/200x200.png'" class="card-img-top" alt="...">
                    <div class="card-body">
                      <h5 class="card-title">{{ item.foreign.title }}</h5>
                      <p class="card-text">{{ item.foreign.description }}</p>
                      <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                    </div>
                  </div>
                  <div v-if="item.type === 'developers' && item.foreign" class="card">
                    <img :src="item.foreign.avatar_url ? item.foreign.avatar_url + '&s=200' : '/img/200x200.png'" class="card-img-top" alt="...">
                    <div class="card-body">
                      <h5 class="card-title">{{ item.foreign.name }}</h5>
                      <p class="card-text">{{ item.foreign.description }}</p>
                      <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                    </div>
                  </div>
                  <div v-if="item.type === 'sites' && item.foreign" class="card">
                    <img :src="item.foreign.screenshot && item.foreign.screenshot !== '' ? item.foreign.screenshot: '/img/200x200.png'" class="card-img-top" alt="...">
                    <div class="card-body">
                      <h5 class="card-title">{{ item.foreign.title }}</h5>
                      <p class="card-text">{{ item.foreign.description }}</p>
                      <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                    </div>
                  </div>
                  <div v-if="item.type === 'links' && item.foreign" class="card">
                    <div class="card-body">
                      <h5 class="card-title">{{ item.foreign.title }}</h5>
                      <p class="card-text">{{ item.foreign.summary }}</p>
                      <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                    </div>
                  </div>
                </div>
                <div v-if="items.length === 0" class="col-md-12">No data</div>
              </div>
            </div>
          </div>
          <div class="col-xl-2 col-md-2 bd-toc">
            <h4>{{ topic.title }}</h4>
            <ul class="section-nav">
              <li v-for="one in outline" :key="one.id" :class="{ 'toc-entry': true, 'toc-h2': true, active: collection.slug === one.slug }">
                <nuxt-link :to="`/ecosystem/${topic.slug}/${one.slug}`">{{ one.title }}</nuxt-link>
                <ul>
                  <li v-for="two in one.children" :key="two.id" :class="{ 'toc-entry': true, 'toc-h3': true, active: collection.slug === two.slug }">
                    <nuxt-link :to="`/ecosystem/${topic.slug}/${two.slug}`">{{ two.title }}</nuxt-link>
                  </li>
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
import { getEcosystemCollectionItems } from '@/api/ecosystem'
import Peity from 'vue-peity'

export default {
  layout: 'default',
  components: { Peity },
  watchQuery: ['page'],
  async asyncData({ query, params, error }) {
    const topic_slug = params.slug
    const collection_slug = params.item
    return await getEcosystemCollectionItems(topic_slug, collection_slug).then(res => {
      return res
    })
  },
  head() {
    return {
      title: `${this.topic.title} - ${this.collection.title}`
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
  .card-columns {
    column-count: 4;
  }
</style>
