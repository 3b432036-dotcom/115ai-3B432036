/** 共用的靜態內容，讓頁面元件只負責呈現。 */

export const navItems = [
  { name: 'home', label: '首頁' },
  { name: 'about', label: '關於我' },
  { name: 'portfolio', label: '作品集' },
  { name: 'contact', label: '聯絡我' },
]

export const projects = [
  {
    id: 'project-1',
    title: '作品一',
    description: '以簡潔版面呈現個人介紹的靜態網頁。',
    tags: ['HTML', 'CSS', 'RWD'],
    href: '#',
  },
  {
    id: 'project-2',
    title: '作品二',
    description: '練習 JavaScript 表單驗證與互動效果。',
    tags: ['HTML', 'CSS', 'JavaScript'],
    href: '#',
  },
  {
    id: 'project-3',
    title: '作品三',
    description: '以卡片式排版整理文章與作品連結。',
    tags: ['HTML', 'CSS', 'UI'],
    href: '#',
  },
]

/** Card 元件示範用的三筆模擬資料（標題 + 內容）。 */
export const cardSamples = [
  { title: '背景', content: '目前是學生，正在學習網頁設計與前端開發。' },
  { title: '技能', content: 'HTML、CSS、JavaScript、RWD、Git。' },
  { title: '興趣', content: '觀察網站設計、閱讀、學習新工具。' },
]

export const skills = [
  'HTML',
  'CSS',
  'JavaScript',
  'RWD',
  'Git',
  'UI 基礎',
  '問題解決',
  '持續學習',
]

export const interests = [
  '觀察簡潔、專業的網站設計',
  '閱讀與整理學習筆記',
  '嘗試新的前端工具與技巧',
  '把複雜內容轉化成容易理解的版面',
]

export const contactTypes = ['網站製作', '作品討論', '課程作業', '其他']

export const contactTimes = ['上午', '下午', '晚上', '不指定']
