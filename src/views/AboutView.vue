<script setup>
import { interests, skills } from '../data/site'
</script>

<template>
  <div class="about">
    <section v-reveal>
      <p class="eyebrow">關於我</p>
      <h1>張胤謙</h1>
      <p class="lead">學生 / 網頁學習者</p>
    </section>

    <section v-reveal class="about-layout">
      <div>
        <div class="photo-placeholder">個人照片預留</div>
      </div>
      <div>
        <h2>背景</h2>
        <p>
          我目前是學生，正在學習網頁設計與前端開發。透過課程逐步熟悉 HTML、CSS 與
          JavaScript，並嘗試將想法整理成清楚、易讀的網頁。
        </p>
        <p>我希望持續累積作品，讓網站不只是作業，也能成為個人品牌與作品展示的起點。</p>

        <h2>技能</h2>
        <ul class="skill-list">
          <li v-for="skill in skills" :key="skill">{{ skill }}</li>
        </ul>

        <h2>興趣</h2>
        <ul class="interest-list">
          <li v-for="interest in interests" :key="interest">{{ interest }}</li>
        </ul>
      </div>
    </section>
  </div>
</template>

<style scoped>
.photo-placeholder {
  width: min(220px, 70vw);
  aspect-ratio: 1;
  border-radius: 50%;
  background: linear-gradient(135deg, #e8eef5, #f8fafc);
  border: 1px solid var(--border);
  display: grid;
  place-items: center;
  color: var(--muted);
  font-weight: 700;
  margin-bottom: 24px;
}

.about-layout {
  display: grid;
  gap: 32px;
}

.skill-list {
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  padding: 0;
  margin: 0;
}

.skill-list li {
  background: #eaf1f7;
  color: var(--primary);
  border-radius: 999px;
  padding: 8px 12px;
  font-weight: 600;
  font-size: 0.9rem;
}

.interest-list {
  padding-left: 1.2em;
  color: var(--muted);
}

.interest-list li {
  margin-bottom: 8px;
}

@media (min-width: 768px) {
  .about-layout {
    grid-template-columns: 260px 1fr;
    align-items: start;
  }
}
</style>
