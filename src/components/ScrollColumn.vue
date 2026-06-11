<script setup lang="ts">
import { computed, ref } from 'vue'
import { useInfiniteScroll } from '../composables/useInfiniteScroll'

const props = defineProps<{
  images: string[]
  direction?: 'up' | 'down'
  duration?: number
  width?: number
}>()

const trackRef = ref<HTMLElement | null>(null)
const loopImages = computed(() => [...props.images, ...props.images])

useInfiniteScroll(trackRef, {
  direction: props.direction ?? 'up',
  duration: props.duration ?? 28,
})
</script>

<template>
  <div class="scroll-column" :style="{ width: `${width ?? 200}px` }">
    <div ref="trackRef" class="scroll-column__track">
      <figure
        v-for="(src, index) in loopImages"
        :key="`${src}-${index}`"
        class="scroll-column__card"
      >
        <img :src="src" :alt="`Showcase preview ${index + 1}`" loading="lazy" />
      </figure>
    </div>
  </div>
</template>

<style scoped>
.scroll-column {
  flex: none;
  height: 100vh;
  overflow: hidden;
  pointer-events: none;
}

.scroll-column__track {
  display: flex;
  flex-direction: column;
  gap: 5px;
  will-change: transform;
}

.scroll-column__card {
  margin: 0;
  border-radius: 0;
  overflow: hidden;
  box-shadow: 0 2px 24px rgba(0, 0, 0, 0.16);
}

.scroll-column__card img {
  width: 100%;
  height: auto;
}
</style>
