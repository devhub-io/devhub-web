<template>
  <nav aria-label="breadcrumb">
    <ol class="breadcrumb">
      <li class="breadcrumb-item"><nuxt-link to="/">Home</nuxt-link></li>
      <li class="breadcrumb-item"><nuxt-link to="/list/popular">Repositories</nuxt-link></li>
      <li class="breadcrumb-item active" aria-current="page">{{ title }}</li>
    </ol>
  </nav>
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
