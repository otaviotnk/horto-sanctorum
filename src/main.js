import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import { loadFonts } from './plugins/webfontloader'
import { i18n } from './plugins/i18n'

loadFonts()

createApp(App)
  .use(router)
  .use(store)
  .use(i18n)
  .use(vuetify)
  .mount('#app')





