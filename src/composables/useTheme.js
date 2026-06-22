import { ref, watch, onMounted } from 'vue'

const theme = ref('system')

function getSystemTheme() {
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
}

function applyTheme(value) {
  const resolved = value === 'system' ? getSystemTheme() : value
  document.documentElement.setAttribute('data-theme', resolved)
}

export function useTheme() {
  onMounted(() => {
    const saved = localStorage.getItem('theme')
    if (saved) theme.value = saved
    applyTheme(theme.value)

    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', () => {
      if (theme.value === 'system') applyTheme('system')
    })
  })

  watch(theme, (val) => {
    localStorage.setItem('theme', val)
    applyTheme(val)
  })

  function cycleTheme() {
    const order = ['system', 'light', 'dark']
    const next = order[(order.indexOf(theme.value) + 1) % order.length]
    theme.value = next
  }

  return { theme, cycleTheme }
}
