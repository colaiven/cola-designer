<template>
  <div class="login-container">
    <el-form ref="loginForm" :model="loginForm" size="small" :rules="loginRules"
             class="login-form" auto-complete="on" label-position="left">
      <div style="position: relative;">
        <h3 class="title">ColaDesigner</h3>
      </div>
      <el-form-item prop="username">
        <div class="formDiv">
          <div class="formLabel"> <i class="el-icon-user-solid"></i> </div>
          <input class="ipt" v-model="loginForm.username" placeholder="用户名"/>
        </div>
      </el-form-item>
      <el-form-item prop="password">
        <div class="formDiv">
          <div class="formLabel"> <i class="el-icon-lock"></i> </div>
          <input class="ipt"  v-model="loginForm.password" autocomplete="new-password"
                    :type="passwordType" placeholder="密码" @keyup.enter="handleLogin" />
          <span class="show-pwd" @click="showPwd">
              <i :class="passwordType === 'password' ? 'el-icon-view' : 'el-icon-more'" />
          </span>
        </div>
      </el-form-item>
      <el-row :gutter="12">
        <el-col :span="18">
          <el-form-item prop="username">
            <div class="formDiv">
              <div class="formLabel"> <i class="el-icon-info"></i> </div>
              <input class="ipt" v-model="loginForm.authCode" placeholder="验证码" @keyup.enter="handleLogin" />
            </div>
          </el-form-item>
        </el-col>
        <el-col :span="6">
         <el-image :src="baseUrl+'/sysCode/getCodeImg?time='+time" @click="time = new Date().getTime()"/><!-- time刷新作用-->
        </el-col>
      </el-row>
      <el-button :loading="loading" type="primary" style="width:100%;margin-bottom:30px;" @click.native.prevent="handleLogin">登 录</el-button>
    </el-form>
  </div>
</template>

<script>

import env from '/env'
import {login} from '@/api/user'
import {setToken} from "@/utils/auth";

export default {
  name: 'Login',
  data() {
    const validateUsername = (rule, value, callback) => {
      callback()
    }
    const validatePassword = (rule, value, callback) => {
      if (value.length < 4) {
        callback(new Error('密码非法'))
      } else {
        callback()
      }
    }
    return {
      loginForm: { username: 'admin',password: '0000',authCode:'' },
      loginRules: {
        username: [{ required: true, trigger: 'blur', validator: validateUsername }],
        password: [{ required: true, trigger: 'blur', validator: validatePassword }]
      },
      loading: false,
      passwordType: 'password',
      redirect: undefined,
      baseUrl: env.baseUrl,
      time:''
    }
  },
  watch: {
    $route: {
      handler: function(route) {
        this.redirect = route.query && route.query.redirect
      },
      immediate: true
    }
  },
  methods: {
    showPwd() {
      if (this.passwordType === 'password') {
        this.passwordType = ''
      } else {
        this.passwordType = 'password'
      }
      this.$nextTick(() => {
        this.$refs.password.focus()
      })
    },
    handleLogin() {
      this.$refs.loginForm.validate(valid => {
        if (valid) {
          let Base64 = require('js-base64').Base64
          this.loading = true;
          let loginParam = JSON.parse(JSON.stringify(this.loginForm))
          loginParam.password = Base64.encode(loginParam.password)

          login(loginParam).then(res => {
            localStorage.setItem('userinfo', JSON.stringify(res.data))
            setToken(res.data.token)
            this.$router.push({ path: this.redirect || '/' })
            this.loading = false
          }).catch(error => {
            console.log(error)
            this.time = new Date().getTime()
            this.loading = false
          })
        } else {
          console.log('error submit!!')
          return false
        }
      })
    }
  }
}
</script>


<style scoped>
.login-container { min-height: 100%; width: 100%; background-color: #2d3a4b; overflow: hidden;}
.login-form { position: relative; width: 460px; max-width: 100%;
  padding: 160px 35px 0 35px; margin: 0 auto; overflow: hidden;}
.title { font-size: 26px; color: #eee; margin: 0 auto 40px auto; text-align: center; font-weight: bold;}
.show-pwd { position: absolute; right: 10px; top: 5px; font-size: 16px; color: #889aa4;
  cursor: pointer; user-select: none;}
.formDiv{background-color: #283443;border: 1px solid #3F4B5F;border-radius: 6px;height: 46px;}
.formLabel{display: inline-block;width: 30px;font-size: 18px;color: #889aac;text-align: right}
.ipt{ display: inline-block;width: 80%;height: 100%;font-size: 15px; color: #fff;padding-left: 10px;border: none;
  background: #0000;outline:none}
.ipt::-ms-reveal{ display:none}
</style>
