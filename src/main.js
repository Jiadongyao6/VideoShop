// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from '@/pages/App/App'
import router from './router'
import store from './vuex/store'
import axios from './http'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css' 
import Video from 'video.js'
import 'video.js/dist/video-js.css'
import {
  Container, Header, Aside, Main, Footer, Loading, Message, Menu,
  Submenu, MenuItem, MenuItemGroup, Badge, Form, FormItem,Input,
  InputNumber,Button,Tabs,TabPane
} from 'element-ui'

Vue.use(Loading.directive)
Vue.use(Container)
Vue.use(Header)
Vue.use(Aside)
Vue.use(Main)
Vue.use(Footer)
Vue.use(Loading)
Vue.use(Menu)
Vue.use(Submenu)
Vue.use(MenuItem)
Vue.use(MenuItemGroup)
Vue.use(Badge)
Vue.use(VueAwesomeSwiper)
Vue.use(Form)
Vue.use(FormItem)
Vue.use(Input)
Vue.use(InputNumber)
Vue.use(Button)
Vue.use(Tabs)
Vue.use(TabPane)

Vue.prototype.$loading = Loading.service;
Vue.prototype.$message = Message;
Vue.prototype.$ajax = axios;
Vue.config.productionTip = false;
Vue.prototype.$video = Video

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  components: { App },
  template: '<App/>'
})
