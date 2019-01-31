<template>
  <section id="content">
    <div class="single-product-area">
      <div class="container">
        <h1 class="text-center">Ecosystems</h1>
        <div class="row">
          <div v-for="(item, index) in ecosystems.rows" :key="index" class="col-md-12">
            <div class="card card-body">
              <div class="row">
                <div class="col-md-6">
                  <h2 class="ecosystem-title">
                    <nuxt-link :to="`/ecosystem/${item.slug}`">
                      {{ item.title }} <span class="sub-title">ecosystem</span>
                    </nuxt-link>
                  </h2>
                </div>
                <div class="col-md-6 ecosystem-links">
                  <span v-if="item.homepage">
                    <a :href="item.homepage | link" target="_blank" rel="nofollow"><i class="fas fa-link mini"/> Homepage</a>
                  </span>
                  <span v-if="item.github">
                    <a :href="item.github | link" target="_blank" rel="nofollow"><i class="fas fa-link mini"/> Github</a>
                  </span>
                </div>
              </div>
              <div class="row">
                <div class="col-md-5">
                  <div class="wiki">{{ item.description }}</div>
                  <a v-if="item.wiki" :href="item.wiki | link" target="_blank" rel="nofollow">Wikipedia</a>
                </div>
                <div class="col-md-7">
                  <div class="row">
                    <div v-for="(collection, index) in item.collections" :key="`c_${index}`" class="col-md-4">
                      <nuxt-link :to="`/ecosystem/${item.slug}/${collection.slug}`">
                        <div class="card card-body collection">
                          {{ collection.title }}
                        </div>
                      </nuxt-link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="row pagination">
          <div class="col-md-12">
            <Paginate :page="ecosystems.page" :total="ecosystems.count" :last-page="ecosystems.last_page" :base-url="$route.path" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import Paginate from '@/components/general/paginate'

export default {
  layout: 'default',
  components: { Paginate },
  watchQuery: ['page', 'type'],
  async asyncData({ query, store }) {
    const page = query.page || 1
    const ecosystems = await store.dispatch('getEcosystems', { page, limit: 12 })
    return { ecosystems }
  },
  head: {
    title: 'Ecosystems'
  }
}
</script>

<style scoped>
  .ecosystem-title {
    font-size: 2rem;
    margin-bottom: 15px;
  }
  .ecosystem-title a {
    color: #212529 !important;
  }
  .ecosystem-links {
    font-size: 1rem;
    margin-bottom: 15px;
    text-align: right;
    line-height: 52px;
    margin-top: 0;
  }
  .ecosystem-links span {
    margin-left: 15px;
  }
  .sub-title {
    color: #7f828b;
    font-size: 1.8rem;
  }
  .wiki {
    max-height: 150px;
    overflow-y: hidden;
  }
  .collection {
    text-align: center;
  }
  .mini {
    font-size: 10px;
  }

  @media only screen and (max-width: 768px) {
    .ecosystem-homepage {
      font-size: 1rem;
      margin-bottom: 15px;
      text-align: left;
    }
  }
</style>
