<template>
  <section id="contact" class="section contact-section">
    <div class="container">
      <div class="contact-wrapper">
        <span class="section-label">Contact</span>
        <h2 class="contact-title">Let's Work <span>Together</span></h2>
        <p class="contact-description">
          I'm currently open to new opportunities. Whether you have a project in mind,
          a question, or just want to say hi — my inbox is always open.
        </p>

        <motion.div
          class="contact-panel"
          :initial="{ opacity: 0, y: 24 }"
          :while-in-view="{ opacity: 1, y: 0 }"
          :viewport="{ once: true, margin: '-50px' }"
          :transition="{ duration: 0.6, ease: 'easeOut' }"
        >
          <a :href="'mailto:' + profile.email" class="contact-row">
            <div class="contact-icon">
              <AppIcon name="mail" :size="20" />
            </div>
            <span class="contact-label">Email</span>
            <span class="contact-value">{{ profile.email }}</span>
          </a>

          <a :href="'tel:' + profile.phone.replace(/[^+\d]/g, '')" class="contact-row">
            <div class="contact-icon">
              <AppIcon name="phone" :size="20" />
            </div>
            <span class="contact-label">Phone</span>
            <span class="contact-value">{{ profile.phone }}</span>
          </a>

          <a :href="profile.linkedin" target="_blank" rel="noopener noreferrer" class="contact-row">
            <div class="contact-icon">
              <AppIcon name="linkedin" :size="20" />
            </div>
            <span class="contact-label">LinkedIn</span>
            <span class="contact-value">{{ profile.name }}</span>
          </a>

          <div class="contact-row no-link">
            <div class="contact-icon">
              <AppIcon name="location" :size="20" />
            </div>
            <span class="contact-label">Location</span>
            <span class="contact-value">{{ profile.location }}</span>
          </div>
        </motion.div>

        <motion.a
          :href="'mailto:' + profile.email"
          class="btn btn-primary contact-cta"
          :while-hover="{ y: -3, boxShadow: '0 12px 40px var(--accent-glow)' }"
          :while-press="{ scale: 0.96 }"
        >
          <span>Send Me a Message</span>
          <AppIcon name="arrow-right" :size="18" />
        </motion.a>
      </div>
    </div>
  </section>
</template>

<script setup>
import { motion } from 'motion-v'
import profile from '../data/profile.json'
import AppIcon from './AppIcon.vue'
</script>

<style scoped>
.contact-section {
  background: var(--bg-secondary);
}

.contact-wrapper {
  text-align: center;
  max-width: 640px;
  margin: 0 auto;
}

.contact-title {
  font-size: var(--text-3xl);
  font-weight: 800;
  margin-bottom: var(--space-4);
  letter-spacing: -0.02em;
}

.contact-title span {
  color: var(--accent);
}

.contact-description {
  font-size: var(--text-lg);
  color: var(--text-secondary);
  margin-bottom: var(--space-10);
  line-height: 1.8;
}

.contact-panel {
  background: var(--bg-card);
  border: 1px solid var(--border);
  border-radius: var(--radius-xl);
  box-shadow: var(--shadow-lg);
  padding: 0 var(--space-6);
  margin-bottom: var(--space-10);
  text-align: left;
}

.contact-row {
  display: flex;
  align-items: center;
  gap: var(--space-4);
  padding: var(--space-5) 0;
  border-bottom: 1px solid var(--border);
  transition: color var(--transition);
}

.contact-row:last-child {
  border-bottom: none;
}

.contact-row:not(.no-link):hover .contact-value {
  color: var(--accent);
}

.contact-icon {
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--bg-secondary);
  border-radius: var(--radius);
  color: var(--accent);
  flex-shrink: 0;
}

.contact-label {
  font-size: var(--text-xs);
  color: var(--text-muted);
  text-transform: uppercase;
  letter-spacing: 1px;
  width: 90px;
  flex-shrink: 0;
}

.contact-value {
  font-size: var(--text-base);
  font-weight: 500;
  color: var(--text-primary);
  transition: color var(--transition);
}

.contact-cta {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  padding: 16px 36px;
  font-size: var(--text-base);
  font-weight: 600;
  border-radius: var(--radius);
  background: var(--accent);
  color: #0c0c0d;
  box-shadow: 0 4px 20px var(--accent-glow);
}

@media (max-width: 600px) {
  .contact-title {
    font-size: var(--text-2xl);
  }
  .contact-row {
    flex-wrap: wrap;
    gap: var(--space-2);
  }
  .contact-label {
    width: auto;
  }
}
</style>
