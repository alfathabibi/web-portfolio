<template>
  <section id="about" class="section">
    <div class="container">
      <span class="section-label">About Me</span>
      <h2 class="section-title">Crafting <span>Digital Solutions</span></h2>

      <div class="about-grid">
        <div class="about-text">
          <p v-for="(paragraph, i) in profile.about" :key="i" v-html="paragraph" class="reveal" :style="{ transitionDelay: i * 0.1 + 's' }"></p>
        </div>

        <div class="about-details">
          <div
            v-for="(item, i) in profile.highlights"
            :key="i"
            class="detail-card reveal"
            :style="{ transitionDelay: i * 0.1 + 's' }"
          >
            <div class="detail-icon">
              <AppIcon :name="item.icon" :size="24" />
            </div>
            <div>
              <h4>{{ item.title }}</h4>
              <p>{{ item.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import profile from '../data/profile.json'
import AppIcon from './AppIcon.vue'
import { useScrollReveal } from '../composables/useScrollReveal.js'

useScrollReveal()
</script>

<style scoped>
.about-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 60px;
  align-items: start;
}

.about-text p {
  color: var(--text-secondary);
  margin-bottom: 20px;
  font-size: 1.05rem;
}

.about-text strong {
  color: var(--text-primary);
}

.about-details {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.detail-card {
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 20px;
  background: var(--bg-card);
  border: 1px solid var(--border);
  border-radius: var(--radius);
  transition: all var(--transition);
}

.detail-card:hover {
  border-color: var(--accent);
  background: var(--bg-card-hover);
  transform: translateX(4px);
}

.detail-icon {
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--accent-glow);
  border-radius: 12px;
  color: var(--accent-light);
  flex-shrink: 0;
}

.detail-card h4 {
  font-size: 0.95rem;
  font-weight: 600;
  margin-bottom: 2px;
}

.detail-card p {
  font-size: 0.85rem;
  color: var(--text-muted);
}

@media (max-width: 768px) {
  .about-grid {
    grid-template-columns: 1fr;
    gap: 40px;
  }
}
</style>
