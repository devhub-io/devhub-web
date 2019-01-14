<template>
  <nav aria-label="breadcrumb">
    <ol class="breadcrumb">
      <li class="breadcrumb-item"><nuxt-link to="/">Home</nuxt-link></li>
      <li class="breadcrumb-item"><nuxt-link to="/developers">Developers</nuxt-link></li>
      <li class="breadcrumb-item active" aria-current="page">{{ name }}({{ login }})</li>
    </ol>
  </nav>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      required: true
    },
    login: {
      type: String,
      required: true
    }
  }
}
</script>
