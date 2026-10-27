<script setup>
import Card from './Card.vue'

defineProps({
  project: {
    type: Object,
    required: true,
  },
})
</script>

<template>
  <Card :title="project.title" :content="project.description" class="project-card">
    <template #media>
      <div class="thumb" aria-hidden="true"></div>
    </template>

    <div class="tags">
      <span v-for="tag in project.tags" :key="tag" class="tag">{{ tag }}</span>
    </div>
    <a class="btn btn-secondary" :href="project.href" @click.prevent>查看作品</a>
  </Card>
</template>

<style scoped>
.project-card {
  box-shadow: 0 8px 24px rgba(31, 58, 95, 0.05);
  transition: 0.25s;
}

.project-card:hover {
  transform: translateY(-4px);
  box-shadow: var(--shadow);
}

.thumb {
  aspect-ratio: 16 / 10;
  border-radius: 14px;
  background: linear-gradient(135deg, #dde7f0, #f8fafc);
  position: relative;
  overflow: hidden;
  margin-bottom: 16px;
}

.thumb::before {
  content: '';
  position: absolute;
  width: 120px;
  height: 120px;
  border: 2px solid rgba(31, 58, 95, 0.16);
  border-radius: 50%;
  left: 20px;
  top: 20px;
}

.thumb::after {
  content: '';
  position: absolute;
  width: 100px;
  height: 100px;
  background: rgba(74, 144, 164, 0.18);
  border-radius: 20px;
  right: 20px;
  bottom: 20px;
  transform: rotate(14deg);
}

.tags {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin: 14px 0;
}

.tag {
  font-size: 0.78rem;
  color: var(--primary);
  background: #eaf1f7;
  border-radius: 999px;
  padding: 5px 10px;
}
</style>
