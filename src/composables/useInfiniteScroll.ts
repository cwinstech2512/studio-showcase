import gsap from 'gsap'
import { onMounted, onUnmounted, type Ref } from 'vue'

interface ScrollOptions {
  direction?: 'up' | 'down'
  duration?: number
}

export function useInfiniteScroll(
  trackRef: Ref<HTMLElement | null>,
  options: ScrollOptions = {},
) {
  const { direction = 'up', duration = 30 } = options
  let tween: gsap.core.Tween | null = null

  onMounted(() => {
    const track = trackRef.value
    if (!track) return

    const distance = track.scrollHeight / 2
    if (!distance) return

    const y = direction === 'up' ? -distance : distance

    tween = gsap.to(track, {
      y,
      duration,
      ease: 'none',
      repeat: -1,
    })
  })

  onUnmounted(() => {
    tween?.kill()
    tween = null
  })
}
