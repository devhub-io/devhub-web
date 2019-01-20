<template>
  <section id="content">
    <div class="single-product-area">
      <h1 class="text-center ecosystem-title">{{ topic.title }} <span class="sub-title">ecosystem</span></h1>
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <div class="card card-body">
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
                <div class="col-md-7">
                  <div class="wiki">{{ topic.description }}</div>
                  <a v-if="topic.wiki" :href="topic.wiki | link" target="_blank" rel="nofollow">Wikipedia</a>
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
              <div class="row">
                <div v-for="item in collections" :key="item.id" class="col-md-6">
                  <div class="card card-body collection">
                    <nuxt-link :to="`/ecosystem/${slug}/${item.slug}`" class="root-collection">{{ item.title }}</nuxt-link>
                    <div class="row">
                      <div v-for="i in 6" :key="i" class="col-md-4">
                        <nuxt-link to="/ecosystem/node/docs">
                          <div class="card card-body collection">
                            Tools 1
                          </div>
                        </nuxt-link>
                      </div>
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
  .attr-row {
    margin-bottom: 15px;
  }
  .root-collection {
    margin-bottom: 15px;
  }

  @media only screen and (max-width: 768px) {
    .ecosystem-homepage {
      font-size: 1rem;
      margin-bottom: 15px;
      text-align: left;
    }
  }
</style>
