<template>
  <ol class="breadcrumb">
    <li><nuxt-link to="/">Home</nuxt-link></li>
    <li><nuxt-link to="/list/popular">Repositories</nuxt-link></li>
    <li class="active">{{ title }}</li>
  </ol>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true
    }
  }
}
</script>
