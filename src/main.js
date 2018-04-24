import Vue from 'vue'
import App from './App'
import router from './router'
import {Button, Row, Col} from 'vant'
Vue.use(Button).use(Row).use(Col)
import 'common/stylus/index.styl'
Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
