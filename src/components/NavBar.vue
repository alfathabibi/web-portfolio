<template>
  <nav :class="['navbar', { scrolled: isScrolled }]">
    <div class="nav-container">
      <a href="#" class="nav-logo" @click.prevent="$emit('navigate', 'hero')">
        <span class="logo-mark">A</span>
        <span class="logo-text">Alfath</span>
      </a>

      <button class="nav-toggle" @click="isOpen = true" :class="{ active: isOpen }">
        <span></span>
        <span></span>
        <span></span>
      </button>

      <ul class="nav-links">
        <li v-for="link in links" :key="link.id" class="nav-item">
          <a
            :href="'#' + link.id"
            @click.prevent="navigate(link.id)"
            :class="{ active: activeSection === link.id }"
          >
            <motion.div
              v-if="activeSection === link.id"
              class="nav-pill"
              layout-id="nav-pill"
              :transition="{ type: 'spring', stiffness: 380, damping: 32 }"
            />
            <span class="nav-item-label">{{ link.label }}</span>
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
          <motion.a
            href="mailto:alfath.abibi@gmail.com"
            class="nav-cta"
            :while-hover="{ y: -1, boxShadow: '0 4px 20px var(--accent-glow)' }"
            :while-press="{ scale: 0.96 }"
          >
            Say Hello
          </motion.a>
        </li>
      </ul>
    </div>

    <AnimatePresence>
      <motion.div
        v-if="isOpen"
        class="nav-backdrop"
        :initial="{ opacity: 0 }"
        :animate="{ opacity: 1 }"
        :exit="{ opacity: 0 }"
        @click="isOpen = false"
      />
    </AnimatePresence>

    <AnimatePresence>
      <motion.div
        v-if="isOpen"
        class="nav-drawer"
        :initial="{ x: '100%' }"
        :animate="{ x: 0 }"
        :exit="{ x: '100%' }"
        :transition="{ type: 'spring', stiffness: 320, damping: 34 }"
      >
        <ul class="drawer-links">
          <li v-for="link in links" :key="link.id">
            <a
              :href="'#' + link.id"
              @click.prevent="navigate(link.id)"
              :class="{ active: activeSection === link.id }"
            >
              {{ link.label }}
            </a>
          </li>
        </ul>
        <div class="drawer-footer">
          <button class="theme-toggle" @click="cycleTheme" :title="'Theme: ' + theme">
            <svg v-if="theme === 'dark'" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z"/></svg>
            <svg v-else-if="theme === 'light'" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></svg>
            <svg v-else width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>
          </button>
          <a href="mailto:alfath.abibi@gmail.com" class="nav-cta">Say Hello</a>
        </div>
      </motion.div>
    </AnimatePresence>
  </nav>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { motion, AnimatePresence } from 'motion-v'
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
  display: flex;
  align-items: center;
  gap: 10px;
  transition: var(--transition);
}

.logo-mark {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 30px;
  height: 30px;
  border-radius: var(--radius-sm);
  background: linear-gradient(135deg, var(--accent), var(--accent-secondary));
  color: #0c0c0d;
  font-family: var(--font-mono);
  font-size: var(--text-sm);
  font-weight: 800;
  flex-shrink: 0;
}

.logo-text {
  font-family: var(--font-mono);
  font-size: var(--text-lg);
  font-weight: 600;
  color: var(--text-primary);
  transition: color var(--transition);
}

.nav-logo:hover .logo-text {
  color: var(--accent);
}

.nav-links {
  display: flex;
  align-items: center;
  gap: 4px;
}

.nav-item a {
  position: relative;
  display: inline-flex;
  padding: 8px 16px;
  font-size: var(--text-sm);
  font-weight: 500;
  color: var(--text-secondary);
  border-radius: var(--radius-full);
  transition: color var(--transition);
}

.nav-item a:hover,
.nav-item a.active {
  color: var(--text-primary);
}

.nav-item-label {
  position: relative;
  z-index: 1;
}

.nav-pill {
  position: absolute;
  inset: 0;
  background: var(--bg-card);
  border: 1px solid var(--border-light);
  border-radius: var(--radius-full);
  z-index: 0;
}

.nav-cta {
  display: inline-flex;
  background: var(--accent);
  color: #0c0c0d;
  font-weight: 600;
  padding: 10px 24px;
  border-radius: var(--radius);
  margin-left: 8px;
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

.theme-toggle {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 38px;
  height: 38px;
  background: var(--bg-card);
  border: 1px solid var(--border);
  border-radius: var(--radius);
  color: var(--text-secondary);
  cursor: pointer;
  transition: all var(--transition);
}

.theme-toggle:hover {
  color: var(--accent);
  border-color: var(--accent);
  background: var(--accent-glow);
}

.nav-backdrop {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.5);
  z-index: 1001;
}

.nav-drawer {
  position: fixed;
  top: 0;
  right: 0;
  height: 100vh;
  width: 280px;
  max-width: 85vw;
  background: var(--bg-secondary);
  border-left: 1px solid var(--border);
  z-index: 1002;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: var(--space-10);
  padding: var(--space-10);
}

.drawer-links {
  display: flex;
  flex-direction: column;
  gap: var(--space-2);
}

.drawer-links a {
  display: block;
  font-size: var(--text-lg);
  font-weight: 500;
  padding: 12px 4px;
  color: var(--text-secondary);
}

.drawer-links a.active {
  color: var(--accent);
}

.drawer-footer {
  display: flex;
  align-items: center;
  gap: var(--space-4);
}

.drawer-footer .nav-cta {
  flex: 1;
  justify-content: center;
  margin-left: 0;
}

@media (max-width: 768px) {
  .nav-toggle {
    display: flex;
  }
  .nav-links {
    display: none;
  }
}
</style>
