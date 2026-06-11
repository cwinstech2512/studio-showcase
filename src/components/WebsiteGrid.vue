<script setup lang="ts">
import { computed } from 'vue'
import { motion } from 'motion-v'
import { websites, type CategoryId } from '../data/content'
import WebsiteCard from './WebsiteCard.vue'

const props = defineProps<{
  category: CategoryId
}>()

const filtered = computed(() =>
  props.category === 'all'
    ? websites
    : websites.filter((site) => site.category === props.category),
)
</script>

<template>
  <section id="websites" class="grid-section">
    <span id="tags" class="grid-section__anchor" aria-hidden="true" />
    <div class="grid-section__inner">
      <motion.div
        class="grid-section__header"
        :initial="{ opacity: 0, y: 8 }"
        :while-in-view="{ opacity: 1, y: 0 }"
        :viewport="{ once: true }"
        :transition="{ duration: 0.8, delay: 0.05 }"
      >
        <div class="grid-section__brand">
          <img src="/assets/logo.svg" alt="Studio" class="grid-section__logo" />
          <div class="grid-section__titles">
            <motion.span
              :initial="{ opacity: 0, y: 8 }"
              :while-in-view="{ opacity: 1, y: 0 }"
              :viewport="{ once: true }"
              :transition="{ duration: 0.8, delay: 0.05 }"
            >
              Editor's
            </motion.span>
            <motion.span
              class="grid-section__pick"
              :initial="{ opacity: 0, y: 8 }"
              :while-in-view="{ opacity: 1, y: 0 }"
              :viewport="{ once: true }"
              :transition="{ duration: 0.8, delay: 0.1 }"
            >
              Pick
            </motion.span>
          </div>
        </div>
      </motion.div>

      <div class="grid-section__list">
        <WebsiteCard
          v-for="(site, index) in filtered"
          :key="site.url"
          :site="site"
          :index="index"
        />
      </div>

      <motion.a
        href="#websites"
        class="grid-section__more"
        :while-hover="{ opacity: 0.7 }"
      >
        View All Websites
      </motion.a>
    </div>
  </section>
</template>

<style scoped>
.grid-section {
  position: relative;
  padding: 60px 0 120px;
  background: #fff;
}

.grid-section__anchor {
  position: absolute;
  top: 0;
  width: 0;
  height: 0;
}

.grid-section__inner {
  width: min(1440px, calc(100% - 80px));
  margin: 0 auto;
}

.grid-section__header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 48px;
}

.grid-section__brand {
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.grid-section__logo {
  width: 164px;
  filter: invert(1);
}

.grid-section__titles {
  display: flex;
  gap: 4px;
  font-size: 15px;
  font-weight: 700;
  letter-spacing: -0.05em;
}

.grid-section__pick {
  color: #191919;
}

.grid-section__list {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 32px 24px;
}

.grid-section__more {
  display: inline-flex;
  margin-top: 56px;
  color: #141414;
  font-size: 16px;
  font-weight: 700;
  letter-spacing: 0.05em;
}

@media (max-width: 1024px) {
  .grid-section__list {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

@media (max-width: 768px) {
  .grid-section__inner {
    width: 90%;
  }
}

@media (max-width: 600px) {
  .grid-section__list {
    grid-template-columns: 1fr;
  }
}
</style>
