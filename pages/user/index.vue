<template>
  <section id="content">
    <div class="single-product-area">
      <div class="container">
        <div class="row">
          <div class="col-md-3">
            <div class="card">
              <img :src="true ? 'https://avatars0.githubusercontent.com/u/1270641?s=460&v=4' + '&s=200' : '/img/200x200.png'" class="card-img-top" alt="...">
              <div class="card-body">
                <h5 class="card-title">Username</h5>
                <p class="card-text"><i class="fas fa-star"/> ...</p>
                <p class="card-text">....</p>
                <p class="card-text"><small class="text-muted">Last updated {{ new Date()| fromNow }}</small></p>
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
// import { getEcosystem } from '@/api/ecosystem'
import Paginate from '@/components/general/paginate'
// import { feedback } from '@/api/site'

export default {
  layout: 'default',
  components: { Paginate },
  watchQuery: ['page', 'type'],
  async asyncData({ params }) {
    const ecosystem = {}
    return ecosystem
  },
  head() {
    return {
      title: `Overview - User`,
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
