import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
//初始化页面
import 'normalize.css/normalize.css'
//使用flexible适配
import 'lib-flexible'
//禁止微信修改默认字体
import "@/assets/js/ban_wechat_fontsize.js"

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
