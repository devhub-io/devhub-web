<template>
  <section id="content">
    <div class="single-product-area">
      <div class="container">
        <h1 class="text-center ecosystem-title">{{ topic.title }} <span class="sub-title">ecosystem</span></h1>
        <div class="row">
          <div class="col-md-12 ecosystem-links">
            <span v-if="topic.homepage">
              <a :href="topic.homepage | link" target="_blank" rel="nofollow"><i class="fas fa-link mini"/> Homepage</a>
            </span>
            <span v-if="topic.github">
              <a :href="topic.github | link" target="_blank" rel="nofollow"><i class="fas fa-link mini"/> Github</a>
            </span>
          </div>
        </div>
        <div class="row">
          <div class="col-md-7 wiki-block">
            <div class="wiki">{{ wiki.summary }}</div>
            <a v-if="topic.wiki" :href="topic.wiki | link" target="_blank" class="wiki-link" rel="nofollow">Wikipedia</a>
          </div>
          <div class="col-md-5">
            <div class="card card-body">
              <div class="row attr-row">
                <div class="col-md-5">Initial release:</div>
                <div class="col-md-7">May 27, 2009; 9 years ago</div>
              </div>
              <div class="row attr-row">
                <div class="col-md-5">License:</div>
                <div class="col-md-7">MIT license</div>
              </div>
              <div v-for="i in 3" :key="i" class="row attr-row">
                <div class="col-md-5">Operating system:</div>
                <div class="col-md-7">Linux, macOS, Microsoft Windows, SmartOS, FreeBSD, IBM AIX</div>
              </div>
            </div>
          </div>
        </div>
        <div class="card-columns">
          <div v-for="item in collections" :key="item.id" class="card text-center">
            <div class="card-body">
              <h5 class="card-title">
                <nuxt-link :to="`/ecosystem/${slug}/${item.slug}`" class="root-collection">{{ item.title }}</nuxt-link>
              </h5>
              <div class="card-text">
                <div class=" card-columns">
                  <nuxt-link v-for="two in item.children" :key="two.id" :to="`/ecosystem/${slug}/${two.slug}`">
                    <div class="card text-center">
                      <div class="card-body">
                        <h6 class="card-title">{{ two.title }}</h6>
                      </div>
                    </div>
                  </nuxt-link>
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
import { getEcosystem } from '@/api/ecosystem'
import Paginate from '@/components/general/paginate'

export default {
  layout: 'default',
  components: { Paginate },
  watchQuery: ['page', 'type'],
  async asyncData({ params }) {
    const slug = params.slug
    const ecosystem = await getEcosystem(slug).then(res => {
      return res
    })
    ecosystem.slug = slug
    return ecosystem
  },
  head() {
    return {
      title: `${this.topic.title} - Ecosystem`,
      meta: [
        { hid: 'description', name: 'description', content: this.topic.description }
      ]
    }
  }
}
</script>

<style scoped>
  .ecosystem-title {
    font-size: 2.5rem;
    border-bottom: 1px solid rgba(0,0,0,.125);
    padding-bottom: 20px;
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
    overflow-y: hidden;
  }
  .wiki-block {
    margin-bottom: 25px;
  }
  .collection {
    text-align: center;
  }
  .mini {
    font-size: 10px;
  }
  .attr-row {
    margin-bottom: 15px;
  }
  .root-collection {
    margin-bottom: 15px;
  }

  .card-columns {
    column-count: 2;
  }
</style>
