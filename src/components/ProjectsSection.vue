<template>
  <section id="projects" class="section">
    <div class="container">
      <span class="section-label">Side Projects</span>
      <h2 class="section-title">Things I've <span>Built</span></h2>

      <div class="projects-grid">
        <motion.div
          v-for="(project, index) in projects"
          :key="index"
          :class="['project-card', index === 0 ? 'spotlight' : 'compact']"
          :initial="{ opacity: 0, y: 24 }"
          :while-in-view="{ opacity: 1, y: 0 }"
          :viewport="{ once: true, margin: '-50px' }"
          :transition="{ duration: 0.5, delay: index * 0.1, ease: 'easeOut' }"
          :while-hover="{ y: -4 }"
        >
          <div class="card-header">
            <div class="card-icon">
              <AppIcon name="folder" :size="index === 0 ? 32 : 24" />
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
        </motion.div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { motion } from 'motion-v'
import projects from '../data/projects.json'
import AppIcon from './AppIcon.vue'
</script>

<style scoped>
.projects-grid {
  display: grid;
  grid-template-columns: 1.6fr 1fr;
  gap: var(--space-5);
  align-items: start;
}

.project-card {
  background: var(--bg-card);
  border: 1px solid var(--border);
  border-radius: var(--radius-lg);
  display: flex;
  flex-direction: column;
  box-shadow: var(--shadow-sm);
}

.project-card.spotlight {
  padding: var(--space-10);
}

.project-card.compact {
  padding: var(--space-6);
}

.project-card:hover {
  border-color: var(--accent);
  box-shadow: var(--shadow-lg);
}

.card-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: var(--space-5);
}

.card-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--accent);
}

.spotlight .card-icon {
  width: 56px;
  height: 56px;
  background: var(--bg-secondary);
  border-radius: var(--radius);
}

.compact .card-icon {
  width: 44px;
  height: 44px;
  background: var(--bg-secondary);
  border-radius: var(--radius-sm);
}

.card-badge {
  font-family: var(--font-mono);
  font-size: var(--text-xs);
  padding: 4px 12px;
  background: rgba(34, 197, 94, 0.1);
  color: #4ade80;
  border-radius: var(--radius-full);
  border: 1px solid rgba(34, 197, 94, 0.2);
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.spotlight .card-title {
  font-size: var(--text-2xl);
}

.compact .card-title {
  font-size: var(--text-lg);
}

.card-title {
  font-weight: 700;
  margin-bottom: var(--space-3);
}

.card-description {
  font-size: var(--text-sm);
  color: var(--text-secondary);
  margin-bottom: var(--space-5);
  line-height: 1.7;
}

.card-features {
  margin-bottom: var(--space-6);
  flex-grow: 1;
}

.card-features li {
  position: relative;
  padding-left: 18px;
  font-size: var(--text-sm);
  color: var(--text-secondary);
  margin-bottom: 8px;
  line-height: 1.5;
}

.card-features li::before {
  content: '▹';
  position: absolute;
  left: 0;
  color: var(--accent);
}

.compact .card-features {
  max-height: 26px;
  overflow: hidden;
  transition: max-height 0.4s ease;
}

.compact:hover .card-features,
.compact:focus-within .card-features {
  max-height: 300px;
}

.card-tech {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: auto;
}

.card-tech span {
  font-family: var(--font-mono);
  font-size: var(--text-xs);
  padding: 4px 10px;
  color: var(--text-muted);
  background: var(--bg-secondary);
  border-radius: var(--radius-sm);
}

@media (max-width: 900px) {
  .projects-grid {
    grid-template-columns: 1fr;
  }
}
</style>
