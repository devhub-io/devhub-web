<template>
  <News :news="news" :date="date" />
</template>

<script>
import moment from 'moment'
import News from '@/components/business/news'

export default {
  layout: 'default',
  components: { News },
  async asyncData({ store }) {
    const news = await store.dispatch('getNews', {})
    const date = moment().format('YYYY-MM-DD')
    return { news, date }
  },
  head() {
    return {
      title: 'News'
    }
  }
}
</script>
