<script setup lang="ts">
import { motion } from 'motion-v'
import { categories, type WebsiteItem } from '../data/content'

defineProps<{
  site: WebsiteItem
  index: number
}>()

const categoryLabels = Object.fromEntries(
  categories.filter((c) => c.id !== 'all').map((c) => [c.id, c.label]),
) as Record<string, string>
</script>

<template>
  <motion.article
    class="card"
    :initial="{ opacity: 0, y: 24 }"
    :while-in-view="{ opacity: 1, y: 0 }"
    :viewport="{ once: true, margin: '-40px' }"
    :transition="{ duration: 0.6, delay: index * 0.06, ease: [0.2, 1, 1, 1] }"
    :while-hover="{ y: -4 }"
  >
    <a :href="site.url" target="_blank" rel="noopener noreferrer" class="card__link">
      <div class="card__image-wrap">
        <img :src="site.image" :alt="site.title" loading="lazy" />
      </div>
      <div class="card__body">
        <span class="card__category">{{ categoryLabels[site.category] ?? site.category }}</span>
        <h3 class="card__title">{{ site.title }}</h3>
        <p class="card__author">{{ site.author }}</p>
      </div>
    </a>
  </motion.article>
</template>

<style scoped>
.card {
  border-radius: 8px;
  overflow: hidden;
  background: #fff;
  transition: box-shadow 0.4s var(--ease-studio);
}

.card:hover {
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.08);
}

.card__link {
  display: block;
}

.card__image-wrap {
  aspect-ratio: 4 / 3;
  overflow: hidden;
  background: #f0f0f0;
}

.card__image-wrap img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.6s var(--ease-studio);
}

.card:hover .card__image-wrap img {
  transform: scale(1.03);
}

.card__body {
  padding: 16px 0 8px;
}

.card__category {
  display: inline-block;
  margin-bottom: 8px;
  color: #8e8e8e;
  font-size: 12px;
  text-transform: capitalize;
}

.card__title {
  margin: 0 0 6px;
  font-size: 16px;
  font-weight: 700;
  line-height: 1.4;
}

.card__author {
  margin: 0;
  color: #777;
  font-size: 13px;
}

.card__link:hover .card__title {
  opacity: 0.7;
}
</style>
