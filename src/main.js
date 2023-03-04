import { createApp } from 'vue'
import App from './App.vue'
import './css/index.css'

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faUserSecret, faPhone, faEnvelope, faHand } from '@fortawesome/free-solid-svg-icons'

library.add(faUserSecret, faPhone, faEnvelope, faHand)
createApp(App)
.component('font-awesome-icon', FontAwesomeIcon)
.mount('#app')