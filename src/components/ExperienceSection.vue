<template>
  <section id="experience" class="section">
    <div class="container">
      <span class="section-label">Career</span>
      <h2 class="section-title">Work <span>Experience</span></h2>

      <motion.div
        class="timeline"
        initial="hidden"
        while-in-view="visible"
        :viewport="{ once: true, margin: '-50px' }"
        :variants="containerVariants"
      >
        <motion.div
          v-for="(job, index) in jobs"
          :key="index"
          class="timeline-item"
          :variants="itemVariants"
        >
          <div class="timeline-marker">
            <motion.div
              class="marker-dot"
              :initial="{ scale: 0 }"
              :while-in-view="{ scale: 1 }"
              :viewport="{ once: true }"
              :transition="{ duration: 0.4, ease: 'easeOut' }"
            />
            <motion.div
              v-if="index < jobs.length - 1"
              class="marker-line"
              :initial="{ scaleY: 0 }"
              :while-in-view="{ scaleY: 1 }"
              :viewport="{ once: true }"
              :transition="{ duration: 0.8, ease: 'easeOut', delay: 0.2 }"
            />
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
        </motion.div>
      </motion.div>
    </div>
  </section>
</template>

<script setup>
import { motion } from 'motion-v'
import jobs from '../data/experience.json'

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
}

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
}
</script>

<style scoped>
.timeline {
  position: relative;
}

.timeline-item {
  display: flex;
  gap: var(--space-8);
  margin-bottom: var(--space-6);
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
  transform-origin: top;
}

.timeline-content {
  flex: 1;
  padding-bottom: var(--space-10);
}

.timeline-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: var(--space-6);
  gap: var(--space-4);
}

.job-title {
  font-size: var(--text-xl);
  font-weight: 700;
}

.job-company {
  font-size: var(--text-base);
  color: var(--accent);
  font-weight: 500;
  margin-top: 2px;
}

.job-period {
  font-family: var(--font-mono);
  font-size: var(--text-xs);
  color: var(--text-muted);
  white-space: nowrap;
  padding: 4px 12px;
  background: var(--bg-card);
  border-radius: var(--radius-sm);
  border: 1px solid var(--border);
}

.project-block {
  background: var(--bg-card);
  border: 1px solid var(--border);
  border-radius: var(--radius);
  padding: var(--space-6);
  margin-bottom: var(--space-4);
  box-shadow: var(--shadow-xs);
}

.project-name {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: var(--space-4);
  flex-wrap: wrap;
}

.project-indicator {
  width: 4px;
  height: 20px;
  background: var(--accent);
  border-radius: 2px;
  flex-shrink: 0;
}

.project-name h4 {
  font-size: var(--text-base);
  font-weight: 600;
}

.project-context {
  font-size: var(--text-xs);
  color: var(--text-muted);
  padding: 2px 10px;
  background: var(--bg-secondary);
  border-radius: var(--radius-full);
  border: 1px solid var(--border-light);
}

.project-points {
  margin-bottom: var(--space-4);
}

.project-points li {
  position: relative;
  padding-left: 20px;
  color: var(--text-secondary);
  font-size: var(--text-sm);
  margin-bottom: 8px;
  line-height: 1.6;
}

.project-points li::before {
  content: '▹';
  position: absolute;
  left: 0;
  color: var(--accent);
  font-size: var(--text-sm);
}

.project-tech {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
}

.tech-tag {
  font-family: var(--font-mono);
  font-size: var(--text-xs);
  padding: 3px 10px;
  color: var(--text-secondary);
  border-radius: var(--radius-sm);
  border: 1px solid var(--border-light);
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
