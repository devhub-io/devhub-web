<template>
  <section id="content">
    <div class="single-product-area">
      <div class="container">
        <div class="row">
          <div class="col-md-9">
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
      title: `Workflow`
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
