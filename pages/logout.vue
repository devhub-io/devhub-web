<template>
  <div>Logout</div>
</template>

<script>
export default {
  mounted() {
    this.$storage.removeUniversal('token')
    this.$router.push('/login')
  }
}
</script>
