<template>
  <div>
    <page-title title="登录/注册" />
    <login @registerSuccess="registerSuccess" @loginSuccess="registerSuccess" />
  </div>
</template>

<script>
import PageTitle from '@/components/general/page-title'
import Login from '@/components/business/login'
import { getUser } from '@/api/user'

export default {
  components: { Login, PageTitle },
  created() {
    const token = this.$storage.getUniversal('token')
    if (token !== undefined && token !== null && token !== '') {
      this.checkToken()
    }
  },
  methods: {
    registerSuccess() {
      this.$router.push('/user')
    },
    loginSuccess() {
      this.$router.push('/user')
    },
    checkToken() {
      getUser().then(res => {
        if (res.code === 200) {
          this.$router.push('/user')
        } else if (res.code === 40001 || res.code === 40002 || res.code === 40003) {
          return false
        }
      })
    }
  }
}
</script>
