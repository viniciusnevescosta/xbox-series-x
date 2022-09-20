import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

createApp(App).mount('#app')

import ScrollReveal from 'scrollreveal'

ScrollReveal({ reset: true })

ScrollReveal().reveal('.headline', { duration: 1000, interval: 100 })
