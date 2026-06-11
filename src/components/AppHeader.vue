<script setup lang="ts">
import { motion } from 'motion-v'
import { useWindowScroll } from '@vueuse/core'
import { computed } from 'vue'
import { navLinks } from '../data/content'

const { y } = useWindowScroll()
const isScrolled = computed(() => y.value > 40)
const basePath = import.meta.env.BASE_URL
</script>

<template>
  <motion.header
    class="header"
    :class="{ 'header--scrolled': isScrolled }"
    :initial="{ opacity: 0, y: -12 }"
    :animate="{ opacity: 1, y: 0 }"
    :transition="{ duration: 0.8, ease: [0, 0.5, 0.22, 1] }"
  >
    <a href="#top" class="header__logo">
      <img :src="`${basePath}assets/logo.svg`" alt="Studio" width="150" height="20" />
    </a>

    <nav class="header__nav">
      <a
        v-for="link in navLinks"
        :key="link.label"
        :href="link.href"
        class="header__link"
        :target="'external' in link && link.external ? '_blank' : undefined"
        :rel="'external' in link && link.external ? 'noopener noreferrer' : undefined"
      >
        {{ link.label }}
        <span v-if="'external' in link && link.external" class="header__external">↗</span>
      </a>
    </nav>

    <div class="header__actions">
      <a href="https://studio.design/login" class="header__ghost" target="_blank" rel="noopener">
        Login
      </a>
      <a href="https://studio.design" class="header__cta" target="_blank" rel="noopener">
        Start for Free
      </a>
    </div>

    <button class="header__menu" aria-label="Open menu">
      <span />
      <span />
    </button>
  </motion.header>
</template>

<style scoped>
.header {
  position: fixed;
  inset: 0 0 auto;
  z-index: 30;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 70px;
  padding: 0 40px;
  border-bottom: 1px solid transparent;
  transition:
    background 0.4s var(--ease-studio),
    border-color 0.4s var(--ease-studio),
    backdrop-filter 0.4s var(--ease-studio);
}

.header--scrolled {
  background: rgba(17, 17, 17, 0.72);
  border-bottom-color: rgba(97, 97, 97, 0.6);
  backdrop-filter: blur(30px);
  -webkit-backdrop-filter: blur(30px);
}

.header__logo {
  transition: transform 0.4s var(--ease-studio);
}

.header__logo:hover {
  transform: scale(1.05);
}

.header__nav {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-left: 32px;
}

.header__link {
  padding: 12px;
  color: #fff;
  font-size: 14px;
  font-weight: 700;
  transition: opacity 0.8s cubic-bezier(0, 0.5, 0.22, 1);
}

.header__link:hover {
  opacity: 0.5;
}

.header__external {
  margin-left: 4px;
  font-size: 12px;
}

.header__actions {
  display: flex;
  align-items: center;
  gap: 8px;
}

.header__ghost {
  padding: 15px 20px;
  color: #fff;
  font-size: 14px;
  font-weight: 700;
  border-radius: 6px;
  transition: opacity 0.8s cubic-bezier(0, 0.5, 0.22, 1);
}

.header__ghost:hover {
  opacity: 0.5;
}

.header__cta {
  padding: 15px 20px;
  color: #111;
  font-size: 14px;
  font-weight: 700;
  background: #fff;
  border: 1px solid #000;
  border-radius: 6px;
  transition:
    box-shadow 0.4s var(--ease-studio),
    background 0.4s var(--ease-studio);
}

.header__cta:hover {
  background: #ebebeb;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.08);
}

.header__menu {
  display: none;
  flex-direction: column;
  gap: 6px;
  padding: 12px;
}

.header__menu span {
  display: block;
  width: 18px;
  height: 2px;
  background: #fff;
}

@media (max-width: 900px) {
  .header__nav,
  .header__actions {
    display: none;
  }

  .header__menu {
    display: flex;
  }
}

@media (max-width: 480px) {
  .header {
    padding: 0 16px;
  }
}
</style>
