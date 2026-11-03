import { defineConfig } from 'vite'
import vue from '@vitejs.plugin-vue'

export default defineConfig({
  plugins: [vue()],
  base: '/115ai-3B432036/', // 例如儲存庫叫 my-vue-app，這裡就寫 '/my-vue-app/'
})
