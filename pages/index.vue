<template>
  <div>
    <section id="topics">
      <div class="container">
        <div class="row">
          <h1 class="wow fadeInUp text-center">Topics</h1>

          <div class="row top-50" data-wow-delay=".3s" data-effect="mfp-zoom-in">
            <div v-for="(item, index) in collections.rows" :key="'topics' + index" class="col-md-4 center">
              <nuxt-link :to="`/collection/${item.slug}`">
                <img :src="item.image ? item.image : '/img/270x270.png'" :title="item.title" :alt="item.title" width="270" height="270" class="lazyload">
              </nuxt-link>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section id="guess">
      <div class="container">
        <div class="row">
          <h1 class="wow fadeInUp text-center">Guess you like it</h1>

          <div class="row top-50" data-wow-delay=".3s" data-effect="mfp-zoom-in">
            <div v-for="(item, index) in recommend" :key="index" class="col-md-2 center guess-item">
              <nuxt-link :to="`/repos/${item.slug}`">
                <img :src="item.cover ? item.cover : '/img/210x269.png'" :title="item.title" :alt="item.title" width="200" class="lazyload">
                <p>{{ item.title }}</p>
              </nuxt-link>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section id="top">
      <div class="container">
        <h1>Popular <nuxt-link to="/list/popular"><span style="margin-left: 10px; font-size: 16px">more</span></nuxt-link></h1>
        <nuxt-link v-for="(item, index) in hottest.rows" :key="'popular' + index" :to="`/repos/${item.slug}`">
          <div class="row">
            <div class="col-md-3 title">{{ item.owner }} / {{ item.repo }}</div>
            <div class="col-md-6 desc">{{ item.description }} </div>
            <div class="col-md-2 col-md-offset-1 stars"><i class="fa fa-star"/>  {{ item.stargazers_count }} <peity :type="'line'" :data="item.trends" title="Trends"/></div>
          </div>
        </nuxt-link>
        <h1>Top new <nuxt-link to="/list/newest"><span style="margin-left: 10px; font-size: 16px">more</span></nuxt-link></h1>
        <nuxt-link v-for="(item, index) in newest.rows" :key="'newest' + index" :to="`/repos/${item.slug}`">
          <div class="row">
            <div class="col-md-3 title">{{ item.owner }} / {{ item.repo }}</div>
            <div class="col-md-6 desc">{{ item.description }} </div>
            <div class="col-md-2 col-md-offset-1 stars"><i class="fa fa-star"/>  {{ item.stargazers_count }}  <peity :type="'line'" :data="item.trends" title="Trends"/></div>
          </div>
        </nuxt-link>
        <h1>Trend <nuxt-link to="/list/trend"><span style="margin-left: 10px; font-size: 16px">more</span></nuxt-link></h1>
        <nuxt-link v-for="(item, index) in trend.rows" :key="'trend' + index" :to="`/repos/${item.slug}`">
          <div class="row">
            <div class="col-md-3 title">{{ item.owner }} / {{ item.repo }}</div>
            <div class="col-md-6 desc">{{ item.description }} </div>
            <div class="col-md-2 col-md-offset-1 stars"><i class="fa fa-star"/>  {{ item.stargazers_count }}  <peity :type="'line'" :data="item.trends" title="Trends"/></div>
          </div>
        </nuxt-link>
      </div>
    </section>

    <section id="subscribe">
      <div class="container">
        <div class="row">
          <div class="col-md-12 text-center">
            <p class="subtitle"/>
            <h2>Subscribe our newsletters</h2>
            <form action="">
              <div class="form-group">
                <input type="email" placeholder="Email here">
                <a href="javascript:alert('Coming soon.')" class="btn btn-green">Subscribe</a>
              </div>
            </form>
            <p class="promise">We promise to never spam you.</p>
          </div>
        </div>
      </div>
    </section><!-- //Subscribe -->
  </div>
</template>

<script>
import { getHomeRepos } from '@/api/repos'
import moment from 'moment'
import Peity from 'vue-peity'

export default {
  components: { Peity },
  async asyncData() {
    const { hottest, newest, trend, recommend, collections } = await getHomeRepos().then(res => {
      return res
    })

    return { hottest, newest, trend, recommend, collections }
  },
  filters: {
    date(val) {
      if (val === '' || val === undefined || val === null) {
        return '-'
      } else {
        return moment(val).format('YYYY-MM-DD')
      }
    }
  },
  data() {
    return {
      tabIndex: 0
    }
  },
  methods: {
    tabClick(index) {
      this.tabIndex = index
    }
  }
}
</script>
