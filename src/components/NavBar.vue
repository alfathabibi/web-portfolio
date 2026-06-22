<template>
  <nav :class="['navbar', { scrolled: isScrolled }]">
    <div class="nav-container">
      <a href="#" class="nav-logo" @click.prevent="$emit('navigate', 'hero')">
        <span class="logo-bracket">&lt;</span>
        <span class="logo-text">Alfath</span>
        <span class="logo-bracket">/&gt;</span>
      </a>

      <button class="nav-toggle" @click="isOpen = !isOpen" :class="{ active: isOpen }">
        <span></span>
        <span></span>
        <span></span>
      </button>

      <ul :class="['nav-links', { open: isOpen }]">
        <li v-for="link in links" :key="link.id">
          <a
            :href="'#' + link.id"
            @click.prevent="navigate(link.id)"
            :class="{ active: activeSection === link.id }"
          >
            {{ link.label }}
          </a>
        </li>
        <li>
          <button class="theme-toggle" @click="cycleTheme" :title="'Theme: ' + theme">
            <svg v-if="theme === 'dark'" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z"/></svg>
            <svg v-else-if="theme === 'light'" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></svg>
            <svg v-else width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>
          </button>
        </li>
        <li>
          <a
            href="mailto:alfath.abibi@gmail.com"
            class="nav-cta"
          >
            Say Hello
          </a>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { useTheme } from '../composables/useTheme.js'

const emit = defineEmits(['navigate'])

const { theme, cycleTheme } = useTheme()

const isScrolled = ref(false)
const isOpen = ref(false)
const activeSection = ref('hero')

const links = [
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'skills', label: 'Skills' },
  { id: 'contact', label: 'Contact' },
]

const navigate = (id) => {
  emit('navigate', id)
  isOpen.value = false
  activeSection.value = id
}

const handleScroll = () => {
  isScrolled.value = window.scrollY > 50

  const sections = links.map(l => l.id)
  for (const id of sections.reverse()) {
    const el = document.getElementById(id)
    if (el && window.scrollY >= el.offsetTop - 200) {
      activeSection.value = id
      break
    }
  }
}

onMounted(() => window.addEventListener('scroll', handleScroll))
onUnmounted(() => window.removeEventListener('scroll', handleScroll))
</script>

<style scoped>
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  padding: 20px 0;
  transition: all var(--transition);
}

.navbar.scrolled {
  background: var(--nav-scrolled-bg);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  padding: 12px 0;
  border-bottom: 1px solid var(--border);
}

.nav-container {
  max-width: 1100px;
  margin: 0 auto;
  padding: 0 24px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.nav-logo {
  font-family: var(--font-mono);
  font-size: 1.2rem;
  font-weight: 600;
  display: flex;
  gap: 2px;
  transition: var(--transition);
}

.logo-bracket {
  color: var(--accent-light);
}

.logo-text {
  color: var(--text-primary);
}

.nav-logo:hover .logo-text {
  color: var(--accent-light);
}

.nav-links {
  display: flex;
  align-items: center;
  gap: 8px;
}

.nav-links a {
  padding: 8px 16px;
  font-size: 0.9rem;
  font-weight: 500;
  color: var(--text-secondary);
  border-radius: 8px;
  transition: var(--transition);
  position: relative;
}

.nav-links a:hover,
.nav-links a.active {
  color: var(--accent-light);
}

.nav-cta {
  background: var(--accent) !important;
  color: white !important;
  font-weight: 600 !important;
  padding: 10px 24px !important;
  border-radius: 10px !important;
  margin-left: 8px;
  transition: var(--transition);
}

.nav-cta:hover {
  background: var(--accent-secondary) !important;
  transform: translateY(-1px);
  box-shadow: 0 4px 20px var(--accent-glow);
}

.nav-toggle {
  display: none;
  flex-direction: column;
  gap: 5px;
  background: none;
  border: none;
  cursor: pointer;
  padding: 4px;
}

.nav-toggle span {
  width: 24px;
  height: 2px;
  background: var(--text-primary);
  border-radius: 2px;
  transition: var(--transition);
}

.nav-toggle.active span:nth-child(1) {
  transform: rotate(45deg) translate(5px, 5px);
}

.nav-toggle.active span:nth-child(2) {
  opacity: 0;
}

.nav-toggle.active span:nth-child(3) {
  transform: rotate(-45deg) translate(5px, -5px);
}

.theme-toggle {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 38px;
  height: 38px;
  background: var(--bg-card);
  border: 1px solid var(--border);
  border-radius: 10px;
  color: var(--text-secondary);
  cursor: pointer;
  transition: all var(--transition);
}

.theme-toggle:hover {
  color: var(--accent-light);
  border-color: var(--accent);
  background: var(--accent-glow);
}

@media (max-width: 768px) {
  .nav-toggle {
    display: flex;
  }

  .nav-links {
    position: fixed;
    top: 0;
    right: -100%;
    height: 100vh;
    width: 280px;
    background: var(--bg-secondary);
    flex-direction: column;
    justify-content: center;
    gap: 16px;
    padding: 40px;
    transition: right var(--transition);
    border-left: 1px solid var(--border);
  }

  .nav-links.open {
    right: 0;
  }

  .nav-links a {
    font-size: 1.1rem;
    padding: 12px 20px;
  }

  .nav-cta {
    margin-left: 0 !important;
    text-align: center;
    width: 100%;
  }
}
</style>
