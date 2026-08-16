<template>
  <footer class="footer">
    <div class="container">
      <div class="footer-content">
        <div class="footer-socials">
          <a :href="'mailto:' + profile.email" aria-label="Email" class="social-link">
            <AppIcon name="mail" :size="16" />
          </a>
          <a :href="profile.linkedin" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" class="social-link">
            <AppIcon name="linkedin" :size="16" />
          </a>
        </div>
        <p class="footer-credit">
          Designed & Built by <strong>Muhammad Alfath Abibi</strong>
        </p>
        <p class="footer-tech">Built with Vue.js & Vite</p>
      </div>
    </div>
  </footer>
</template>

<script setup>
import profile from '../data/profile.json'
import AppIcon from './AppIcon.vue'
</script>

<style scoped>
.footer {
  padding: var(--space-8) 0;
  border-top: 1px solid var(--border);
}

.footer-content {
  text-align: center;
}

.footer-socials {
  display: flex;
  justify-content: center;
  gap: var(--space-3);
  margin-bottom: var(--space-5);
}

.social-link {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  border: 1px solid var(--border);
  border-radius: var(--radius-full);
  color: var(--text-muted);
  transition: all var(--transition);
}

.social-link:hover {
  color: var(--accent);
  border-color: var(--accent);
  background: var(--accent-glow);
}

.footer-credit {
  font-size: var(--text-sm);
  color: var(--text-secondary);
  margin-bottom: 4px;
}

.footer-credit strong {
  color: var(--accent);
}

.footer-tech {
  font-family: var(--font-mono);
  font-size: var(--text-xs);
  color: var(--text-muted);
}
</style>
