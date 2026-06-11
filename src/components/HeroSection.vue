<script setup lang="ts">
import { motion } from 'motion-v'
import ScrollColumn from './ScrollColumn.vue'
import { heroColumnImages } from '../data/content'

const leftCols = [
  { images: heroColumnImages.left, direction: 'up' as const, duration: 32, width: 200 },
  { images: heroColumnImages.tall, direction: 'down' as const, duration: 36, width: 260 },
]

const rightCols = [
  { images: heroColumnImages.right, direction: 'down' as const, duration: 30, width: 200 },
  { images: heroColumnImages.left, direction: 'up' as const, duration: 34, width: 400 },
]

const basePath = import.meta.env.BASE_URL
</script>

<template>
  <section id="top" class="hero">
    <motion.div
      class="hero__columns hero__columns--left"
      :initial="{ opacity: 0 }"
      :animate="{ opacity: 1 }"
      :transition="{ duration: 1.6, ease: [0, 0.45, 0.22, 1] }"
    >
      <ScrollColumn
        v-for="(col, i) in leftCols"
        :key="`left-${i}`"
        v-bind="col"
      />
    </motion.div>

    <div class="hero__gradient" />

    <motion.div
      class="hero__content"
      :initial="{ opacity: 0, scale: 0.9 }"
      :animate="{ opacity: 1, scale: 1 }"
      :transition="{ duration: 2.4, ease: [0, 0.4, 0.22, 1], delay: 0.2 }"
    >
      <motion.img
        :src="`${basePath}assets/showcase-icon.svg`"
        alt=""
        class="hero__icon"
        :while-hover="{ scale: 1.05 }"
        :transition="{ duration: 0.4 }"
      />
      <h1 class="hero__title">Showcase</h1>
      <p class="hero__subtitle">
        Studio Showcase is where you can explore websites from around the world
        created with Studio.Design by genre and taste.
      </p>
      <motion.a
        href="#websites"
        class="hero__cta"
        :while-hover="{ scale: 1.05, backgroundColor: '#ebebeb' }"
        :while-tap="{ scale: 0.98 }"
        :transition="{ duration: 0.4, ease: [0, 0.5, 0.22, 1] }"
      >
        Get inspired for your next idea.
      </motion.a>
    </motion.div>

    <motion.div
      class="hero__columns hero__columns--right"
      :initial="{ opacity: 0 }"
      :animate="{ opacity: 1 }"
      :transition="{ duration: 1.6, ease: [0, 0.45, 0.22, 1], delay: 0.1 }"
    >
      <ScrollColumn
        v-for="(col, i) in rightCols"
        :key="`right-${i}`"
        v-bind="col"
      />
    </motion.div>

    <!-- Floating UI mockups -->
    <motion.aside
      class="float-card float-card--chat"
      :initial="{ opacity: 0, y: 24, scale: 0.92 }"
      :animate="{ opacity: 1, y: 0, scale: 1 }"
      :transition="{ duration: 1, delay: 0.8, ease: [0, 0.5, 0.22, 1] }"
    >
      <p class="float-card__label">A picture is worth a thousand words.</p>
      <p class="float-card__text">
        Native Unsplash integration is built in. Find ready to use photos right
        within the app. Free of charge to use.
      </p>
      <div class="float-card__badge">
        <span class="float-card__dot" />
        Online
      </div>
    </motion.aside>

    <motion.aside
      class="float-card float-card--preview"
      :initial="{ opacity: 0, x: 40 }"
      :animate="{ opacity: 1, x: 0 }"
      :transition="{ duration: 1.2, delay: 1, ease: [0.39, 0.575, 0.565, 1] }"
    >
      <div class="float-card__preview-head">
        <span class="float-card__avatar" />
        <div>
          <strong>Maggie Bousquet</strong>
          <small>2020/4/8 14:05</small>
        </div>
      </div>
      <p>Resolve</p>
      <p class="float-card__muted">
        I think that's a great idea. Let's get the messaging really sharp.
      </p>
    </motion.aside>

    <motion.aside
      class="float-card float-card--palette"
      :initial="{ opacity: 0, y: -20 }"
      :animate="{ opacity: 1, y: 0 }"
      :transition="{ duration: 1, delay: 1.2 }"
    >
      <span class="palette-chip palette-chip--active" />
      <span class="palette-chip" />
      <span class="palette-chip" />
      <span class="palette-chip palette-chip--highlight" />
      <span class="palette-chip" />
    </motion.aside>
  </section>
</template>

<style scoped>
.hero {
  position: relative;
  display: flex;
  align-items: stretch;
  justify-content: center;
  min-height: 100vh;
  overflow: hidden;
  background: #111;
}

.hero__columns {
  display: flex;
  gap: 5px;
  flex: none;
}

.hero__columns--left {
  flex-direction: row-reverse;
}

.hero__columns--right {
  flex-direction: row-reverse;
}

.hero__gradient {
  position: absolute;
  inset: 0;
  background: linear-gradient(
    135deg,
    rgba(17, 17, 17, 0.9) 0%,
    rgba(17, 17, 17, 0.08) 58%,
    #111 100%
  );
  pointer-events: none;
  z-index: 1;
}

.hero__content {
  position: relative;
  z-index: 2;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: min(320px, calc(100% - 120px));
  margin: 0 60px;
  text-align: center;
}

.hero__icon {
  width: 48px;
  height: 48px;
  margin-bottom: 10px;
}

.hero__title {
  margin: 0;
  color: #eaeaea;
  font-size: clamp(36px, 6vw, 56px);
  font-weight: 700;
  letter-spacing: -0.05em;
  line-height: 1;
  text-shadow: 0 0 38px rgba(255, 255, 255, 0.27);
}

.hero__subtitle {
  margin: 16px 0 0;
  color: #eaeaea;
  font-size: clamp(14px, 2vw, 16px);
  font-weight: 400;
  line-height: 1.7;
}

.hero__cta {
  margin-top: 56px;
  padding: 20px 28px;
  color: #333;
  font-size: 16px;
  font-weight: 700;
  background: #fff;
  border-radius: 6px;
  box-shadow: 0 0 0 rgba(0, 0, 0, 0.2);
}

.float-card {
  position: absolute;
  z-index: 2;
  background: #fff;
  border: 1px solid #eee;
  border-radius: 8px;
  box-shadow: 0 2px 17px rgba(0, 0, 0, 0.1);
  pointer-events: none;
}

.float-card--chat {
  left: 17px;
  bottom: 80px;
  width: 280px;
  padding: 13px;
}

.float-card__label {
  margin: 12px 0 3px;
  color: #8e8e8e;
  font-size: 13px;
}

.float-card__text {
  margin: 0;
  color: #777;
  font-size: 11px;
  line-height: 1.4;
}

.float-card__badge {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  margin-top: 15px;
  padding: 2px 10px 3px;
  color: #fff;
  font-size: 12px;
  font-weight: 700;
  background: #45caca;
  border-radius: 40px;
}

.float-card__dot {
  width: 26px;
  height: 26px;
  background: #fff;
  border-radius: 50%;
}

.float-card--preview {
  right: -44px;
  bottom: 25px;
  width: 260px;
  padding: 30px;
  border: 2px solid #ff15a5;
}

.float-card__preview-head {
  display: flex;
  gap: 8px;
  align-items: center;
  margin-bottom: 10px;
}

.float-card__avatar {
  width: 26px;
  height: 26px;
  border: 1px solid #ff15a5;
  border-radius: 50%;
}

.float-card__preview-head strong {
  display: block;
  font-size: 16px;
}

.float-card__preview-head small,
.float-card__muted {
  color: #777;
  font-size: 11px;
}

.float-card--palette {
  right: -135px;
  bottom: 215px;
  display: flex;
  gap: 6px;
  padding: 12px;
  background: transparent;
  border: none;
  box-shadow: none;
}

.palette-chip {
  width: 60px;
  height: 60px;
  background: #eee;
  border: 1px solid transparent;
  border-radius: 6px;
}

.palette-chip--active {
  border: 2px solid #ffce54;
}

.palette-chip--highlight {
  border: 1px solid #ffce54;
  border-radius: 50%;
}

@media (max-width: 1100px) {
  .hero__columns {
    opacity: 0.35;
  }

  .float-card--preview,
  .float-card--palette {
    display: none;
  }
}

@media (max-width: 768px) {
  .hero {
    flex-direction: column;
  }

  .hero__columns {
    position: absolute;
    inset: 0;
    justify-content: center;
    opacity: 0.2;
  }

  .hero__gradient {
    background: linear-gradient(180deg, rgba(17, 17, 17, 0) 40%, #111 100%);
  }

  .hero__content {
    min-height: 80vh;
    margin: 30px 32px;
  }

  .float-card--chat {
    transform: scale(0.6);
    left: -63px;
    bottom: -168px;
  }
}

@media (max-width: 480px) {
  .hero__cta {
    width: 100%;
    margin-top: 30px;
  }
}
</style>
