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
                <a :class="{'nav-link': true, active: tab === 'workflow' }" href="/user?tab=workflow">Workflow</a>
              </li>
              <li class="nav-item">
                <a :class="{'nav-link': true, active: tab === 'stars' }" href="/user?tab=stars">Stars</a>
              </li>
            </ul>
            <div v-if="tab === 'workflow'">
              <div class="container workflow-tab">
                <div class="row">
                  <button class="btn btn-info btn-opt">Add workflow</button>
                </div>
                <div class="row">
                  <div class="col-md-12">
                    <h3>11111</h3>
                  </div>
                </div>
              </div>
            </div>
            <div v-else-if="tab === 'stars'">
              <section id="top" class="tab-block">
                <div class="container">
                  <div v-for="(item, index) in stars.rows" :key="'stars' + index" class="row">
                    <div class="col-md-3 title"> <nuxt-link :to="`/repos/${item.foreign.slug}`">{{ item.foreign.owner }} / {{ item.foreign.repo }} </nuxt-link></div>
                    <div class="col-md-6 desc"> <span><i class="fas fa-star"/>  {{ item.foreign.stargazers_count }}</span> {{ item.foreign.description }} </div>
                    <div class="col-md-1"><button class="btn btn-info btn-opt" @click="changeStar(item.foreign_id)">Unstar</button></div>
                  </div>
                </div>
              </section>
            </div>
            <div v-else>
              &nbsp;
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
  async asyncData({ store, query }) {
    const user = await store.dispatch('getUser')
    const tab = query.tab || 'workflow'
    const stars = await store.dispatch('getStars')
    return { user, stars, tab }
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
    changeStar(id) {
      this.$store.dispatch('star', { type: 'repos', foreign_id: id, star: 0 })
        .then(async() => {
          this.stars = await this.$store.dispatch('getStars')
        })
        .catch(e => {
          if (e.response && e.response.status === 401) {
            this.$store.dispatch('showLoginModal')
          }
        })
    }
  }
}
</script>

<style scoped>
  .tab-block {
    padding: 50px 0 50px !important;
  }
  .btn-opt {
    font-size: 12px;
    padding: 5px 15px;
    color: #fff
  }
  .workflow-tab {
    margin-top: 25px;
  }
</style>
