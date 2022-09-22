import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

import { createSSRApp } from 'vue'
import { LazyHydrationWrapper } from 'vue3-lazy-hydration'
const app = createSSRApp({})

app.component(
    // custom registered name
    'LazyHydrate',
    LazyHydrationWrapper
)

createApp(App).mount('#app')

// scrollreveal
import ScrollReveal from 'scrollreveal'
ScrollReveal({ reset: true })
ScrollReveal().reveal('.headline', { duration: 1000, interval: 100 })
