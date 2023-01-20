<script setup lang="ts">
import {computed, reactive} from 'vue'
import { useDeviceOrientation } from '@vueuse/core'

const motion = reactive(useDeviceOrientation())
const result = computed(() => JSON.stringify(motion, null, 2))
</script>

<template>
  <div class="orientation">
    <h1>
      Device Orientation:
    </h1>
    <pre lang="json">{{ result }}</pre>
  </div>
</template>

<style scoped></style>
