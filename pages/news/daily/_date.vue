<template>
  <News :news="news" :date="date" />
</template>

<script>
import { getNews } from '@/api/repos'
import News from '@/components/business/news'

export default {
  layout: 'default',
  components: { News },
  async asyncData({ params }) {
    const date = params.date
    const news = await getNews({ date })
    return { news, date }
  },
  head() {
    return {
      title: `News daily ${this.date}`
    }
  }
}
</script>
