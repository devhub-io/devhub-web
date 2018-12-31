<template>
  <!-- START: LOGIN/REGISTER -->
  <div class="container login-row">
    <div class="row clear-padding login-box">
      <div class="col-md-6 login-form">
        <h4>登录</h4>
        <form method="post">
          <label>手机号</label>
          <div class="input-group">
            <input v-model="loginForm.mobile" name="mobile" type="text" class="form-control" placeholder="手机号" minlength="11" maxlength="11" required>
            <span class="input-group-addon"><i class="fa fa-envelope-o fa-fw"/></span>
          </div>
          <label>密码</label>
          <div class="input-group">
            <input v-model="loginForm.password" name="password" type="password" class="form-control" placeholder="密码" minlength="6" required>
            <span class="input-group-addon"><i class="fa fa-eye fa-fw"/></span>
          </div>
          <button type="button" @click="submitLogin">登录 <i class="fa fa-sign-in"/></button>
        </form>
      </div>
      <div class="col-md-6 sign-up-form">
        <h4>注册</h4>
        <form method="post">
          <label>手机号</label>
          <div class="input-group">
            <input v-model="registerForm.mobile" name="mobile" type="text" class="form-control" placeholder="手机号" minlength="11" maxlength="11" required>
            <span class="input-group-addon"><i class="fa fa-envelope-o fa-fw"/></span>
          </div>
          <label>密码</label>
          <div class="input-group">
            <input v-model="registerForm.password" name="password" type="password" class="form-control" placeholder="密码" minlength="6" required>
            <span class="input-group-addon"><i class="fa fa-eye fa-fw"/></span>
          </div>
          <label>确认密码</label>
          <div class="input-group">
            <input v-model="registerForm.password_confirmation" name="password_confirmation" type="password" class="form-control" minlength="6" required placeholder="再次输入密码">
            <span class="input-group-addon"><i class="fa fa-eye fa-fw"/></span>
          </div>
          <input name="tc" type="checkbox"> I agree To Terms & Conditions
          <button type="button" @click="submitRegister">注册 <i class="fa fa-edit"/></button>
        </form>
      </div>
    </div>
  </div>
  <!-- END: LOGIN/REGISTER -->
</template>

<script>
import { requestLogin, createUser } from '@/api/user'

export default {
  data() {
    return {
      loginForm: {
        mobile: '',
        password: ''
      },
      registerForm: {
        mobile: '',
        password: '',
        password_confirmation: ''
      }
    }
  },
  methods: {
    submitLogin() {
      requestLogin(this.loginForm).then(res => {
        if (res.code === 200) {
          this.$storage.setUniversal('token', res.token)
          this.$emit('loginSuccess', res)
        } else {
          this.$Alert.info({ content: res.message })
        }
      })
    },
    submitRegister() {
      this.registerForm.partner_id = process.env.PARTNER_ID
      createUser(this.registerForm).then(res => {
        if (res.code === 200) {
          this.$storage.setUniversal('token', res.token)
          this.$emit('registerSuccess', res)
        } else {
          this.$Alert.info({ content: res.message })
        }
      })
    }
  }
}
</script>

<style scoped>
  .login-row {
    padding: 60px 0px;
  }
  .useful-links h4,
  .login-form h4,
  .sign-up-form h4 {
    font-weight: 800;
    text-transform: uppercase;
    color: #f9676b;
    margin-bottom: 20px;
  }
  .useful-links {
    border-right: 1px solid #e6e6e6;
    line-height: 2;
  }
  .useful-links a {
    display: block;
    color: #07253F;
  }
  .useful-links a:hover {
    color: #f9676b;
  }
  .login-form ,
  .sign-up-form {
    padding-left: 45px;
  }
  .login-form  label,
  .sign-up-form label {
    font-weight: normal;
  }
  .login-form .form-control ,
  .sign-up-form .form-control {
    border-radius: 0;
    height: 40px;
    padding: 10px;
  }
  .login-form .input-group ,
  .sign-up-form .input-group {
    margin-bottom: 15px;
  }
  .login-form .input-group-addon,
  .sign-up-form .input-group-addon {
    border-radius: 0;
    height: 40px;
    background: #e6e6e6;
  }
  .login-form button,
  .sign-up-form button {
    background: #f9676b none repeat scroll 0 0;
    border: medium none;
    border-radius: 0;
    color: #fff;
    display: block;
    font-weight: bold;
    margin-top: 30px;
    padding: 10px 30px;
  }
  .login-form button:hover,
  .sign-up-form button:hover {
    background: #00adef;
  }
  .login-form button i,
  .sign-up-form button i  {
    margin-left: 5px;
  }
  @media (max-width: 767px) {
    .login-form ,
    .sign-up-form {
      padding: 0 15px;
      margin-top: 45px;
    }
  }
</style>
