<template>
  <section id="hero" class="hero">
    <div class="hero-bg">
      <div class="grid-overlay"></div>
      <div class="glow glow-1"></div>
      <div class="glow glow-2"></div>
    </div>

    <div class="container hero-content">
      <div class="hero-badge">
        <span class="badge-dot"></span>
        Available for opportunities
      </div>

      <h1 class="hero-title">
        <span class="hero-greeting">Hi, I'm</span>
        <span class="hero-name">Muhammad Alfath<br/>Abibi</span>
      </h1>

      <div class="hero-role">
        <span class="role-line"></span>
        <span class="role-text" ref="typewriter">{{ displayedText }}<span class="cursor">|</span></span>
      </div>

      <p class="hero-description">
        {{ profile.summary }}
      </p>

      <div class="hero-actions">
        <a href="#experience" class="btn btn-primary" @click.prevent="scrollTo('experience')">
          <span>View My Work</span>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M7 17l9.2-9.2M17 17V7H7"/></svg>
        </a>
        <a href="#contact" class="btn btn-secondary" @click.prevent="scrollTo('contact')">
          Get In Touch
        </a>
      </div>

      <div class="hero-stats">
        <template v-for="(stat, i) in stats" :key="i">
          <div class="stat">
            <span class="stat-number">{{ stat.number }}</span>
            <span class="stat-label">{{ stat.label }}</span>
          </div>
          <div class="stat-divider" v-if="i < stats.length - 1"></div>
        </template>
      </div>
    </div>

    <div class="scroll-indicator" @click="scrollTo('about')">
      <div class="scroll-mouse">
        <div class="scroll-dot"></div>
      </div>
      <span>Scroll</span>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import profile from '../data/profile.json'

const roles = profile.roles
const stats = profile.stats

const displayedText = ref('')
let roleIndex = 0
let charIndex = 0
let isDeleting = false
let timeout = null

const type = () => {
  const current = roles[roleIndex]

  if (!isDeleting) {
    displayedText.value = current.substring(0, charIndex + 1)
    charIndex++
    if (charIndex === current.length) {
      timeout = setTimeout(() => { isDeleting = true; type() }, 2000)
      return
    }
  } else {
    displayedText.value = current.substring(0, charIndex - 1)
    charIndex--
    if (charIndex === 0) {
      isDeleting = false
      roleIndex = (roleIndex + 1) % roles.length
    }
  }

  timeout = setTimeout(type, isDeleting ? 40 : 80)
}

const scrollTo = (id) => {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
}

onMounted(() => type())
onUnmounted(() => clearTimeout(timeout))
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

.grid-overlay {
  position: absolute;
  inset: 0;
  background-image:
    linear-gradient(rgba(99, 102, 241, 0.03) 1px, transparent 1px),
    linear-gradient(90deg, rgba(99, 102, 241, 0.03) 1px, transparent 1px);
  background-size: 60px 60px;
}

.glow {
  position: absolute;
  border-radius: 50%;
  filter: blur(120px);
  opacity: 0.4;
}

.glow-1 {
  width: 500px;
  height: 500px;
  background: var(--accent);
  top: -200px;
  right: -100px;
  opacity: 0.15;
}

.glow-2 {
  width: 400px;
  height: 400px;
  background: var(--accent-secondary);
  bottom: -150px;
  left: -100px;
  opacity: 0.1;
}

.hero-content {
  position: relative;
  z-index: 1;
  animation: fadeInUp 0.8s ease forwards;
}

.hero-badge {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 8px 16px;
  background: var(--bg-card);
  border: 1px solid var(--border-light);
  border-radius: 50px;
  font-size: 0.85rem;
  color: var(--text-secondary);
  margin-bottom: 32px;
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
  margin-bottom: 20px;
}

.hero-greeting {
  display: block;
  font-size: 1.2rem;
  font-weight: 400;
  color: var(--accent-light);
  margin-bottom: 8px;
  font-family: var(--font-mono);
}

.hero-name {
  font-size: 4rem;
  font-weight: 900;
  line-height: 1.1;
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
  margin-bottom: 24px;
}

.role-line {
  width: 40px;
  height: 2px;
  background: var(--accent);
}

.role-text {
  font-size: 1.3rem;
  font-weight: 500;
  color: var(--accent-light);
  font-family: var(--font-mono);
}

.cursor {
  animation: blink 1s step-end infinite;
  color: var(--accent);
}

@keyframes blink {
  50% { opacity: 0; }
}

.hero-description {
  font-size: 1.1rem;
  color: var(--text-secondary);
  max-width: 540px;
  line-height: 1.8;
  margin-bottom: 40px;
}

.hero-description strong {
  color: var(--text-primary);
}

.hero-actions {
  display: flex;
  gap: 16px;
  margin-bottom: 60px;
}

.btn {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 14px 28px;
  font-size: 0.95rem;
  font-weight: 600;
  border-radius: 12px;
  transition: all var(--transition);
  cursor: pointer;
}

.btn-primary {
  background: var(--accent);
  color: white;
  box-shadow: 0 4px 20px var(--accent-glow);
}

.btn-primary:hover {
  background: var(--accent-secondary);
  transform: translateY(-2px);
  box-shadow: 0 8px 30px rgba(99, 102, 241, 0.3);
}

.btn-secondary {
  background: transparent;
  color: var(--text-primary);
  border: 1px solid var(--border-light);
}

.btn-secondary:hover {
  border-color: var(--accent);
  color: var(--accent-light);
  background: var(--accent-glow);
}

.hero-stats {
  display: flex;
  align-items: center;
  gap: 32px;
}

.stat-number {
  display: block;
  font-size: 2rem;
  font-weight: 800;
  background: var(--gradient);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.stat-label {
  font-size: 0.8rem;
  color: var(--text-muted);
  text-transform: uppercase;
  letter-spacing: 1px;
}

.stat-divider {
  width: 1px;
  height: 40px;
  background: var(--border-light);
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
  font-size: 0.75rem;
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
  background: var(--accent-light);
  border-radius: 3px;
  animation: scrollDown 1.5s ease infinite;
}

@keyframes scrollDown {
  0% { opacity: 1; transform: translateY(0); }
  100% { opacity: 0; transform: translateY(12px); }
}

@media (max-width: 768px) {
  .hero-name {
    font-size: 2.5rem;
  }
  .role-text {
    font-size: 1rem;
  }
  .hero-stats {
    flex-wrap: wrap;
    gap: 20px;
  }
  .stat-divider {
    display: none;
  }
  .hero-actions {
    flex-direction: column;
  }
  .btn {
    justify-content: center;
  }
}
</style>
