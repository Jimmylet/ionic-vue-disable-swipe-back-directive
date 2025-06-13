// disableSwipeBack.ts
// A Vue directive to block Ionic Vue 8’s edge-swipe-back gesture
import type { Directive } from 'vue'

/** Called at capture phase to intercept edge swipes */
const handleEdgeSwipe = (e: PointerEvent | TouchEvent) => {
    const x = 'touches' in e
        ? e.touches[0]?.clientX ?? 0
        : (e as PointerEvent).clientX

    if (x <= 50) {
        e.stopImmediatePropagation()
        e.preventDefault()
    }
}

export const disableSwipeBack: Directive = {
    mounted(_, binding) {
        if (binding.value !== false) {
            window.addEventListener('pointerdown', handleEdgeSwipe, true)
            window.addEventListener('touchstart',  handleEdgeSwipe, true)
        }
    },
    unmounted() {
        window.removeEventListener('pointerdown', handleEdgeSwipe, true)
        window.removeEventListener('touchstart',  handleEdgeSwipe, true)
    }
}
