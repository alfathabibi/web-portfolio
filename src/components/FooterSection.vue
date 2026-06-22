<template>
  <footer class="footer">
    <div class="container">
      <div class="footer-content">
        <p class="footer-credit">
          Designed & Built by <strong>Muhammad Alfath Abibi</strong>
        </p>
        <p class="footer-tech">Built with Vue.js & Vite</p>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  padding: 32px 0;
  border-top: 1px solid var(--border);
}

.footer-content {
  text-align: center;
}

.footer-credit {
  font-size: 0.85rem;
  color: var(--text-secondary);
  margin-bottom: 4px;
}

.footer-credit strong {
  color: var(--accent-light);
}

.footer-tech {
  font-family: var(--font-mono);
  font-size: 0.75rem;
  color: var(--text-muted);
}
</style>
