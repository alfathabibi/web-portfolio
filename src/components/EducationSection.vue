<template>
  <section id="education" class="section">
    <div class="container">
      <span class="section-label">Education</span>
      <h2 class="section-title">Academic <span>Background</span></h2>

      <motion.div
        class="education-list"
        initial="hidden"
        while-in-view="visible"
        :viewport="{ once: true, margin: '-50px' }"
        :variants="containerVariants"
      >
        <motion.div
          v-for="(edu, index) in education"
          :key="index"
          class="edu-row"
          :variants="itemVariants"
        >
          <div class="edu-gpa-block">
            <span class="edu-gpa-number">{{ edu.gpa }}</span>
            <span class="edu-gpa-max">/ {{ edu.maxGpa }} GPA</span>
          </div>
          <div class="edu-content">
            <h3>{{ edu.degree }}</h3>
            <p class="edu-school">{{ edu.school }}</p>
          </div>
          <span class="edu-year">{{ edu.year }}</span>
        </motion.div>
      </motion.div>
    </div>
  </section>
</template>

<script setup>
import { motion } from 'motion-v'
import education from '../data/education.json'

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
}
</script>

<style scoped>
.education-list {
  display: flex;
  flex-direction: column;
  border-top: 1px solid var(--border);
}

.edu-row {
  display: flex;
  align-items: center;
  gap: var(--space-8);
  padding: var(--space-6) 0;
  border-bottom: 1px solid var(--border);
}

.edu-gpa-block {
  display: flex;
  align-items: baseline;
  gap: 6px;
  flex-shrink: 0;
  min-width: 140px;
}

.edu-gpa-number {
  font-size: var(--text-3xl);
  font-weight: 800;
  color: var(--accent);
}

.edu-gpa-max {
  font-size: var(--text-xs);
  color: var(--text-muted);
  text-transform: uppercase;
  letter-spacing: 1px;
}

.edu-content {
  flex: 1;
}

.edu-content h3 {
  font-size: var(--text-lg);
  font-weight: 700;
  margin-bottom: 2px;
}

.edu-school {
  color: var(--text-secondary);
  font-weight: 500;
  font-size: var(--text-sm);
}

.edu-year {
  font-family: var(--font-mono);
  font-size: var(--text-sm);
  color: var(--text-muted);
  flex-shrink: 0;
}

@media (max-width: 600px) {
  .edu-row {
    flex-wrap: wrap;
    gap: var(--space-3);
  }
  .edu-year {
    order: 3;
  }
}
</style>
