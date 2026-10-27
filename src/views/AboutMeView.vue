<script setup>
import { onBeforeUnmount, ref } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()

const legacyLinks = [
  { name: 'home', label: '首頁' },
  { name: 'about-me', label: '關於我' },
  { name: 'contact', label: '聯絡我' },
]

const traits = ['💡 好奇心', '🤝 團隊協作', '📚 自主學習', '🎯 目標導向', '🌱 成長心態']

/** 原版頭像只是預留位置，這裡補上提示文字所說的「點擊上傳」行為。 */
const avatarUrl = ref('')
const fileInput = ref(null)

const openAvatarPicker = () => fileInput.value?.click()

const onAvatarChange = (event) => {
  const file = event.target.files?.[0]
  if (!file) return

  if (avatarUrl.value) URL.revokeObjectURL(avatarUrl.value)
  avatarUrl.value = URL.createObjectURL(file)
  event.target.value = ''
}

onBeforeUnmount(() => {
  if (avatarUrl.value) URL.revokeObjectURL(avatarUrl.value)
})
</script>

<template>
  <div class="about-me">
    <header class="am-header">
      <div class="am-container">
        <nav class="am-navbar" aria-label="主選單">
          <router-link class="am-brand" :to="{ name: 'home' }">
            <div class="am-logo" aria-hidden="true">X</div>
            <span class="am-name">XXX</span>
          </router-link>
          <ul class="am-links">
            <li v-for="link in legacyLinks" :key="link.name">
              <router-link
                :to="{ name: link.name }"
                :class="{ active: route.name === link.name }"
                :aria-current="route.name === link.name ? 'page' : undefined"
              >
                {{ link.label }}
              </router-link>
            </li>
          </ul>
        </nav>
      </div>
    </header>

    <main id="top">
      <div class="am-container">
        <div class="am-page-header">
          <h1 class="am-page-title">關於我</h1>
          <p class="am-page-subtitle">更深入了解我的背景、興趣與學習歷程</p>
        </div>

        <article class="am-about-layout" aria-labelledby="profile-name">
          <figure class="am-profile">
            <button
              type="button"
              class="am-avatar"
              :class="{ 'has-image': avatarUrl }"
              aria-label="個人頭像預留位置，點擊可上傳大頭貼"
              title="點擊上傳大頭貼"
              @click="openAvatarPicker"
            >
              <img v-if="avatarUrl" :src="avatarUrl" alt="個人頭像" class="am-avatar-image" />
              <span v-else class="am-avatar-placeholder" aria-hidden="true">
                <span class="am-avatar-icon">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                    <circle cx="12" cy="7" r="4" />
                  </svg>
                </span>
                <span class="am-avatar-text">大頭貼</span>
              </span>
            </button>
            <input
              ref="fileInput"
              type="file"
              accept="image/*"
              class="am-visually-hidden"
              @change="onAvatarChange"
            />
            <figcaption class="am-visually-hidden">個人頭像</figcaption>
          </figure>

          <section class="am-content" aria-labelledby="profile-name">
            <header class="am-intro">
              <p class="am-greeting">About Me</p>
              <h2 id="profile-name" class="am-intro-name">XXX</h2>
              <p class="am-school">
                <span class="am-school-dot" aria-hidden="true"></span>
                國立勤益科技大學 · 大二學生
              </p>
            </header>

            <div class="am-divider" role="presentation"></div>

            <section class="am-bio" aria-labelledby="bio-title">
              <h3 id="bio-title" class="am-bio-title">自我介紹</h3>
              <div class="am-bio-text">
                <p>
                  你好！我是<span class="am-highlight">XXX</span>，目前就讀於
                  <span class="am-highlight-blue">國立勤益科技大學</span>，是一名大二學生。
                  我對於<span class="am-highlight">科技與設計的結合</span>充滿熱情，
                  喜歡探索新事物，並且在學習的過程中不斷挑戰自我。
                </p>
                <p>
                  在大學生活中，我積極參與各種活動與專案，
                  培養了<span class="am-highlight-blue">團隊合作</span>與
                  <span class="am-highlight">解決問題</span>的能力。
                  我相信持續學習與保持好奇心是成長的關鍵，
                  也期待在未來的日子裡，能將所學應用於實際，
                  創造更多價值。
                </p>
                <p>
                  課餘時間，我喜歡閱讀、運動以及研究感興趣的技術領域，
                  不斷充實自己。如果你也對科技、設計或任何有趣的事物感興趣，
                  歡迎與我交流！
                </p>
              </div>

              <ul class="am-skills" aria-label="個人特質與技能">
                <li v-for="trait in traits" :key="trait" class="am-skill">{{ trait }}</li>
              </ul>
            </section>

            <section class="am-stats" aria-label="個人小檔案">
              <div class="am-stat">
                <div class="am-stat-number">2</div>
                <div class="am-stat-label">年級</div>
              </div>
              <div class="am-stat">
                <div class="am-stat-number">∞</div>
                <div class="am-stat-label">學習熱情</div>
              </div>
              <div class="am-stat">
                <div class="am-stat-number">24/7</div>
                <div class="am-stat-label">保持好奇</div>
              </div>
            </section>
          </section>
        </article>
      </div>
    </main>

    <footer class="am-footer">
      <div class="am-container am-footer-inner">
        <p class="am-footer-text">© 2025 XXX | 國立勤益科技大學</p>
        <ul class="am-socials">
          <li><a href="#" @click.prevent>GitHub</a></li>
          <li><router-link :to="{ name: 'contact' }">Email</router-link></li>
          <li><a href="#" @click.prevent>Instagram</a></li>
        </ul>
      </div>
    </footer>
  </div>
</template>

<style scoped>
.am-container {
  max-width: 1100px;
  margin: 0 auto;
  padding: 0 24px;
  position: relative;
  z-index: 1;
}

.am-visually-hidden {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0 0 0 0);
  white-space: nowrap;
  border: 0;
}

/* ===== 頁首與導覽 ===== */
.am-header {
  border-bottom: 1px solid var(--border-subtle);
  margin-bottom: 50px;
}

.am-navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 0;
  flex-wrap: wrap;
  gap: 12px;
}

.am-brand {
  display: flex;
  align-items: center;
  gap: 12px;
  text-decoration: none;
}

.am-logo {
  width: 36px;
  height: 36px;
  border-radius: 8px;
  background: linear-gradient(135deg, var(--accent-cyan), var(--accent-blue));
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  font-size: 18px;
  color: #0d0f14;
  letter-spacing: -0.5px;
}

.am-name {
  font-size: 1.1rem;
  font-weight: 600;
  color: var(--text-primary);
  letter-spacing: 1px;
}

.am-links {
  display: flex;
  gap: 24px;
  list-style: none;
  align-items: center;
  margin: 0;
  padding: 0;
}

.am-links a {
  color: var(--text-secondary);
  text-decoration: none;
  font-size: 0.9rem;
  font-weight: 500;
  transition: color 0.3s ease;
  position: relative;
  letter-spacing: 0.5px;
}

.am-links a::after {
  content: '';
  position: absolute;
  bottom: -4px;
  left: 0;
  width: 0;
  height: 2px;
  background: var(--accent-cyan);
  transition: width 0.3s ease;
  border-radius: 2px;
}

.am-links a:hover,
.am-links a:focus-visible {
  color: var(--text-primary);
}

.am-links a:hover::after,
.am-links a:focus-visible::after {
  width: 100%;
}

.am-links a.active {
  color: var(--text-primary);
}

.am-links a.active::after {
  width: 100%;
}

/* ===== 頁面標題 ===== */
.am-page-header {
  margin-bottom: 36px;
}

.am-page-title {
  font-size: 2.2rem;
  font-weight: 700;
  letter-spacing: 1px;
  line-height: 1.3;
  margin: 0;
  background: linear-gradient(135deg, var(--text-primary) 40%, var(--accent-cyan));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.am-page-subtitle {
  margin: 8px 0 0;
  font-size: 0.95rem;
  color: var(--text-secondary);
  letter-spacing: 0.3px;
}

/* ===== 關於我版面 ===== */
.am-about-layout {
  display: flex;
  gap: 50px;
  align-items: flex-start;
  flex-wrap: wrap;
  margin-bottom: 80px;
}

.am-profile {
  flex: 0 0 280px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  margin: 0;
}

.am-avatar {
  width: 280px;
  height: 280px;
  padding: 0;
  border-radius: 50%;
  background: var(--bg-card);
  border: 3px solid var(--border-subtle);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
  cursor: pointer;
  transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  box-shadow: 0 12px 40px rgba(0, 0, 0, 0.4);
  user-select: none;
  font: inherit;
  color: inherit;
}

.am-avatar::before {
  content: '';
  position: absolute;
  inset: 0;
  border-radius: 50%;
  background: conic-gradient(
    from 0deg,
    transparent,
    rgba(77, 216, 230, 0.15),
    transparent,
    rgba(91, 140, 255, 0.15),
    transparent
  );
  animation: spin-border 6s linear infinite;
  pointer-events: none;
}

.am-avatar::after {
  content: '';
  position: absolute;
  inset: 3px;
  border-radius: 50%;
  background: var(--bg-card);
  pointer-events: none;
}

.am-avatar.has-image::after {
  background: transparent;
}

@keyframes spin-border {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

.am-avatar:hover,
.am-avatar:focus-visible {
  border-color: var(--accent-cyan);
  box-shadow: 0 12px 50px var(--glow-cyan), 0 0 80px rgba(77, 216, 230, 0.08);
  transform: translateY(-4px);
  outline: none;
}

.am-avatar-image {
  position: relative;
  z-index: 1;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.am-avatar-placeholder {
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 8px;
}

.am-avatar-icon {
  width: 72px;
  height: 72px;
  border-radius: 50%;
  background: linear-gradient(135deg, rgba(77, 216, 230, 0.2), rgba(91, 140, 255, 0.2));
  display: flex;
  align-items: center;
  justify-content: center;
  border: 2px dashed rgba(77, 216, 230, 0.4);
  transition: all 0.3s ease;
}

.am-avatar-icon svg {
  width: 36px;
  height: 36px;
  stroke: var(--accent-cyan);
  fill: none;
  stroke-width: 1.5;
  opacity: 0.8;
}

.am-avatar-text {
  font-size: 0.85rem;
  color: var(--text-muted);
  letter-spacing: 1px;
  font-weight: 500;
  z-index: 1;
}

.am-avatar:hover .am-avatar-icon {
  border-color: rgba(77, 216, 230, 0.7);
  background: linear-gradient(135deg, rgba(77, 216, 230, 0.3), rgba(91, 140, 255, 0.3));
  transform: scale(1.05);
}

.am-avatar:hover .am-avatar-text {
  color: var(--text-secondary);
}

.am-content {
  flex: 1;
  min-width: 280px;
  display: flex;
  flex-direction: column;
  gap: 26px;
}

.am-intro {
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.am-greeting {
  font-size: 0.85rem;
  color: var(--accent-cyan);
  letter-spacing: 2px;
  text-transform: uppercase;
  font-weight: 500;
  margin: 0;
}

.am-intro-name {
  font-size: 2.8rem;
  font-weight: 700;
  letter-spacing: 1px;
  margin: 0;
  background: linear-gradient(135deg, var(--text-primary) 40%, var(--accent-cyan));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  line-height: 1.2;
}

.am-school {
  font-size: 1.1rem;
  color: var(--text-secondary);
  font-weight: 400;
  display: flex;
  align-items: center;
  gap: 8px;
  margin: 0;
}

.am-school-dot {
  display: inline-block;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: var(--accent-blue);
  box-shadow: 0 0 12px var(--accent-blue);
  animation: pulse-dot 2s ease-in-out infinite;
}

@keyframes pulse-dot {
  0%,
  100% {
    box-shadow: 0 0 6px var(--accent-blue);
  }
  50% {
    box-shadow: 0 0 16px var(--accent-blue), 0 0 30px rgba(91, 140, 255, 0.3);
  }
}

.am-divider {
  height: 1px;
  background: linear-gradient(to right, var(--border-subtle), transparent);
  width: 100%;
}

.am-bio {
  background: var(--bg-card);
  border: 1px solid var(--border-subtle);
  border-radius: 16px;
  padding: 28px 30px;
  transition: all 0.4s ease;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
}

.am-bio:hover {
  border-color: rgba(77, 216, 230, 0.3);
  box-shadow: 0 8px 35px rgba(0, 0, 0, 0.35), 0 0 50px var(--glow-cyan);
  transform: translateY(-3px);
}

.am-bio-title {
  font-size: 1.2rem;
  font-weight: 600;
  margin: 0 0 16px;
  display: flex;
  align-items: center;
  gap: 10px;
  color: var(--text-primary);
  letter-spacing: 0.5px;
}

.am-bio-title::before {
  content: '';
  display: inline-block;
  width: 4px;
  height: 20px;
  border-radius: 4px;
  background: linear-gradient(to bottom, var(--accent-cyan), var(--accent-blue));
}

.am-bio-text {
  color: var(--text-secondary);
  font-size: 0.95rem;
  line-height: 1.9;
  letter-spacing: 0.3px;
}

.am-bio-text p {
  margin: 0;
}

.am-bio-text p + p {
  margin-top: 14px;
}

.am-highlight {
  color: var(--accent-cyan);
  font-weight: 500;
}

.am-highlight-blue {
  color: var(--accent-blue);
  font-weight: 500;
}

.am-skills {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin: 22px 0 0;
  list-style: none;
  padding: 0;
}

.am-skill {
  padding: 8px 18px;
  border-radius: 25px;
  font-size: 0.8rem;
  font-weight: 500;
  letter-spacing: 0.5px;
  background: var(--bg-secondary);
  border: 1px solid var(--border-subtle);
  color: var(--text-secondary);
  transition: all 0.3s ease;
  cursor: default;
}

.am-skill:hover {
  border-color: var(--accent-cyan);
  color: var(--text-primary);
  background: rgba(77, 216, 230, 0.1);
  box-shadow: 0 0 20px rgba(77, 216, 230, 0.1);
  transform: translateY(-2px);
}

.am-stats {
  display: flex;
  gap: 16px;
  flex-wrap: wrap;
}

.am-stat {
  flex: 1;
  min-width: 100px;
  background: var(--bg-secondary);
  border: 1px solid var(--border-subtle);
  border-radius: 12px;
  padding: 16px 20px;
  text-align: center;
  transition: all 0.3s ease;
}

.am-stat:hover {
  border-color: var(--accent-purple);
  background: var(--bg-card-hover);
  transform: translateY(-2px);
}

.am-stat-number {
  font-size: 1.6rem;
  font-weight: 700;
  color: var(--text-primary);
  letter-spacing: -0.5px;
}

.am-stat-label {
  font-size: 0.75rem;
  color: var(--text-muted);
  letter-spacing: 1px;
  text-transform: uppercase;
  margin-top: 2px;
}

/* ===== 頁尾 ===== */
.am-footer {
  border-top: 1px solid var(--border-subtle);
  padding: 24px 0;
  margin-top: 20px;
}

.am-footer-inner {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 12px;
}

.am-footer-text {
  font-size: 0.8rem;
  color: var(--text-muted);
  letter-spacing: 0.5px;
  margin: 0;
}

.am-socials {
  display: flex;
  gap: 16px;
  list-style: none;
  margin: 0;
  padding: 0;
}

.am-socials a {
  color: var(--text-muted);
  text-decoration: none;
  font-size: 0.8rem;
  transition: color 0.3s ease;
  letter-spacing: 0.5px;
}

.am-socials a:hover,
.am-socials a:focus-visible {
  color: var(--accent-cyan);
}

/* ===== RWD ===== */
@media (max-width: 768px) {
  .am-about-layout {
    flex-direction: column;
    align-items: center;
    gap: 28px;
    margin-bottom: 56px;
  }

  .am-profile {
    flex: 0 0 auto;
    width: 100%;
    max-width: 280px;
  }

  .am-content {
    width: 100%;
    min-width: 0;
  }

  .am-avatar {
    width: 220px;
    height: 220px;
  }

  .am-avatar-icon {
    width: 56px;
    height: 56px;
  }

  .am-avatar-icon svg {
    width: 28px;
    height: 28px;
  }

  .am-intro-name {
    font-size: 2rem;
  }

  .am-navbar {
    flex-direction: column;
    align-items: center;
    gap: 16px;
  }

  .am-links {
    gap: 16px;
    flex-wrap: wrap;
    justify-content: center;
  }

  .am-skills {
    justify-content: center;
  }

  .am-footer-inner {
    flex-direction: column;
    text-align: center;
  }
}

@media (prefers-reduced-motion: reduce) {
  .am-avatar::before,
  .am-school-dot {
    animation: none;
  }
}
</style>
