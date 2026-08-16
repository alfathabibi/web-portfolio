<template>
  <section id="hero" class="hero">
    <div class="hero-bg">
      <div class="aurora"></div>
    </div>

    <motion.div
      class="container hero-grid"
      initial="hidden"
      animate="visible"
      :variants="containerVariants"
    >
      <div class="hero-main">
        <motion.div class="hero-badge" :variants="itemVariants">
          <span class="badge-dot"></span>
          Available for opportunities
        </motion.div>

        <motion.h1 class="hero-title" :variants="itemVariants">
          <span class="hero-greeting">Hi, I'm</span>
          <span class="hero-name">Muhammad Alfath<br />Abibi</span>
        </motion.h1>

        <motion.div class="hero-role" :variants="itemVariants">
          <span class="role-line"></span>
          <AnimatePresence mode="wait">
            <motion.span
              :key="roleIndex"
              class="role-text"
              :initial="{ opacity: 0, y: 12 }"
              :animate="{ opacity: 1, y: 0 }"
              :exit="{ opacity: 0, y: -12 }"
              :transition="{ duration: 0.35, ease: 'easeOut' }"
            >
              {{ roles[roleIndex] }}
            </motion.span>
          </AnimatePresence>
        </motion.div>

        <motion.p class="hero-description" :variants="itemVariants">
          {{ profile.summary }}
        </motion.p>

        <motion.div class="hero-actions" :variants="itemVariants">
          <motion.a
            href="#experience"
            class="btn btn-primary"
            :while-hover="{ y: -2, boxShadow: '0 8px 30px var(--accent-glow)' }"
            :while-press="{ scale: 0.97 }"
            @click.prevent="scrollTo('experience')"
          >
            <span>View My Work</span>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M7 17l9.2-9.2M17 17V7H7" /></svg>
          </motion.a>
          <motion.a
            href="#contact"
            class="btn btn-secondary"
            :while-hover="{ y: -2 }"
            :while-press="{ scale: 0.97 }"
            @click.prevent="scrollTo('contact')"
          >
            Get In Touch
          </motion.a>
        </motion.div>
      </div>

      <motion.div
        class="hero-panel"
        :variants="itemVariants"
        :while-in-view="{ opacity: 1 }"
        @viewport-enter="startCount"
      >
        <span class="panel-label">By the numbers</span>
        <div class="panel-stats">
          <div v-for="(stat, i) in stats" :key="i" class="panel-stat">
            <span class="panel-stat-number">{{ displayValues[i] }}{{ suffixes[i] }}</span>
            <span class="panel-stat-label">{{ stat.label }}</span>
          </div>
        </div>
      </motion.div>
    </motion.div>

    <motion.div
      class="scroll-indicator"
      :initial="{ opacity: 0 }"
      :animate="{ opacity: 1 }"
      :transition="{ delay: 1, duration: 0.6 }"
      @click="scrollTo('about')"
    >
      <div class="scroll-mouse">
        <div class="scroll-dot"></div>
      </div>
      <span>Scroll</span>
    </motion.div>
  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { motion, AnimatePresence } from 'motion-v'
import profile from '../data/profile.json'

const roles = profile.roles
const stats = profile.stats

const roleIndex = ref(0)
let roleTimer = null

const numbers = stats.map((s) => parseInt(s.number, 10) || 0)
const suffixes = stats.map((s) => s.number.replace(/^\d+/, ''))
const displayValues = ref(stats.map(() => 0))
let hasCounted = false

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
}

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
}

const startCount = () => {
  if (hasCounted) return
  hasCounted = true
  const duration = 1100
  const start = performance.now()

  const tick = (now) => {
    const progress = Math.min((now - start) / duration, 1)
    const eased = 1 - Math.pow(1 - progress, 3)
    displayValues.value = numbers.map((n) => Math.round(n * eased))
    if (progress < 1) requestAnimationFrame(tick)
  }
  requestAnimationFrame(tick)
}

const scrollTo = (id) => {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
}

onMounted(() => {
  roleTimer = setInterval(() => {
    roleIndex.value = (roleIndex.value + 1) % roles.length
  }, 2600)
})
onUnmounted(() => clearInterval(roleTimer))
</script>

<style scoped>
.hero {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
  padding-top: 80px;
}

.hero-bg {
  position: absolute;
  inset: 0;
  z-index: 0;
}

.aurora {
  position: absolute;
  top: -20%;
  right: -10%;
  width: 60%;
  height: 70%;
  background: radial-gradient(circle at 30% 30%, var(--accent) 0%, transparent 60%),
    radial-gradient(circle at 70% 70%, var(--accent-secondary) 0%, transparent 55%);
  filter: blur(110px);
  opacity: 0.18;
}

.hero-grid {
  position: relative;
  z-index: 1;
  display: grid;
  grid-template-columns: 1.4fr 1fr;
  gap: var(--space-16);
  align-items: center;
}

.hero-badge {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 8px 16px;
  background: var(--bg-card);
  border: 1px solid var(--border-light);
  border-radius: var(--radius-full);
  font-size: var(--text-sm);
  color: var(--text-secondary);
  margin-bottom: var(--space-8);
}

.badge-dot {
  width: 8px;
  height: 8px;
  background: #22c55e;
  border-radius: 50%;
  animation: pulse-glow 2s ease infinite;
  box-shadow: 0 0 8px rgba(34, 197, 94, 0.4);
}

.hero-title {
  margin-bottom: var(--space-5);
}

.hero-greeting {
  display: block;
  font-size: var(--text-lg);
  font-weight: 400;
  color: var(--accent);
  margin-bottom: 8px;
  font-family: var(--font-mono);
}

.hero-name {
  font-size: var(--text-5xl);
  font-weight: 900;
  line-height: 1.05;
  letter-spacing: -0.03em;
  background: linear-gradient(135deg, var(--text-primary) 0%, var(--text-secondary) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.hero-role {
  display: flex;
  align-items: center;
  gap: 16px;
  margin-bottom: var(--space-6);
  min-height: 1.6em;
}

.role-line {
  width: 40px;
  height: 2px;
  background: var(--accent);
  flex-shrink: 0;
}

.role-text {
  display: inline-block;
  font-size: var(--text-xl);
  font-weight: 500;
  color: var(--accent);
  font-family: var(--font-mono);
}

.hero-description {
  font-size: var(--text-lg);
  color: var(--text-secondary);
  max-width: 480px;
  line-height: 1.8;
  margin-bottom: var(--space-10);
}

.hero-description :deep(strong) {
  color: var(--text-primary);
}

.hero-actions {
  display: flex;
  gap: var(--space-4);
}

.btn {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 14px 28px;
  font-size: var(--text-sm);
  font-weight: 600;
  border-radius: var(--radius);
  cursor: pointer;
}

.btn-primary {
  background: var(--accent);
  color: #0c0c0d;
  box-shadow: 0 4px 20px var(--accent-glow);
}

.btn-secondary {
  background: transparent;
  color: var(--text-primary);
  border: 1px solid var(--border-light);
}

.btn-secondary:hover {
  border-color: var(--accent);
  color: var(--accent);
}

.hero-panel {
  background: var(--bg-card);
  border: 1px solid var(--border);
  border-radius: var(--radius-xl);
  padding: var(--space-8);
  box-shadow: var(--shadow-lg);
}

.panel-label {
  display: block;
  font-family: var(--font-mono);
  font-size: var(--text-xs);
  text-transform: uppercase;
  letter-spacing: 2px;
  color: var(--text-muted);
  margin-bottom: var(--space-6);
}

.panel-stats {
  display: flex;
  flex-direction: column;
  gap: var(--space-5);
}

.panel-stat {
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  padding-bottom: var(--space-5);
  border-bottom: 1px solid var(--border);
}

.panel-stat:last-child {
  border-bottom: none;
  padding-bottom: 0;
}

.panel-stat-number {
  font-size: var(--text-2xl);
  font-weight: 800;
  color: var(--accent);
  font-variant-numeric: tabular-nums;
}

.panel-stat-label {
  font-size: var(--text-xs);
  color: var(--text-muted);
  text-transform: uppercase;
  letter-spacing: 1px;
  text-align: right;
}

.scroll-indicator {
  position: absolute;
  bottom: 40px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  cursor: pointer;
  color: var(--text-muted);
  font-size: var(--text-xs);
  letter-spacing: 2px;
  text-transform: uppercase;
}

.scroll-mouse {
  width: 24px;
  height: 38px;
  border: 2px solid var(--border-light);
  border-radius: 14px;
  display: flex;
  justify-content: center;
  padding-top: 8px;
}

.scroll-dot {
  width: 3px;
  height: 8px;
  background: var(--accent);
  border-radius: 3px;
  animation: scrollDown 1.5s ease infinite;
}

@keyframes scrollDown {
  0% { opacity: 1; transform: translateY(0); }
  100% { opacity: 0; transform: translateY(12px); }
}

@media (max-width: 900px) {
  .hero-grid {
    grid-template-columns: 1fr;
  }
  .hero-panel {
    order: -1;
  }
}

@media (max-width: 768px) {
  .hero-name {
    font-size: var(--text-4xl);
  }
  .role-text {
    font-size: var(--text-base);
  }
  .hero-actions {
    flex-direction: column;
  }
  .btn {
    justify-content: center;
  }
}
</style>
