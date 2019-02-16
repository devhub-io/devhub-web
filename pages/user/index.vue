<template>
  <section id="content">
    <div class="single-product-area">
      <div class="container">
        <div class="row">
          <div class="col-md-3">
            <div class="card">
              <img :src="user.avatar.length > 0 ? user.avatar + '&s=200' : '/img/200x200.png'" class="card-img-top" alt="...">
              <div class="card-body">
                <h5 class="card-title">{{ user.name }}</h5>
                <p class="card-text"><small class="text-muted">Last updated {{ user.last_activated_at | fromNow }}</small></p>
              </div>
            </div>
          </div>
          <div class="col-md-9">
            <ul class="nav nav-tabs">
              <li class="nav-item">
                <a class="nav-link active" href="#">Workflow</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Stars</a>
              </li>
            </ul>
            <div>
              1
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import Paginate from '@/components/general/paginate'

export default {
  layout: 'default',
  components: { Paginate },
  watchQuery: ['page', 'type'],
  async asyncData({ store }) {
    const user = await store.dispatch('getUser')
    const ecosystem = await store.dispatch('getStars')
    return { user, ecosystem }
  },
  head() {
    return {
      title: `Workflow - User`,
      meta: [
        { hid: 'description', name: 'description', content: 'User' }
      ]
    }
  },
  data() {
    return {
      suggestForm: {
        message: '',
        email: ''
      }
    }
  },
  mounted() {

  },
  methods: {

  }
}
</script>

<style scoped>

</style>
