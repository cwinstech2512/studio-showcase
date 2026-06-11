<script setup lang="ts">
import { footerLinks } from '../data/content'
</script>

<template>
  <footer class="footer">
    <div class="footer__inner">
      <div class="footer__columns">
        <div class="footer__col">
          <h4>Features</h4>
          <a v-for="item in footerLinks.features" :key="item" href="#">{{ item }}</a>
        </div>
        <div class="footer__col">
          <h4>Resources</h4>
          <a v-for="item in footerLinks.resources" :key="item" href="#">{{ item }}</a>
        </div>
      </div>

      <div class="footer__social">
        <a
          v-for="item in footerLinks.social"
          :key="item.href"
          :href="item.href"
          target="_blank"
          rel="noopener noreferrer"
          class="footer__social-link"
        >
          {{ item.icon }}
        </a>
      </div>
    </div>

    <div class="footer__bottom">
      <p>© 2024 Studio Inc. All Rights Reserved.</p>
      <div class="footer__lang">
        <button type="button">Japanese</button>
        <span />
        <button type="button" class="footer__lang--active">English</button>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  margin-top: 96px;
  padding: 64px 0 128px;
  background: #f7f7f7;
}

.footer__inner {
  display: flex;
  justify-content: space-between;
  width: min(1440px, calc(100% - 80px));
  margin: 0 auto 48px;
}

.footer__columns {
  display: flex;
  gap: 64px;
}

.footer__col {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.footer__col h4 {
  margin: 0 0 8px;
  font-size: 16px;
  font-weight: 700;
  letter-spacing: 0.05em;
}

.footer__col a {
  font-size: 14px;
  letter-spacing: 0.05em;
  transition: opacity 0.2s cubic-bezier(0.2, 1, 1, 1);
}

.footer__col a:hover {
  opacity: 0.7;
}

.footer__social {
  display: flex;
  gap: 20px;
  align-items: flex-start;
}

.footer__social-link {
  color: rgba(20, 20, 20, 0.5);
  font-size: 18px;
  transition: color 0.3s var(--ease-studio);
}

.footer__social-link:hover {
  color: rgba(20, 20, 20, 0.9);
}

.footer__bottom {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: min(1440px, calc(100% - 80px));
  margin: 0 auto;
}

.footer__bottom p {
  margin: 0;
  font-size: 11px;
  letter-spacing: 0.1em;
}

.footer__lang {
  display: flex;
  align-items: center;
  gap: 16px;
}

.footer__lang button {
  font-size: 14px;
  letter-spacing: 0.05em;
  opacity: 0.7;
}

.footer__lang--active {
  text-decoration: underline;
  opacity: 1 !important;
}

.footer__lang span {
  width: 1px;
  height: 16px;
  background: #141414;
}

@media (max-width: 768px) {
  .footer__inner,
  .footer__bottom {
    flex-direction: column-reverse;
    gap: 24px;
    width: 90%;
  }

  .footer__columns {
    flex-wrap: wrap;
    gap: 32px;
  }
}
</style>
