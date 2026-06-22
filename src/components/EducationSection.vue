<template>
  <section id="education" class="section">
    <div class="container">
      <span class="section-label">Education</span>
      <h2 class="section-title">Academic <span>Background</span></h2>

      <div class="education-grid">
        <div
          v-for="(edu, index) in education"
          :key="index"
          class="edu-card reveal"
          :style="{ transitionDelay: index * 0.15 + 's' }"
        >
          <div class="edu-icon">
            <AppIcon name="graduation" :size="28" />
          </div>
          <div class="edu-content">
            <h3>{{ edu.degree }}</h3>
            <p class="edu-school">{{ edu.school }}</p>
            <div class="edu-meta">
              <span class="edu-gpa">
                <strong>GPA: {{ edu.gpa }}</strong> / {{ edu.maxGpa }}
              </span>
              <span class="edu-year">{{ edu.year }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import education from '../data/education.json'
import AppIcon from './AppIcon.vue'
import { useScrollReveal } from '../composables/useScrollReveal.js'

useScrollReveal()
</script>

<style scoped>
.education-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 24px;
}

.edu-card {
  display: flex;
  gap: 20px;
  padding: 32px;
  background: var(--bg-card);
  border: 1px solid var(--border);
  border-radius: var(--radius-lg);
  transition: all var(--transition);
}

.edu-card:hover {
  border-color: var(--accent);
  transform: translateY(-2px);
}

.edu-icon {
  width: 56px;
  height: 56px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--accent-glow);
  border-radius: 14px;
  color: var(--accent-light);
  flex-shrink: 0;
}

.edu-content h3 {
  font-size: 1.15rem;
  font-weight: 700;
  margin-bottom: 4px;
}

.edu-school {
  color: var(--accent-light);
  font-weight: 500;
  font-size: 0.95rem;
  margin-bottom: 12px;
}

.edu-meta {
  display: flex;
  align-items: center;
  gap: 16px;
}

.edu-gpa {
  font-size: 0.9rem;
  color: var(--text-secondary);
}

.edu-gpa strong {
  color: var(--text-primary);
}

.edu-year {
  font-family: var(--font-mono);
  font-size: 0.8rem;
  color: var(--text-muted);
  padding: 2px 10px;
  background: var(--bg-secondary);
  border-radius: 4px;
}

@media (max-width: 768px) {
  .education-grid {
    grid-template-columns: 1fr;
  }
}
</style>
