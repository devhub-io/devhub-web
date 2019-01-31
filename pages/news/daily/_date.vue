<template>
  <News :news="news" :date="date" />
</template>

<script>
import News from '@/components/business/news'

export default {
  layout: 'default',
  components: { News },
  async asyncData({ params, store }) {
    const date = params.date
    const news = await store.dispatch('getNews', { date })
    return { news, date }
  },
  head() {
    return {
      title: `News daily ${this.date}`
    }
  }
}
</script>
