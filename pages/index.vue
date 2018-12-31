<template>
  <div>1</div>
</template>

<script>
// import { getArticles } from '@/api/repos'
import moment from 'moment'

export default {
  async asyncData() {
    // const images = await getImages({ folder_id: 2 }).then(res => {
    //   if (res.code === 200) {
    //     return res.data
    //   } else {
    //     return []
    //   }
    // })

    return { articles: [] }
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
  created() {
    if (process.browser) {
      (function(s, o, g, r, a, m) {
        a = s.createElement(o)
        m = s.getElementsByTagName(o)[0]
        a.async = 1
        a.src = g
        m.parentNode.insertBefore(a, m)
      })(document, 'script', '/js/script.js', 'jq')
    }
  },
  methods: {
    tabClick(index) {
      this.tabIndex = index
    }
  }
}
</script>
