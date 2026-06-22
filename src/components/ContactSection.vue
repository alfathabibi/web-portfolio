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

        <div class="contact-links">
          <a :href="'mailto:' + profile.email" class="contact-card reveal">
            <div class="contact-icon">
              <AppIcon name="mail" :size="22" />
            </div>
            <div>
              <span class="contact-label">Email</span>
              <span class="contact-value">{{ profile.email }}</span>
            </div>
          </a>

          <a :href="'tel:' + profile.phone.replace(/[^+\d]/g, '')" class="contact-card reveal" style="transition-delay: 0.05s">
            <div class="contact-icon">
              <AppIcon name="phone" :size="22" />
            </div>
            <div>
              <span class="contact-label">Phone</span>
              <span class="contact-value">{{ profile.phone }}</span>
            </div>
          </a>

          <a :href="profile.linkedin" target="_blank" rel="noopener noreferrer" class="contact-card reveal" style="transition-delay: 0.1s">
            <div class="contact-icon">
              <AppIcon name="linkedin" :size="22" />
            </div>
            <div>
              <span class="contact-label">LinkedIn</span>
              <span class="contact-value">{{ profile.name }}</span>
            </div>
          </a>

          <div class="contact-card location reveal" style="transition-delay: 0.15s">
            <div class="contact-icon">
              <AppIcon name="location" :size="22" />
            </div>
            <div>
              <span class="contact-label">Location</span>
              <span class="contact-value">{{ profile.location }}</span>
            </div>
          </div>
        </div>

        <a :href="'mailto:' + profile.email" class="btn btn-primary contact-cta">
          <span>Send Me a Message</span>
          <AppIcon name="arrow-right" :size="18" />
        </a>
      </div>
    </div>
  </section>
</template>

<script setup>
import profile from '../data/profile.json'
import AppIcon from './AppIcon.vue'
import { useScrollReveal } from '../composables/useScrollReveal.js'

useScrollReveal()
</script>

<style scoped>
.contact-section {
  background: var(--bg-secondary);
}

.contact-wrapper {
  text-align: center;
  max-width: 700px;
  margin: 0 auto;
}

.contact-title {
  font-size: 2.5rem;
  font-weight: 800;
  margin-bottom: 16px;
  letter-spacing: -0.02em;
}

.contact-title span {
  background: var(--gradient);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.contact-description {
  font-size: 1.05rem;
  color: var(--text-secondary);
  margin-bottom: 48px;
  line-height: 1.8;
}

.contact-links {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 16px;
  margin-bottom: 40px;
}

.contact-card {
  display: flex;
  align-items: center;
  gap: 14px;
  padding: 20px;
  background: var(--bg-card);
  border: 1px solid var(--border);
  border-radius: var(--radius);
  transition: all var(--transition);
  text-align: left;
}

.contact-card:hover {
  border-color: var(--accent);
  transform: translateY(-2px);
}

.contact-icon {
  width: 44px;
  height: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--accent-glow);
  border-radius: 10px;
  color: var(--accent-light);
  flex-shrink: 0;
}

.contact-label {
  display: block;
  font-size: 0.75rem;
  color: var(--text-muted);
  text-transform: uppercase;
  letter-spacing: 1px;
  margin-bottom: 2px;
}

.contact-value {
  font-size: 0.9rem;
  font-weight: 500;
  color: var(--text-primary);
}

.contact-cta {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  padding: 16px 36px;
  font-size: 1rem;
  font-weight: 600;
  border-radius: 12px;
  background: var(--accent);
  color: white;
  transition: all var(--transition);
  box-shadow: 0 4px 20px var(--accent-glow);
}

.contact-cta:hover {
  background: var(--accent-secondary);
  transform: translateY(-2px);
  box-shadow: 0 8px 30px rgba(99, 102, 241, 0.3);
}

@media (max-width: 768px) {
  .contact-links {
    grid-template-columns: 1fr;
  }
  .contact-title {
    font-size: 1.8rem;
  }
}
</style>
