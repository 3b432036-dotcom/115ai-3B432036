<script setup>
/**
 * 通用卡片元件。
 * 以 props 接收標題與內容，需要額外內容（圖片、標籤、按鈕）時使用預設 slot，
 * 需要在標題前放圖片時使用 media slot。
 */
defineProps({
  title: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    default: '',
  },
})
</script>

<template>
  <article class="card">
    <slot name="media" />
    <h3 class="card-title">{{ title }}</h3>
    <p v-if="content" class="card-content">{{ content }}</p>
    <slot />
  </article>
</template>

<style scoped>
.card {
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: var(--radius);
  padding: 20px;
}

.card-title {
  line-height: 1.25;
  color: var(--primary);
  margin: 0 0 12px;
  font-size: 1.15rem;
}

.card-content {
  color: var(--muted);
  margin: 0 0 14px;
}
</style>
