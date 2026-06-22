<template>
  <section id="skills" class="section">
    <div class="container">
      <span class="section-label">Tech Stack</span>
      <h2 class="section-title">Skills & <span>Technologies</span></h2>

      <div class="skills-grid">
        <div
          v-for="(category, index) in categories"
          :key="index"
          class="skill-category reveal"
          :style="{ transitionDelay: index * 0.1 + 's' }"
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
                <div
                  class="skill-fill"
                  :style="{ width: skill.level + '%' }"
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import categories from '../data/skills.json'
import AppIcon from './AppIcon.vue'
import { useScrollReveal } from '../composables/useScrollReveal.js'

useScrollReveal()
</script>

<style scoped>
.skills-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 24px;
}

.skill-category {
  background: var(--bg-card);
  border: 1px solid var(--border);
  border-radius: var(--radius-lg);
  padding: 28px;
  transition: all var(--transition);
}

.skill-category:hover {
  border-color: var(--border-light);
}

.category-header {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 24px;
}

.category-icon {
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--accent-glow);
  border-radius: 10px;
  color: var(--accent-light);
}

.category-header h3 {
  font-size: 1.05rem;
  font-weight: 700;
}

.skill-list {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.skill-item {
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.skill-name {
  font-size: 0.85rem;
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
  background: var(--gradient);
  border-radius: 3px;
  transition: width 1s ease;
}

@media (max-width: 768px) {
  .skills-grid {
    grid-template-columns: 1fr;
  }
}
</style>
