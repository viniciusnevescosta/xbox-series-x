import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { autoAnimatePlugin } from '@formkit/auto-animate/vue'

createApp(App).use(autoAnimatePlugin).mount('#app')

const observer = new IntersectionObserver((entries) => {
    entries.forEach((e) => {
        if (e.isIntersecting) {
            e.target.classList.add('opacity-100')
        } else {
            e.target.classList.remove('opacity-100')
        }
    })
})

const hiddenItens = document.querySelectorAll('.opacity-0')
hiddenItens.forEach((e) => observer.observe(e))
