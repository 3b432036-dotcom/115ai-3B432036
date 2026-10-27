<script setup>
import Card from '../components/Card.vue'
import ProjectCard from '../components/ProjectCard.vue'
import { cardSamples, projects } from '../data/site'
</script>

<template>
  <div class="home">
    <section v-reveal class="hero">
      <div class="hero-copy">
        <p class="eyebrow">學生 / 網頁學習者</p>
        <h1>張胤謙</h1>
        <p class="lead">用簡潔的網頁，呈現清楚的內容與作品。</p>
        <div class="hero-actions">
          <router-link class="btn btn-primary" :to="{ name: 'portfolio' }">看作品</router-link>
          <router-link class="btn btn-secondary" :to="{ name: 'contact' }">聯絡我</router-link>
        </div>
      </div>
      <div class="hero-visual" aria-hidden="true">
        <span class="geo-line"></span>
        <span class="geo-dot"></span>
        <span class="geo-square"></span>
      </div>
    </section>

    <section v-reveal>
      <p class="eyebrow">精選作品</p>
      <h2>作品集摘要</h2>
      <div class="card-grid">
        <ProjectCard v-for="project in projects" :key="project.id" :project="project" />
      </div>
    </section>

    <section v-reveal>
      <p class="eyebrow">關於我</p>
      <h2>背景、技能與興趣</h2>
      <div class="summary-grid">
        <Card
          v-for="item in cardSamples"
          :key="item.title"
          :title="item.title"
          :content="item.content"
        />
      </div>
      <p class="more-about">
        <router-link class="btn btn-secondary" :to="{ name: 'about' }">更多關於我</router-link>
      </p>
    </section>

    <section v-reveal class="cta">
      <div>
        <h2>預約諮詢</h2>
        <p>如果你對作品或合作有興趣，可以透過聯絡表單預約諮詢。</p>
      </div>
      <router-link class="btn btn-secondary" :to="{ name: 'contact' }">前往聯絡我</router-link>
    </section>
  </div>
</template>

<style scoped>
.hero {
  display: grid;
  gap: 28px;
  align-items: center;
  min-height: calc(100vh - 160px);
}

.hero-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  margin-top: 24px;
}

.hero-visual {
  position: relative;
  min-height: 280px;
  border-radius: 28px;
  overflow: hidden;
  background: linear-gradient(135deg, #e8eef5, #f8fafc);
  border: 1px solid var(--border);
  box-shadow: var(--shadow);
}

.hero-visual::before {
  content: '';
  position: absolute;
  width: 220px;
  height: 220px;
  border: 2px solid rgba(31, 58, 95, 0.18);
  border-radius: 50%;
  top: 24px;
  left: 24px;
}

.hero-visual::after {
  content: '';
  position: absolute;
  width: 160px;
  height: 160px;
  border-radius: 28px;
  background: rgba(74, 144, 164, 0.16);
  right: 28px;
  bottom: 28px;
  transform: rotate(12deg);
}

.geo-line {
  position: absolute;
  inset: auto 18% 12% 16%;
  height: 1px;
  background: rgba(31, 58, 95, 0.28);
  transform: rotate(-18deg);
}

.geo-dot {
  position: absolute;
  width: 18px;
  height: 18px;
  border-radius: 50%;
  background: var(--accent);
  right: 24%;
  top: 28%;
}

.geo-square {
  position: absolute;
  width: 54px;
  height: 54px;
  border: 2px solid rgba(31, 58, 95, 0.28);
  left: 18%;
  bottom: 18%;
  transform: rotate(18deg);
}

.summary-grid {
  display: grid;
  gap: 18px;
}

.more-about {
  margin-top: 18px;
}

.cta {
  background: var(--primary);
  color: #fff;
  border-radius: 28px;
  padding: 28px;
  display: grid;
  gap: 18px;
  align-items: center;
}

.cta h2,
.cta p {
  color: #fff;
}

.cta p {
  opacity: 0.82;
}

.cta .btn-secondary {
  color: #fff;
  border-color: rgba(255, 255, 255, 0.4);
}

.cta .btn-secondary:hover {
  background: rgba(255, 255, 255, 0.1);
}

@media (min-width: 768px) {
  .hero {
    grid-template-columns: 1.1fr 0.9fr;
    min-height: calc(100vh - 180px);
  }

  .summary-grid {
    grid-template-columns: repeat(3, 1fr);
  }

  .cta {
    grid-template-columns: 1fr auto;
    padding: 36px;
  }
}
</style>
