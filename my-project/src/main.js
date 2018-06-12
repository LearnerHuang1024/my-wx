import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false
App.mpType = 'app'

const app = new Vue(App)
app.$mount()

export default {
  // 这个字段走 app.json
  config: {
    // 页面前带有 ^ 符号的，会被编译成首页，其他页面可以选填，我们会自动把 webpack entry 里面的入口页面加进去
    pages: ['pages/logs/main', 'pages/index/main', 'pages/work/main', '^pages/server/main', 'pages/shop/main', 'pages/mine/main'],
    window: {
      'navigationBarBackgroundColor': '#d81e06',
      'navigationBarTextStyle': 'white',
      'backgroundColor': '#ffffff',
      'backgroundTextStyle': 'dark'
    },
    tabBar: {
      list: [{
        pagePath: 'pages/server/main',
        text: '服务',
        iconPath: './static/icon/server.png',
        selectedIconPath: './static/icon/selectserver.png'
      }, {
        pagePath: 'pages/work/main',
        text: '我参与',
        iconPath: './static/icon/join.png',
        selectedIconPath: './static/icon/selectjoin.png'
      }, {
        pagePath: 'pages/shop/main',
        text: '商店',
        iconPath: './static/icon/medal.png',
        selectedIconPath: './static/icon/selectmedal.png'
      }, {
        pagePath: 'pages/mine/main',
        text: '我的',
        iconPath: './static/icon/mine.png',
        selectedIconPath: './static/icon/selectmine.png'
      }],
      selectedColor: '#d81e06',
      color: '#8a8a8a',
      backgroundColor: '#fff'
    }
  }
}
