import Vue from 'vue'
import App from './App'
import router from './router'
import VueLazyload from 'vue-lazyload'
import {Button, Row, Col, Swipe, SwipeItem} from 'vant'
Vue.use(Button).use(Row).use(Col).use(Swipe).use(SwipeItem)
import 'common/stylus/index.styl'

Vue.config.productionTip = false
Vue.use(VueLazyload, {
    loading: require('./common/image/default.png')
})

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
