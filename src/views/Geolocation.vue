<script setup lang="ts">
import { computed, reactive } from 'vue'
import { useGeolocation } from '@vueuse/core'

const geolocation = reactive(useGeolocation())
const result = computed(() => JSON.stringify(geolocation, null, 2))
</script>
<template>
  <div class="geolocation">
    <h1>
      Device Geolocation:
    </h1>
    <pre lang="json">{{ result }}</pre>
  </div>
</template>

<style scoped></style>
