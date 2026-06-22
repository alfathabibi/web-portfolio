<template>
  <section id="projects" class="section">
    <div class="container">
      <span class="section-label">Side Projects</span>
      <h2 class="section-title">Things I've <span>Built</span></h2>

      <div class="projects-grid">
        <div
          v-for="(project, index) in projects"
          :key="index"
          class="project-card reveal"
          :style="{ transitionDelay: index * 0.15 + 's' }"
        >
          <div class="card-header">
            <div class="card-icon">
              <AppIcon name="folder" :size="28" />
            </div>
            <div class="card-badge" v-if="project.badge">{{ project.badge }}</div>
          </div>

          <h3 class="card-title">{{ project.name }}</h3>
          <p class="card-description">{{ project.description }}</p>

          <ul class="card-features">
            <li v-for="(feature, i) in project.features" :key="i">{{ feature }}</li>
          </ul>

          <div class="card-tech">
            <span v-for="tech in project.tech" :key="tech">{{ tech }}</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import projects from '../data/projects.json'
import AppIcon from './AppIcon.vue'
import { useScrollReveal } from '../composables/useScrollReveal.js'

useScrollReveal()
</script>

<style scoped>
.projects-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 24px;
}

.project-card {
  background: var(--bg-card);
  border: 1px solid var(--border);
  border-radius: var(--radius-lg);
  padding: 32px;
  transition: all var(--transition);
  display: flex;
  flex-direction: column;
}

.project-card:hover {
  border-color: var(--accent);
  transform: translateY(-4px);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
}

.card-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 20px;
}

.card-icon {
  width: 52px;
  height: 52px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--accent-glow);
  border-radius: 14px;
  color: var(--accent-light);
}

.card-badge {
  font-family: var(--font-mono);
  font-size: 0.7rem;
  padding: 4px 12px;
  background: linear-gradient(135deg, rgba(34, 197, 94, 0.15), rgba(34, 197, 94, 0.05));
  color: #4ade80;
  border-radius: 20px;
  border: 1px solid rgba(34, 197, 94, 0.2);
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.card-title {
  font-size: 1.2rem;
  font-weight: 700;
  margin-bottom: 12px;
}

.card-description {
  font-size: 0.9rem;
  color: var(--text-secondary);
  margin-bottom: 20px;
  line-height: 1.7;
}

.card-features {
  margin-bottom: 24px;
  flex-grow: 1;
}

.card-features li {
  position: relative;
  padding-left: 18px;
  font-size: 0.85rem;
  color: var(--text-secondary);
  margin-bottom: 8px;
  line-height: 1.5;
}

.card-features li::before {
  content: '▹';
  position: absolute;
  left: 0;
  color: var(--accent-light);
}

.card-tech {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: auto;
}

.card-tech span {
  font-family: var(--font-mono);
  font-size: 0.72rem;
  padding: 4px 10px;
  color: var(--text-muted);
  background: var(--bg-secondary);
  border-radius: 4px;
}

@media (max-width: 768px) {
  .projects-grid {
    grid-template-columns: 1fr;
  }
}
</style>
