<template>
  <nav aria-label="Page navigation">
    <ul v-if="page > 0" class="pagination">
      <li v-if="page - 1 >= 1">
        <nuxt-link :to="makeUrl(page - 1)" aria-label="Previous">
          <span aria-hidden="true">&laquo;</span>
        </nuxt-link>
      </li>
      <li v-if="page - 2 >= 1"><nuxt-link :to="makeUrl(page - 2)">{{ page - 2 }}</nuxt-link></li>
      <li v-if="page - 1 >= 1"><nuxt-link :to="makeUrl(page - 1)">{{ page - 1 }}</nuxt-link></li>
      <li class="active"><a :href="void(0)">{{ page }}</a></li>
      <li v-if="page + 1 <= lastPage"><nuxt-link :to="makeUrl(page + 1)">{{ page + 1 }}</nuxt-link></li>
      <li v-if="page + 2 <= lastPage"><nuxt-link :to="makeUrl(page + 2)">{{ page + 2 }}</nuxt-link></li>
      <li v-if="page + 1 <= lastPage">
        <nuxt-link :to="makeUrl(page + 1)" aria-label="Next">
          <span aria-hidden="true">&raquo;</span>
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
