<template>
  <nav aria-label="Page navigation">
    <ul v-if="page > 0" class="pagination">
      <li v-if="page - 1 >= 1" class="page-item">
        <nuxt-link :to="makeUrl(page - 1)" aria-label="Previous" class="page-link">
          <span aria-hidden="true">&laquo;</span>
          <span class="sr-only">Previous</span>
        </nuxt-link>
      </li>
      <li v-if="page - 2 >= 1" class="page-item"><nuxt-link :to="makeUrl(page - 2)" class="page-link">{{ page - 2 }}</nuxt-link></li>
      <li v-if="page - 1 >= 1" class="page-item"><nuxt-link :to="makeUrl(page - 1)" class="page-link">{{ page - 1 }}</nuxt-link></li>
      <li class="active page-item"><a :href="void(0)" class="page-link">{{ page }}</a></li>
      <li v-if="page + 1 <= lastPage" class="page-item"><nuxt-link :to="makeUrl(page + 1)" class="page-link">{{ page + 1 }}</nuxt-link></li>
      <li v-if="page + 2 <= lastPage" class="page-item"><nuxt-link :to="makeUrl(page + 2)" class="page-link">{{ page + 2 }}</nuxt-link></li>
      <li v-if="page + 1 <= lastPage" class="page-item">
        <nuxt-link :to="makeUrl(page + 1)" aria-label="Next" class="page-link">
          <span aria-hidden="true">&raquo;</span>
          <span class="sr-only">Next</span>
        </nuxt-link>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  props: {
    page: {
      type: Number,
      required: true
    },
    total: {
      type: Number,
      required: true
    },
    lastPage: {
      type: Number,
      required: true
    },
    baseUrl: {
      type: String,
      required: true
    }
  },
  methods: {
    makeUrl(page) {
      if (/\?/.test(this.baseUrl)) {
        return `${this.baseUrl}&page=${page}`
      } else {
        return `${this.baseUrl}?page=${page}`
      }
    }
  }
}
</script>
