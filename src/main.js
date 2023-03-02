import { createApp } from 'vue'
import App from './App.vue'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faUserSecret, faPhone, faEnvelope, faHand } from '@fortawesome/free-solid-svg-icons'

library.add(faUserSecret, faPhone, faEnvelope, faHand)
createApp(App)
.component('font-awesome-icon', FontAwesomeIcon)
.mount('#app')