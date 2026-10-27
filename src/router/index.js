import { createRouter, createWebHashHistory } from 'vue-router'

import AboutView from '../views/AboutView.vue'
import AboutMeView from '../views/AboutMeView.vue'
import ContactView from '../views/ContactView.vue'
import HomeView from '../views/HomeView.vue'
import PortfolioView from '../views/PortfolioView.vue'

/**
 * 以 hash 模式建立路由，靜態主機不需要額外的 SPA rewrite 設定；
 * 建置結果仍建議透過靜態伺服器（npm run preview）瀏覽。
 */
const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      meta: {
        title: '張胤謙 | 個人網站',
        description: '張胤謙的個人網站，包含關於我、作品集與聯絡方式。',
      },
    },
    {
      path: '/about',
      name: 'about',
      component: AboutView,
      meta: {
        title: '關於我 | 張胤謙',
        description: '張胤謙的關於我頁面，包含背景、技能與興趣。',
      },
    },
    {
      path: '/portfolio',
      name: 'portfolio',
      component: PortfolioView,
      meta: {
        title: '作品集 | 張胤謙',
        description: '張胤謙的作品集，包含網站、文章與練習作品。',
      },
    },
    {
      path: '/contact',
      name: 'contact',
      component: ContactView,
      meta: {
        title: '聯絡我 | 張胤謙',
        description: '張胤謙的聯絡頁面，可透過表單預約諮詢。',
      },
    },
    {
      // 保留舊版 aboutme.html 的深色版面設計
      path: '/about-me',
      alias: '/aboutme',
      name: 'about-me',
      component: AboutMeView,
      meta: {
        layout: 'legacy',
        title: '關於我 | XXX 個人介紹',
        description: 'XXX 的個人介紹頁面，包含背景、興趣與學習歷程。',
      },
    },
    {
      path: '/:pathMatch(.*)*',
      redirect: '/',
    },
  ],
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) return savedPosition
    if (to.hash) return { el: to.hash, behavior: 'smooth' }
    return { top: 0 }
  },
})

/** 讓每個路由都能更新瀏覽器標題與 meta description。 */
router.afterEach((to) => {
  document.title = to.meta.title ?? '張胤謙 | 個人網站'

  const description = to.meta.description
  if (!description) return

  let tag = document.querySelector('meta[name="description"]')
  if (!tag) {
    tag = document.createElement('meta')
    tag.setAttribute('name', 'description')
    document.head.appendChild(tag)
  }
  tag.setAttribute('content', description)
})

export default router
