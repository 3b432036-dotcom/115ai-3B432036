<script setup>
import ProjectCard from '../components/ProjectCard.vue'
import { projects } from '../data/site'
</script>

<template>
  <div class="portfolio">
    <section v-reveal>
      <p class="eyebrow">作品集</p>
      <h1>作品與練習</h1>
      <p class="lead">以下作品先以佔位內容呈現，後續可替換成真實專案。</p>
    </section>

    <section v-reveal>
      <div class="card-grid">
        <ProjectCard v-for="project in projects" :key="project.id" :project="project" />
      </div>
    </section>
  </div>
</template>
