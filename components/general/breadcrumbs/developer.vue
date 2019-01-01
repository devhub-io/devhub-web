<template>
  <ol class="breadcrumb">
    <li><nuxt-link to="/">Home</nuxt-link></li>
    <li><nuxt-link to="/developers">Developers</nuxt-link></li>
    <li class="active">{{ name }}({{ login }})</li>
  </ol>
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
