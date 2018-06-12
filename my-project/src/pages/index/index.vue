<template>
  <div class="appcontainer logincontainer">
    <div class="laginbox">
      <h1>请先登录</h1>
      <form>
        <input type="text" placeholder="请输入微信账号" v-model="name" :adjust-position="false" bindinput>
        <input type="password" placeholder="请输入微信密码" v-model="password">
      </form>
      <div class="buttonbox">
        <button open-type="openSetting">打开授权设置页</button>
        <button @click="userLogin">登录</button>
        <button @click="toWork">登录</button>
        <button open-type="getUserInfo" lang="zh_CN" @getuserinfo="getUserinfo">获取用户信息</button>
      </div>
    </div>
    
  </div>
</template>

<script>
export default {
  data () {
    return {
      name: '',
      password: ''
    }
  },
  methods: {
    getUserinfo () {
      wx.getSetting({
        success (res) {
          console.log(res)
        },
        fail (res) {
          console.log(res)
        }
      })
    },
    onGotUserInfo (e) {
      console.log(e.detail.errMsg)
      console.log(e.detail.userInfo)
      console.log(e.detail.rawData)
    },
    userLogin () {
      wx.login({
        success (res) {
          let code = res.code
          if (code) {
            console.log('获取用户登录凭证：' + code)
          } else {
            console.log('获取用户登录态失败：' + res.errMsg)
          }
        }
      })
    },
    toWork () {
      wx.navigateTo({
        url: '../work/main'
      })
    }
  },
  created () {
    this.getUserinfo()
    this.userLogin()
  }
}
</script>

<style scoped>
.laginbox{background: rbg(251,249,254)}
h1{font-size: 100rpx;margin:50rpx 0 100rpx 0;text-align: center}
input{text-align: center;width: 600rpx;height:80rpx;margin: 10rpx auto;border:1rpx solid #666666;border-radius: 10rpx}
.buttonbox{margin-top: 100rpx;}
button{margin-top: 10rpx;width: 600rpx;background: rgb(243, 126, 87);color: #ffffff;border: none}
</style>
