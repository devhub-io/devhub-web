<template>
  <div />
</template>

<script>
export default {
  layout: 'empty',
  created() {
    this.$store.dispatch('LogOut').then(() => {
      this.$router.push({ path: '/' })
    }).catch(() => {
      this.$router.push({ path: '/' })
    })
  }
}
</script>
