// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Methods from './Methods'
import one from './components/one.vue'
import HelloWorld from '@/components/HelloWorld'

Vue.config.productionTip = false
Vue.use(Methods, one)
// console.log(HelloWorld)
/* eslint-disable no-new */
const a = new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
// console.log(a)
