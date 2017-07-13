// import foo from './src/foo.vue'
// foo.el = '#root'
// export default new Vue(foo);

import App from './src/App.vue'
import router from './router'
import store from './src/store'
import { sync } from 'vuex-router-sync'

sync(store, router)

new Vue(Vue.util.extend({
  el: '#root',
  router,
  store
}, App))

router.push('/')

// App.el = '#root'
// export default new Vue(App)

