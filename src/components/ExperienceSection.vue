<template>
  <section id="experience" class="section">
    <div class="container">
      <span class="section-label">Career</span>
      <h2 class="section-title">Work <span>Experience</span></h2>

      <div class="timeline">
        <div
          v-for="(job, index) in jobs"
          :key="index"
          class="timeline-item reveal"
          :style="{ transitionDelay: index * 0.15 + 's' }"
        >
          <div class="timeline-marker">
            <div class="marker-dot"></div>
            <div class="marker-line" v-if="index < jobs.length - 1"></div>
          </div>

          <div class="timeline-content">
            <div class="timeline-header">
              <div>
                <h3 class="job-title">{{ job.title }}</h3>
                <p class="job-company">{{ job.company }}</p>
              </div>
              <span class="job-period">{{ job.period }}</span>
            </div>

            <div
              v-for="(project, pIndex) in job.projects"
              :key="pIndex"
              class="project-block"
            >
              <div class="project-name">
                <span class="project-indicator"></span>
                <h4>{{ project.name }}</h4>
                <span class="project-context" v-if="project.context">{{ project.context }}</span>
              </div>
              <ul class="project-points">
                <li v-for="(point, i) in project.points" :key="i">
                  {{ point }}
                </li>
              </ul>
              <div class="project-tech">
                <span v-for="tech in project.tech" :key="tech" class="tech-tag">{{ tech }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import jobs from '../data/experience.json'
import { useScrollReveal } from '../composables/useScrollReveal.js'

useScrollReveal()
</script>

<style scoped>
.timeline {
  position: relative;
}

.timeline-item {
  display: flex;
  gap: 32px;
  margin-bottom: 24px;
}

.timeline-marker {
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-shrink: 0;
  padding-top: 8px;
}

.marker-dot {
  width: 14px;
  height: 14px;
  border-radius: 50%;
  background: var(--accent);
  box-shadow: 0 0 0 4px var(--accent-glow);
  z-index: 1;
}

.marker-line {
  width: 2px;
  flex-grow: 1;
  background: linear-gradient(to bottom, var(--accent), var(--border));
  margin-top: 4px;
}

.timeline-content {
  flex: 1;
  padding-bottom: 40px;
}

.timeline-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 24px;
  gap: 16px;
}

.job-title {
  font-size: 1.25rem;
  font-weight: 700;
}

.job-company {
  font-size: 0.95rem;
  color: var(--accent-light);
  font-weight: 500;
  margin-top: 2px;
}

.job-period {
  font-family: var(--font-mono);
  font-size: 0.8rem;
  color: var(--text-muted);
  white-space: nowrap;
  padding: 4px 12px;
  background: var(--bg-card);
  border-radius: 6px;
  border: 1px solid var(--border);
}

.project-block {
  background: var(--bg-card);
  border: 1px solid var(--border);
  border-radius: var(--radius);
  padding: 24px;
  margin-bottom: 16px;
  transition: all var(--transition);
}

.project-block:hover {
  border-color: var(--border-light);
  background: var(--bg-card-hover);
}

.project-name {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 16px;
  flex-wrap: wrap;
}

.project-indicator {
  width: 4px;
  height: 20px;
  background: var(--gradient);
  border-radius: 2px;
  flex-shrink: 0;
}

.project-name h4 {
  font-size: 1rem;
  font-weight: 600;
}

.project-context {
  font-size: 0.8rem;
  color: var(--text-muted);
  padding: 2px 10px;
  background: var(--accent-glow);
  border-radius: 20px;
  border: 1px solid var(--border-light);
}

.project-points {
  margin-bottom: 16px;
}

.project-points li {
  position: relative;
  padding-left: 20px;
  color: var(--text-secondary);
  font-size: 0.9rem;
  margin-bottom: 8px;
  line-height: 1.6;
}

.project-points li::before {
  content: '▹';
  position: absolute;
  left: 0;
  color: var(--accent-light);
  font-size: 0.85rem;
}

.project-tech {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.tech-tag {
  font-family: var(--font-mono);
  font-size: 0.75rem;
  padding: 4px 12px;
  background: var(--accent-glow);
  color: var(--accent-light);
  border-radius: 6px;
  border: 1px solid rgba(99, 102, 241, 0.15);
}

@media (max-width: 768px) {
  .timeline-item {
    gap: 20px;
  }
  .timeline-header {
    flex-direction: column;
  }
  .job-period {
    align-self: flex-start;
  }
}
</style>
