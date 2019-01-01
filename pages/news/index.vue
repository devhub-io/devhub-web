<template>
  <News :news="news" :date="date" />
</template>

<script>
import { getNews } from '@/api/repos'
import moment from 'moment'
import News from '@/components/business/news'

export default {
  layout: 'default',
  components: { News },
  async asyncData() {
    const news = await getNews().then(res => {
      return res
    })
    const date = moment().format('YYYY-MM-DD')
    return { news, date }
  }
}
</script>
