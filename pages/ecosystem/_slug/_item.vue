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
                <div v-for="(item, index) in repos.rows" :key="index" class="col-md-3">
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
                        <Peity :type="'line'" :data="item.trends" title="Trends"/>
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
              <li class="toc-entry toc-h2"><a href="#approach">Approach</a></li>
              <li class="toc-entry toc-h2"><a href="#page-defaults">Page defaults</a></li>
              <li class="toc-entry toc-h2"><a href="#native-font-stack">Native font stack</a></li>
              <li class="toc-entry toc-h2"><a href="#headings-and-paragraphs">Headings and paragraphs</a></li>
              <li class="toc-entry toc-h2"><a href="#lists">Lists</a></li>
              <li class="toc-entry toc-h2"><a href="#preformatted-text">Preformatted text</a></li>
              <li class="toc-entry toc-h2"><a href="#tables">Tables</a></li>
              <li class="toc-entry toc-h2"><a href="#forms">Forms</a></li>
              <li class="toc-entry toc-h2 active">
                <a href="#misc-elements">Misc elements</a>
                <ul>
                  <li class="toc-entry toc-h3"><a href="#address">Address</a></li>
                  <li class="toc-entry toc-h3"><a href="#blockquote">Blockquote</a></li>
                  <li class="toc-entry toc-h3"><a href="#inline-elements">Inline elements</a></li>
                  <li class="toc-entry toc-h3"><a href="#summary">Summary</a></li>
                </ul>
              </li>
              <li class="toc-entry toc-h2"><a href="#html5-hidden-attribute">HTML5 [hidden] attribute</a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { getHottest, getNewest, getTrend } from '@/api/repos'
import Paginate from '@/components/general/paginate'
import Peity from 'vue-peity'

export default {
  layout: 'default',
  components: { Paginate, Peity },
  watchQuery: ['page'],
  async asyncData({ query, params, error }) {
    const slug = 'popular' // params.slug
    const page = query.page || 1
    let repos = {}
    if (slug === 'popular') {
      repos = await getHottest({ page, limit: 12 }).then(res => {
        return res
      })
    } else if (slug === 'newest') {
      repos = await getNewest({ page, limit: 12 }).then(res => {
        return res
      })
    } else if (slug === 'trend') {
      repos = await getTrend({ page, limit: 12 }).then(res => {
        return res
      })
    } else {
      // error({ statusCode: 404, message: 'Post not found' })
    }
    return { repos, slug }
  },
  head() {
    return {
      title: this.slug
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
