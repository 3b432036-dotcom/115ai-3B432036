<script setup>
import { navItems } from '../data/site'
import { useRoute } from 'vue-router'

const route = useRoute()
const isCurrent = (name) => route.name === name
</script>

<template>
  <header class="site-header">
    <div class="nav-inner">
      <router-link class="brand" :to="{ name: 'home' }">張胤謙</router-link>
      <nav aria-label="主要導覽">
        <ul class="nav-list">
          <li v-for="item in navItems" :key="item.name">
            <span v-if="isCurrent(item.name)" class="nav-current" aria-current="page">
              {{ item.label }}
            </span>
            <router-link v-else :to="{ name: item.name }">{{ item.label }}</router-link>
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>
