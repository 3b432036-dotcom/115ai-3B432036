<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'

import DefaultLayout from './layouts/DefaultLayout.vue'
import LegacyLayout from './layouts/LegacyLayout.vue'

const route = useRoute()

/** 依路由 meta 選擇版面，讓舊版深色頁面可以保有原本的設計。 */
const layout = computed(() => (route.meta.layout === 'legacy' ? LegacyLayout : DefaultLayout))
</script>

<template>
  <component :is="layout">
    <router-view />
  </component>
</template>
