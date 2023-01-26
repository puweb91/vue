import { createApp } from 'vue'
import App from './App.vue'
import { router } from './routes/router'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faHatWizard } from '@fortawesome/free-solid-svg-icons'
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'

library.add(faHatWizard)

createApp(App)
  .use(router)
  .component('Header', Header)
  .component('Footer', Footer)
  .component('font-awesome-icon', FontAwesomeIcon)
  .mount('#app')
