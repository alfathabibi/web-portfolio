<template>
  <section id="skills" class="section">
    <div class="container">
      <span class="section-label">Tech Stack</span>
      <h2 class="section-title">Skills & <span>Technologies</span></h2>

      <div class="skills-grid">
        <motion.div
          v-for="(category, index) in categories"
          :key="index"
          :class="['skill-category', 'tile-' + index]"
          :initial="{ opacity: 0, y: 24 }"
          :while-in-view="{ opacity: 1, y: 0 }"
          :viewport="{ once: true, margin: '-50px' }"
          :transition="{ duration: 0.5, delay: index * 0.08, ease: 'easeOut' }"
        >
          <div class="category-header">
            <span class="category-icon">
              <AppIcon :name="category.icon" :size="20" />
            </span>
            <h3>{{ category.name }}</h3>
          </div>

          <div class="skill-list">
            <div
              v-for="skill in category.skills"
              :key="skill.name"
              class="skill-item"
            >
              <span class="skill-name">{{ skill.name }}</span>
              <div class="skill-bar">
                <motion.div
                  class="skill-fill"
                  :initial="{ width: '0%' }"
                  :while-in-view="{ width: skill.level + '%' }"
                  :viewport="{ once: true, margin: '-50px' }"
                  :transition="{ duration: 0.9, ease: 'easeOut' }"
                />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { motion } from 'motion-v'
import categories from '../data/skills.json'
import AppIcon from './AppIcon.vue'
</script>

<style scoped>
.skills-grid {
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  gap: var(--space-5);
}

.tile-0 { grid-column: span 7; }
.tile-1 { grid-column: span 5; }
.tile-2 { grid-column: span 5; }
.tile-3 { grid-column: span 7; }

.skill-category {
  background: var(--bg-card);
  border: 1px solid var(--border);
  border-radius: var(--radius-lg);
  padding: var(--space-8);
  box-shadow: var(--shadow-sm);
}

.category-header {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: var(--space-6);
}

.category-icon {
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--bg-secondary);
  border-radius: var(--radius-sm);
  color: var(--accent);
}

.category-header h3 {
  font-size: var(--text-lg);
  font-weight: 700;
}

.skill-list {
  display: flex;
  flex-direction: column;
  gap: var(--space-4);
}

.skill-item {
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.skill-name {
  font-size: var(--text-sm);
  font-weight: 500;
  color: var(--text-secondary);
}

.skill-bar {
  height: 6px;
  background: var(--bg-secondary);
  border-radius: 3px;
  overflow: hidden;
}

.skill-fill {
  height: 100%;
  background: var(--accent);
  border-radius: 3px;
}

@media (max-width: 768px) {
  .skills-grid {
    grid-template-columns: 1fr;
  }
  .tile-0, .tile-1, .tile-2, .tile-3 {
    grid-column: span 1;
  }
}
</style>
