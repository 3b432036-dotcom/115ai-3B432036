<script setup>
/**
 * 舊版 aboutme.html 的深色版面外框。
 * 將原本掛在 body 上的背景與設計變數集中在這裡，避免影響淺色主題的其他頁面。
 */
</script>

<template>
  <div class="legacy-page">
    <slot />
  </div>
</template>

<style scoped>
.legacy-page {
  color-scheme: dark;
  --bg-primary: #0d0f14;
  --bg-secondary: #151820;
  --bg-card: #1a1f2e;
  --bg-card-hover: #212838;
  --text-primary: #e8eaf0;
  --text-secondary: #9aa3b5;
  --text-muted: #6b7280;
  --accent-cyan: #4dd8e6;
  --accent-blue: #5b8cff;
  --accent-purple: #8b5cf6;
  --border-subtle: #2a3040;
  --glow-cyan: rgba(77, 216, 230, 0.15);
  --font-sans: 'Segoe UI', 'PingFang TC', 'Microsoft JhengHei', 'Noto Sans TC',
    -apple-system, BlinkMacSystemFont, sans-serif;

  position: relative;
  min-height: 100vh;
  overflow-x: hidden;
  background-color: var(--bg-primary);
  color: var(--text-primary);
  font-family: var(--font-sans);
  line-height: 1.6;
}

.legacy-page::before {
  content: '';
  position: fixed;
  top: -20%;
  left: -10%;
  width: 60vw;
  height: 60vw;
  background: radial-gradient(circle at center, rgba(91, 140, 255, 0.06), transparent 70%);
  border-radius: 50%;
  pointer-events: none;
  z-index: 0;
  animation: float-glow 18s ease-in-out infinite alternate;
}

.legacy-page::after {
  content: '';
  position: fixed;
  bottom: -25%;
  right: -15%;
  width: 70vw;
  height: 70vw;
  background: radial-gradient(circle at center, rgba(139, 92, 246, 0.05), transparent 70%);
  border-radius: 50%;
  pointer-events: none;
  z-index: 0;
  animation: float-glow 22s ease-in-out infinite alternate-reverse;
}

@keyframes float-glow {
  0% {
    transform: translate(0, 0) scale(1);
  }
  50% {
    transform: translate(30px, -40px) scale(1.05);
  }
  100% {
    transform: translate(-20px, 30px) scale(0.95);
  }
}

@media (prefers-reduced-motion: reduce) {
  .legacy-page::before,
  .legacy-page::after {
    animation: none;
  }
}
</style>
