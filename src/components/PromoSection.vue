<script setup lang="ts">
import { motion } from 'motion-v'
</script>

<template>
  <section class="promo">
    <div class="promo__shell">
      <motion.div
        class="promo__gradient"
        :initial="{ opacity: 0 }"
        :while-in-view="{ opacity: 1 }"
        :viewport="{ once: true }"
        :transition="{ duration: 1.2 }"
      />

      <motion.div
        class="promo__inner"
        :initial="{ opacity: 0, y: 32 }"
        :while-in-view="{ opacity: 1, y: 0 }"
        :viewport="{ once: true }"
        :transition="{ duration: 0.8, ease: [0.2, 1, 1, 1] }"
      >
        <p class="promo__eyebrow">Is your website the next one to be featured?</p>
        <h2 class="promo__title">
          Say hello to<br />
          <span>Your new site.</span>
        </h2>
        <p class="promo__desc">
          With Studio.Design, you can create a completely original website without
          coding. CMS and forms are also available for free.
        </p>
        <motion.a
          href="https://studio.design"
          class="promo__cta"
          target="_blank"
          rel="noopener"
          :while-hover="{ scale: 1.05, backgroundColor: '#ebebeb' }"
          :while-tap="{ scale: 0.98 }"
        >
          Start for Free
        </motion.a>
      </motion.div>

      <motion.div
        class="promo__device"
        :initial="{ opacity: 0, x: 60 }"
        :while-in-view="{ opacity: 1, x: 0 }"
        :viewport="{ once: true }"
        :transition="{ duration: 1, delay: 0.2, ease: [0, 0.45, 0.22, 1] }"
      >
        <img
          src="https://storage.googleapis.com/studio-design-assets/projects/V5a74Ny3WR/s-1080x1920_v-frms_webp_dda03739-67bc-493f-8a78-b41192b979bb_small.webp"
          alt="Studio editor preview"
          loading="lazy"
        />
      </motion.div>
    </div>
  </section>
</template>

<style scoped>
.promo {
  padding: 40px;
}

.promo__shell {
  position: relative;
  overflow: hidden;
  border-radius: 6px;
  box-shadow: 0 2px 16px rgba(0, 0, 0, 0.2);
}

.promo__gradient {
  position: absolute;
  inset: 0;
  background: linear-gradient(135deg, #111 0%, #1c1c1c 100%);
}

.promo__inner {
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 600px;
  padding: 60px 24px;
  text-align: center;
}

.promo__eyebrow {
  margin: 0 0 30px;
  color: #fff;
  font-size: clamp(28px, 4vw, 40px);
  font-weight: 900;
  line-height: 1.2;
  font-feature-settings: 'palt' 1;
}

.promo__title {
  margin: 0;
  color: #fff;
  font-size: clamp(28px, 4vw, 40px);
  font-weight: 300;
  line-height: 1.6;
}

.promo__title span {
  font-weight: 900;
}

.promo__desc {
  max-width: 520px;
  margin: 16px 0 0;
  color: #fff;
  font-size: clamp(14px, 2vw, 20px);
  font-weight: 300;
  line-height: 1.6;
}

.promo__cta {
  margin-top: 56px;
  padding: 20px 28px;
  color: #333;
  font-size: 16px;
  font-weight: 700;
  background: #fff;
  border-radius: 6px;
}

.promo__device {
  position: absolute;
  right: 5%;
  bottom: -10%;
  z-index: 0;
  width: min(280px, 35vw);
  opacity: 0.85;
  box-shadow: 0 2px 24px rgba(0, 0, 0, 0.16);
}

.promo__device img {
  width: 100%;
  border-radius: 4px;
}

@media (max-width: 768px) {
  .promo {
    padding: 24px 8px;
  }

  .promo__inner {
    min-height: 700px;
    padding-top: 60px;
    align-items: flex-start;
    text-align: left;
  }

  .promo__device {
    right: -10%;
    bottom: 0;
    width: 220px;
  }
}
</style>
