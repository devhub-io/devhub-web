<template>
  <nav aria-label="breadcrumb">
    <ol class="breadcrumb">
      <li class="breadcrumb-item"><nuxt-link to="/">Home</nuxt-link></li>
      <li class="breadcrumb-item"><nuxt-link to="/news">News</nuxt-link></li>
      <li class="breadcrumb-item active" aria-current="page">{{ date }}</li>
    </ol>
  </nav>
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
