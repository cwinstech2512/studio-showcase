<script setup lang="ts">
import { ref } from 'vue'
import AppFooter from './components/AppFooter.vue'
import AppHeader from './components/AppHeader.vue'
import FloatingNav from './components/FloatingNav.vue'
import HeroSection from './components/HeroSection.vue'
import PromoSection from './components/PromoSection.vue'
import WebsiteGrid from './components/WebsiteGrid.vue'
import { useLenisScroll } from './composables/useLenisScroll'
import type { CategoryId } from './data/content'

const activeCategory = ref<CategoryId>('all')

useLenisScroll()
</script>

<template>
  <AppHeader />
  <main>
    <HeroSection />
    <WebsiteGrid :category="activeCategory" />
    <PromoSection />
  </main>
  <AppFooter />
  <FloatingNav @change="activeCategory = $event" />
</template>
