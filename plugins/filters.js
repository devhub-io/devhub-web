import Vue from 'vue'
import moment from 'moment'

Vue.filter('link', val => `${process.env.API_URL}/link?target=${encodeURIComponent(val)}`)
Vue.filter('fromNow', (val) => { return moment(val).fromNow() })
Vue.filter('date', (val) => {
  if (val === '' || val === undefined || val === null) {
    return '-'
  } else {
    return moment(val).format('YYYY-MM-DD')
  }
})
