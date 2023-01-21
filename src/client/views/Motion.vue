<script setup lang="ts">
import { computed, reactive } from 'vue'
import { useDeviceMotion } from '@vueuse/core'

const motion = reactive(useDeviceMotion())
const result = computed(() => JSON.stringify(motion, null, 2))
</script>

<template>
  <div class="motion">
    <h1>
      Device Motion:
    </h1>
    <pre lang="json">{{ result }}</pre>
  </div>
</template>

<style scoped></style>
