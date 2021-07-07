import Vue from 'vue'
import App from './App.vue'
import router from './router'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import ConfigForm from '@/components/ConfigForm'

Vue.use(ElementUI);
Vue.component(ConfigForm.name, ConfigForm)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
