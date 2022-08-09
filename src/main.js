import { createApp } from 'vue'
import App from './App.vue'

import _axios from './plugins/axios'
import store from "./store"

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { faAngleRight } from '@fortawesome/free-solid-svg-icons'
import { faAngleDown } from '@fortawesome/free-solid-svg-icons'
import { faAngleUp } from '@fortawesome/free-solid-svg-icons'
import { faGlobe } from '@fortawesome/free-solid-svg-icons'

import { faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faFacebook } from '@fortawesome/free-brands-svg-icons'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faAppStore } from '@fortawesome/free-brands-svg-icons'
import { faGooglePlay } from '@fortawesome/free-brands-svg-icons'

/* add icons to the library */
library.add([faAngleRight, faInstagram, faGithub, faAngleDown, faGlobe, faTwitter, faFacebook, faAppStore, faGooglePlay, faAngleUp])

// tailwinds
import './index.css'

import router from './router'

// createApp(App).use(router).component('font-awesome-icon', FontAwesomeIcon).mount('#app')

const app = createApp(App)

app.config.globalProperties.$axios = _axios;
store.axios = _axios

app.use(router).use(store).component('font-awesome-icon', FontAwesomeIcon).mount('#app')