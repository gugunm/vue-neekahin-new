import { createApp } from 'vue'

import './firebase'
import App from './App.vue'
import router from './router'
import store from './store'

import './css/main.css'

import VueScrollTo from 'vue-scrollto';
import VueFire from 'vuefire';

/* Fetch sample data */
store.dispatch('fetchClients')

/* Default title tag */
const defaultDocumentTitle = 'Neekah Invitation'

/* Collapse mobile aside menu on route change & set document title from route meta */
router.beforeEach(to => {
  store.dispatch('asideMobileToggle', false)
  store.dispatch('asideLgToggle', false)

  store.dispatch('formScreenToggle', !!to.meta.formScreen)
})

router.afterEach(to => {
  if (to.meta && to.meta.title) {
    document.title = `${to.meta.title} — ${defaultDocumentTitle}`
  } else {
    document.title = defaultDocumentTitle
  }
})

createApp(App).use(VueFire).use(store).use(router).use(VueScrollTo).mount('#app')
