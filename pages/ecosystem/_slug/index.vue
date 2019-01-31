<template>
  <section id="content">
    <div class="single-product-area">
      <div class="container">
        <h1 class="text-center ecosystem-title">{{ topic.title }} <span class="sub-title">ecosystem</span></h1>
        <div class="row">
          <div class="col-md-12 ecosystem-links">
            <span v-if="topic.homepage">
              <a :href="topic.homepage | link" target="_blank" rel="nofollow"><i class="fas fa-link mini"/> Homepage</a>
            </span>
            <span v-if="topic.github">
              <a :href="topic.github | link" target="_blank" rel="nofollow"><i class="fas fa-link mini"/> Github</a>
            </span>
          </div>
          <div class="col-md-12 ecosystem-suggest">
            <a v-b-modal.suggestModal href="#">Suggest edits</a>
          </div>
        </div>
        <div class="row">
          <div class="col-md-7 wiki-block">
            <div v-if="wiki" class="wiki">{{ wiki.summary }}</div>
            <a v-if="topic.wiki" :href="topic.wiki | link" target="_blank" class="wiki-link" rel="nofollow">Wikipedia</a>
          </div>
          <div v-if="attributes.length > 0" class="col-md-5">
            <div class="card card-body">
              <div v-for="item in attributes" :key="item.id" class="row attr-row">
                <div class="col-md-5">{{ item.key }}:</div>
                <div class="col-md-7">{{ item.value }}</div>
              </div>
            </div>
          </div>
        </div>
        <div class="card-columns">
          <div v-for="item in collections" :key="item.id" class="card text-center">
            <div class="card-body">
              <h5 class="card-title">
                <nuxt-link :to="`/ecosystem/${slug}/${item.slug}`" class="root-collection">{{ item.title }}</nuxt-link>
              </h5>
              <div class="card-text">
                <div class=" card-columns">
                  <nuxt-link v-for="two in item.children" :key="two.id" :to="`/ecosystem/${slug}/${two.slug}`">
                    <div class="card text-center">
                      <div class="card-body">
                        <h6 class="card-title">{{ two.title }}</h6>
                      </div>
                    </div>
                  </nuxt-link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <b-modal id="suggestModal" ref="suggestModal" title="Suggest edits" ok-title="Send" @ok="suggest">
      <form id="suggest-form" style="padding:10px;" method="get" role="form" class="form-horizontal bv-form" novalidate="novalidate">
        <div class="form-group mcq_input has-feedback">
          <div class="form-group">
            {{ topic.title }} ecosystem
          </div>
          <div class="form-group">
            <textarea v-model="suggestForm.message" class="form-control" rows="3" placeholder="Send us your suggestions..."/>
          </div>
          <div class="form-group">
            <input v-model="suggestForm.email" type="email" class="form-control" placeholder="Your email address">
          </div>
        </div>
      </form>
    </b-modal>
  </section>
</template>

<script>
import Paginate from '@/components/general/paginate'

export default {
  layout: 'default',
  components: { Paginate },
  watchQuery: ['page', 'type'],
  async asyncData({ params, store }) {
    const slug = params.slug
    const ecosystem = await store.dispatch('getEcosystem', slug)
    ecosystem.slug = slug
    return ecosystem
  },
  head() {
    return {
      title: `${this.topic.title} - Ecosystem`,
      meta: [
        { hid: 'description', name: 'description', content: this.topic.description }
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
  methods: {
    suggest(evt) {
      evt.preventDefault()
      if (this.suggestForm.message === '') {
        this.$Alert.info({ content: 'Please input message' })
        return false
      }
      if (this.suggestForm.email === '') {
        this.$Alert.info({ content: 'Please input email' })
        return false
      }
      if (!/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(this.suggestForm.email)) {
        this.$Alert.info({ content: 'Invalid email' })
        return false
      }
      const params = Object.assign({}, this.suggestForm)
      params.tags = 'ecosystem_suggest'
      params.properties = {
        title: this.topic.title,
        slug: this.topic.slug
      }
      this.$store.dispatch('feedback', params)
        .then(() => {
          this.$Alert.info({ content: 'Feedback sent!' })
          this.$refs.suggestModal.hide()
          this.suggestForm = {
            message: '',
            email: ''
          }
        })
        .catch(() => {
          this.$Alert.info({ content: 'Validation Failed' })
        })
    }
  }
}
</script>

<style scoped>
  .ecosystem-title {
    font-size: 2.5rem;
    border-bottom: 1px solid rgba(0,0,0,.125);
    padding-bottom: 20px;
  }
  .ecosystem-title a {
    color: #212529 !important;
  }
  .ecosystem-links {
    font-size: 1rem;
    margin-bottom: 10px;
    text-align: right;
    line-height: 52px;
    margin-top: 0;
  }
  .ecosystem-links span {
    margin-left: 15px;
  }
  .ecosystem-suggest {
    font-size: 1rem;
    text-align: right;
    line-height: 12px;
    margin-bottom: 15px;
    margin-top: 0;
  }
  .sub-title {
    color: #7f828b;
    font-size: 1.8rem;
  }
  .wiki {
    overflow-y: hidden;
  }
  .wiki-block {
    margin-bottom: 25px;
  }
  .collection {
    text-align: center;
  }
  .mini {
    font-size: 10px;
  }
  .attr-row {
    margin-bottom: 15px;
  }
  .root-collection {
    margin-bottom: 15px;
  }
  .card-columns {
    column-count: 2;
  }
</style>
