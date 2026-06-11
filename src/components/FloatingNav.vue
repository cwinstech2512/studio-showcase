<script setup lang="ts">
import { motion } from 'motion-v'
import { ref } from 'vue'
import { categories, type CategoryId } from '../data/content'

const active = ref<CategoryId>('all')

const emit = defineEmits<{
  change: [id: CategoryId]
}>()

function select(id: CategoryId) {
  active.value = id
  emit('change', id)
}
</script>

<template>
  <motion.nav
    class="floating-nav"
    aria-label="Category filter"
    :initial="{ opacity: 0, y: 16 }"
    :animate="{ opacity: 1, y: 0 }"
    :transition="{ duration: 0.8, delay: 1.6, ease: [0, 0.54, 0.22, 1] }"
  >
    <div class="floating-nav__pill">
      <button
        v-for="cat in categories"
        :key="cat.id"
        class="floating-nav__item"
        :class="{ 'floating-nav__item--active': active === cat.id }"
        @click="select(cat.id)"
      >
        {{ cat.labelJa }}
      </button>
    </div>
  </motion.nav>
</template>

<style scoped>
.floating-nav {
  position: fixed;
  left: 50%;
  bottom: 25px;
  z-index: 20;
  transform: translateX(-50%);
  max-width: calc(100% - 48px);
}

.floating-nav__pill {
  display: flex;
  flex-wrap: nowrap;
  gap: 2px;
  padding: 10px 40px;
  overflow-x: auto;
  background: rgba(255, 255, 255, 0.08);
  border: 1px solid #616161;
  border-radius: 29px;
  box-shadow: 0 2px 24px rgba(0, 0, 0, 0.14);
  backdrop-filter: blur(30px);
  -webkit-backdrop-filter: blur(30px);
}

.floating-nav__pill::-webkit-scrollbar {
  display: none;
}

.floating-nav__item {
  flex: none;
  padding: 10px 16px;
  color: #8e8e8e;
  font-size: 14px;
  font-weight: 500;
  white-space: nowrap;
  border-radius: 6px;
  transition:
    background 0.4s cubic-bezier(0, 0.5, 0.22, 1),
    color 0.4s cubic-bezier(0, 0.5, 0.22, 1),
    box-shadow 0.4s var(--ease-studio);
}

.floating-nav__item:hover,
.floating-nav__item--active {
  color: #fff;
  background: #111;
}

.floating-nav__item:hover {
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.08);
}

@media (max-width: 480px) {
  .floating-nav {
    display: none;
  }
}
</style>
