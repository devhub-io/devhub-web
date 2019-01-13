<template>
  <div />
</template>

<script>
export default {
  layout: 'empty',
  created() {
    const token = this.$route.query.token || ''
    if (token.length > 0) {
      this.$store.dispatch('LoginByToken', token).then(() => {
        this.$router.push({ path: '/' })
      }).catch(() => {
        this.$router.push({ path: '/login' })
      })
    } else {
      this.$router.push({ path: '/login' })
    }
  }
}
</script>
