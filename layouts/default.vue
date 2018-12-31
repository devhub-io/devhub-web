<template>
  <div class="boxed_wrapper">
    <nuxt/>
  </div>
</template>

<script>
// import HeaderNav from '~/components/general/nav.vue'

export default {
  // components: {
  //   HeaderNav
  // },
  data() {
    return {
      isLogin: false
    }
  },
  created() {
    const token = this.$storage.getUniversal('token')
    if (token !== undefined && token !== null && token !== '') {
      this.isLogin = true
    }
  }
}
</script>
