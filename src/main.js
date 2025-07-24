import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import PrimeVue from 'primevue/config'
import Componentes from './primevue'
import 'primeicons/primeicons.css'
import '@/assets/styles.scss'

// const app = createApp(App)

// app.use(router)

// app.mount('#app')

const app = createApp(App)
app.use(PrimeVue, { inputStyle: 'filled' })
app.use(router)

Object.entries(Componentes).forEach(([name, component]) => {
  app.component(name, component)
})

app.mount('#app')
