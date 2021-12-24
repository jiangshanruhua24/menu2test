import Vue from 'vue'
import App from './App.vue'
import router from './router'
// import Menu from 'element-ui/packages/menu'
// import MenuItem from 'element-ui/packages/menu-item'
// import Submenu from 'element-ui/packages/submenu'
// import 'element-ui/lib/theme-chalk/menu.css';
// Vue.use(Menu)
// Vue.use(MenuItem)
// import ECharts from 'vue-echarts'
// Vue.use(ECharts)
// Vue.use(Submenu)
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
