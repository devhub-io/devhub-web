<template>
  <ol class="breadcrumb">
    <li><nuxt-link to="/">Home</nuxt-link></li>
    <li><nuxt-link to="/news">News</nuxt-link></li>
    <li class="active">{{ date }}</li>
  </ol>
</template>

<script>
export default {
  props: {
    date: {
      type: String,
      required: true
    }
  }
}
</script>
