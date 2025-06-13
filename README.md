# ionic-vue-disable-swipe-back-directive

A tiny **copy-&-paste** Vue directive to **disable Ionic Vue 8’s iOS-style edge-swipe-back gesture** on specific pages or components. No external dependencies—just drop in two event listeners and stop propagation.

---

## Why?

- Ionic Vue 8 no longer exposes a public API to disable the edge-swipe gesture.
- This directive intercepts the first 50 px from the left edge **before** Ionic’s internal handlers via capture-phase listeners.
- No NPM install—just copy, paste, and register.

---

## Installation

### 1. Copy the directive

Place `disableSwipeBack.ts` in your project, e.g.:

```
src/directives/disableSwipeBack.ts
```

---

### 2a. Plain Vue 3 + Ionic

In **`main.ts`**:

```ts
import { createApp } from 'vue'
import App from './App.vue'
import { IonicVue } from '@ionic/vue'
import router from './router'

// Import the directive
import { disableSwipeBack } from '@/directives/disableSwipeBack'

import '@ionic/vue/css/core.css'
// …other Ionic CSS…

const app = createApp(App)
app.use(IonicVue)
app.use(router)

// Register directive globally
app.directive('disable-swipe-back', disableSwipeBack)

app.mount('#app')
```

---

### 2b. Nuxt 3 + Ionic

Copy the directive into **`plugins/disable-swipe-back.ts`**:

```ts
import { defineNuxtPlugin } from '#app'
import { disableSwipeBack } from '../disableSwipeBack'

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.directive('disable-swipe-back', disableSwipeBack)
})
```

No additional config needed—Nuxt auto-loads plugins.

---

## Usage

Annotate any `<ion-page>` to block swipe-back:

```vue
<template>
  <ion-page v-disable-swipe-back>
    <!-- your content -->
  </ion-page>
</template>
```

- **Enabled** by default (blocks swipe-back).
- To **disable** the block on a page:
  ```html
  <ion-page :v-disable-swipe-back="false">…</ion-page>
  ```

---

## How It Works

1. **Capture-phase listeners** on `window` for `pointerdown` and `touchstart`.
2. If the event’s X coordinate ≤ 20 px, call `stopImmediatePropagation()` + `preventDefault()`.
3. Ionic’s internal swipe-back gesture never fires.

---

## API

- **Directive name**: `v-disable-swipe-back`
- **Default behavior**: active
- **Disable override**: `:v-disable-swipe-back="false"`

---

Copy-and-paste **only** these few lines, register once, and you’re done. No hacks, no NPM package—just a simple Vue directive!
