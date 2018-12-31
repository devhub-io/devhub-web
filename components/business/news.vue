<template>
  <div class="row">
    <div v-for="item in data" :key="item.id" class="col-lg-4 col-md-6 col-sm-12 news-column">
      <div class="single-item">
        <div class="image">
          <img :src="item.cover.length > 0 ? item.cover : '/images/resource/news-1.jpg'" width="370" height="220" alt="">
          <div class="overlay">
            <div class="overlay-content">
              <div class="content">
                <nuxt-link :to="`/news/${item.id}`" class="link-btn">
                  <i class="fa fa-link"/>
                </nuxt-link>
              </div>
            </div>
          </div>
        </div>
        <div class="lower-content">
          <h3><nuxt-link :to="`/news/${item.id}`" class="link-btn">{{ item.title }}</nuxt-link></h3>
          <ul class="meta-content">
            <li>by {{ item.author }}</li>
            <li>on <span>{{ item.posted_at | date }}</span></li>
          </ul>
          <div class="text">{{ item.description }}</div>
          <div class="link"><nuxt-link :to="`/news/${item.id}`" class="theme-btn-three">阅读</nuxt-link></div>
        </div>
      </div>
    </div>
    <div v-if="data.length === 0" class="col-lg-12 col-md-12 col-sm-12 news-column"><p>暂无文章</p></div>
  </div>
</template>

<script>
import moment from 'moment'

export default {
  name: 'NewsList',
  filters: {
    date(val) {
      if (val === '' || val === undefined || val === null) {
        return '-'
      } else {
        return moment(val).format('YYYY-MM-DD')
      }
    }
  },
  props: {
    data: {
      type: Array,
      default: function() {
        return []
      }
    }
  }
}
</script>
