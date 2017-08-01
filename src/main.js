import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)
import App from './App'


import iView from 'iview';
import 'iview/dist/styles/iview.css';



Vue.use(iView);

var router = new VueRouter()

// 导入vue-router配置项
import routerMap from './router-map.js'
routerMap(router)
router.start(App, '#app')
// 使用router管理，不需要实例化
// /* eslint-disable no-new */
// new Vue({
//   el: 'body',
//   components: { App }
// })
