# 張胤謙個人網站 — Vue 3 版

原本以多個獨立 HTML 檔（`index.html`、`about.html`、`portfolio.html`、`contact.html`）組成的個人網站，重構為 **Vue 3 + Vite + Vue Router** 的單頁應用（SPA）。視覺設計、文案與互動行為皆保留，程式碼改以元件、路由與資料驅動的方式組織。

## 技術棧

- [Vue 3](https://vuejs.org/)（`<script setup>` 單檔元件）
- [Vue Router 4](https://router.vuejs.org/)（hash 模式）
- [Vite 6](https://vite.dev/) 開發與建置

## 開始使用

```bash
cd vue3
npm install
npm run dev       # 開發伺服器（預設 http://localhost:5173）
npm run build     # 產生 dist/
npm run preview   # 預覽建置結果
```

> 相依套件版本已鎖定在 `package-lock.json`；第一次執行前一定要先 `npm install`。

### Windows PowerShell 無法執行 npm

若出現「因為這個系統上已停用指令碼執行，所以無法載入 npm.ps1」，是 PowerShell 的執行原則阻擋了 `npm.ps1`，與專案無關。可改用下列任一方式：

```powershell
# 1. 直接呼叫 npm.cmd（建議，不需修改系統設定）
npm.cmd install
npm.cmd run dev

# 2. 只在此次 PowerShell 工作階段放寬執行原則
Set-ExecutionPolicy -Scope Process -ExecutionPolicy Bypass
npm run dev

# 3. 改用命令提示字元（cmd）
cmd /c "npm run dev"
```

## 路由

| 路徑 | 頁面 | 對應原檔案 |
| --- | --- | --- |
| `/` | `HomeView` | `index.html` |
| `/about` | `AboutView` | `about.html` |
| `/portfolio` | `PortfolioView` | `portfolio.html` |
| `/contact` | `ContactView` | `contact.html` |
| `/about-me` | `AboutMeView` | `aboutme.html`（深色版面，原樣保留） |
| 其他 | 重新導向 `/` | — |

採用 **hash 模式**（網址形如 `/index.html#/about`），靜態主機不需要額外的 SPA rewrite 規則；若部署環境支援 SPA fallback，也可在 `src/router/index.js` 改成 `createWebHistory()`。由於專案使用 ES module，建置後請以靜態伺服器（`npm run preview`）瀏覽，不要直接雙擊 `dist/index.html`。

## 目錄結構

```text
vue3/
├── index.html                 # Vite 進入點（含 favicon、預設 meta）
├── vite.config.js
├── package.json
└── src/
    ├── main.js                # 建立 app、註冊 router 與 v-reveal
    ├── App.vue                # 依路由 meta 選擇版面
    ├── router/index.js        # 路由、標題與 meta description
    ├── layouts/
    │   ├── DefaultLayout.vue  # 淺色主題：頁首 + main + 頁尾
    │   └── LegacyLayout.vue   # 深色主題外框（原 aboutme.html）
    ├── components/
    │   ├── SiteHeader.vue     # 導覽（目前頁面以 span 呈現）
    │   ├── SiteFooter.vue
    │   ├── Card.vue           # 通用卡片（props：title、content）
    │   ├── ProjectCard.vue    # 作品卡片（以 Card 為基礎組合）
    │   └── FormField.vue      # 表單欄位（input / textarea / select）
    ├── directives/reveal.js   # IntersectionObserver 進場動畫
    ├── data/site.js           # 導覽、作品、技能、選項等靜態資料
    ├── styles/main.css        # 共用設計變數與版面樣式
    └── views/
        ├── HomeView.vue
        ├── AboutView.vue
        ├── PortfolioView.vue
        ├── ContactView.vue
        └── AboutMeView.vue
```

## 重構重點

- **共用版型**：四頁原本各自複製一份頁首、頁尾與 CSS，現在由 `DefaultLayout`、`SiteHeader`、`SiteFooter` 與 `styles/main.css` 統一管理。
- **元件化**：重複的卡片容器抽成通用 `Card`，作品卡片改為以 `Card` 組合；聯絡表單欄位抽成 `FormField`，作品、技能與模擬資料改由 `data/site.js` 的陣列搭配 `v-for` 產生。
- **路由**：頁面切換改用 `<router-link>`，不會整頁重新載入；切換路由時自動更新 `document.title` 與 meta description，並回到頁面頂端。
- **互動邏輯**：
  - 進場動畫改為自訂指令 `v-reveal`，只建立一個 `IntersectionObserver`，並在元件卸載時取消觀察。
  - 聯絡表單改用 Vue 響應式狀態（`reactive` / `ref`）處理驗證、錯誤提示、送出後停用按鈕與成功訊息，規則與原版一致。
  - 作品連結的佔位行為以 `@click.prevent` 處理。
- **無障礙與細節**：保留 `aria-current`、`aria-live`、`aria-label`、`prefers-reduced-motion` 等設定；`aboutme.html` 的頭像預留區另外實作了「點擊上傳預覽」。
- **相容性**：`aboutme.html` 的深色設計以獨立路由 `/about-me` 與 `LegacyLayout` 保留，不影響淺色主題頁面。

## Card 元件

`Card.vue` 以 `title`、`content` 兩個 props 接收標題與內容；需要額外內容時使用預設 slot，需要在標題前放圖片時使用 `media` slot。

首頁以三筆模擬資料（`cardSamples`）示範呼叫方式：

```vue
<Card
  v-for="item in cardSamples"
  :key="item.title"
  :title="item.title"
  :content="item.content"
/>
```

作品卡片 `ProjectCard` 也改用 `Card` 作為容器，圖片放進 `media` slot，標籤與按鈕放進預設 slot。

## 原始檔案

上一層目錄仍保留重構前的 `index.html`、`about.html`、`portfolio.html`、`contact.html`、`aboutme.html`，方便對照。
