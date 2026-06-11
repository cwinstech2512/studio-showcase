import Lenis from 'lenis'
import { onMounted, onUnmounted } from 'vue'

export function useLenisScroll() {
  let lenis: Lenis | null = null
  let rafId = 0

  onMounted(() => {
    lenis = new Lenis({
      duration: 1.1,
      easing: (t) => Math.min(1, 1.001 - 2 ** (-10 * t)),
      smoothWheel: true,
    })

    const raf = (time: number) => {
      lenis?.raf(time)
      rafId = requestAnimationFrame(raf)
    }

    rafId = requestAnimationFrame(raf)
  })

  onUnmounted(() => {
    cancelAnimationFrame(rafId)
    lenis?.destroy()
    lenis = null
  })
}
