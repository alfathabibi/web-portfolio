import { createApp } from 'vue'
import { MotionPlugin } from 'motion-v'
import App from './App.vue'
import './style.css'

createApp(App).use(MotionPlugin, { reducedMotion: 'user' }).mount('#app')
