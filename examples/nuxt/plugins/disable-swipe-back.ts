// plugins/disable-swipe-back.ts
import { defineNuxtPlugin } from '#app'
import { disableSwipeBack } from '@/directives/disableSwipeBack' // adjust path

export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.vueApp.directive('disable-swipe-back', disableSwipeBack)
})
