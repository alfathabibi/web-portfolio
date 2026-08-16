<template>
  <section id="about" class="section">
    <div class="container">
      <span class="section-label">About Me</span>
      <h2 class="section-title">Crafting <span>Digital Solutions</span></h2>

      <div class="about-grid">
        <motion.div
          class="about-text"
          :initial="{ opacity: 0, y: 24 }"
          :while-in-view="{ opacity: 1, y: 0 }"
          :viewport="{ once: true, margin: '-50px' }"
          :transition="{ duration: 0.6, ease: 'easeOut' }"
        >
          <p v-for="(paragraph, i) in profile.about" :key="i" v-html="paragraph"></p>
        </motion.div>

        <motion.div
          class="about-details"
          initial="hidden"
          while-in-view="visible"
          :viewport="{ once: true, margin: '-50px' }"
          :variants="containerVariants"
        >
          <motion.div
            v-for="(item, i) in profile.highlights"
            :key="i"
            class="detail-row"
            :variants="itemVariants"
          >
            <div class="detail-icon">
              <AppIcon :name="item.icon" :size="20" />
            </div>
            <div>
              <h4>{{ item.title }}</h4>
              <p>{{ item.description }}</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { motion } from 'motion-v'
import profile from '../data/profile.json'
import AppIcon from './AppIcon.vue'

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
}

const itemVariants = {
  hidden: { opacity: 0, x: 16 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: 'easeOut' } },
}
</script>

<style scoped>
.about-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--space-16);
  align-items: start;
}

.about-text {
  border-left: 2px solid var(--accent);
  padding-left: var(--space-6);
}

.about-text p {
  color: var(--text-secondary);
  margin-bottom: var(--space-5);
  font-size: var(--text-lg);
}

.about-text :deep(strong) {
  color: var(--text-primary);
}

.about-details {
  display: flex;
  flex-direction: column;
}

.detail-row {
  display: flex;
  align-items: center;
  gap: var(--space-4);
  padding: var(--space-5) 0;
  border-bottom: 1px solid var(--border);
}

.detail-row:first-child {
  padding-top: 0;
}

.detail-row:last-child {
  border-bottom: none;
}

.detail-icon {
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--bg-card);
  border: 1px solid var(--border);
  border-radius: var(--radius);
  color: var(--accent);
  flex-shrink: 0;
}

.detail-row h4 {
  font-size: var(--text-base);
  font-weight: 600;
  margin-bottom: 2px;
}

.detail-row p {
  font-size: var(--text-sm);
  color: var(--text-muted);
}

@media (max-width: 768px) {
  .about-grid {
    grid-template-columns: 1fr;
    gap: var(--space-10);
  }
}
</style>
