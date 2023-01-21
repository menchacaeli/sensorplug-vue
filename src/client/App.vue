<script setup lang="ts">
import { RouterView } from 'vue-router'
import { ref } from 'vue'

const theme = ref('dark')
const handleToggleTheme = () => theme.value = theme.value === 'light' ? 'dark' : 'light'
</script>

<template>
  <v-app :theme="theme">
    <v-app-bar title="sensor-plug">
      <v-spacer />
      <v-btn
          :prepend-icon="theme === 'light' ? 'mdi-weather-sunny' : 'mdi-weather-night'"
          @click="handleToggleTheme"
      >Toggle Theme</v-btn>
    </v-app-bar>

    <v-navigation-drawer permanent>
      <v-list>
        <v-list-item to="/" prepend-icon="mdi-speedometer-medium" title="Get Started"></v-list-item>
        <v-list-group value="Sensors">
          <template v-slot:activator="{ props }">
            <v-list-item
                v-bind="props"
                prepend-icon="mdi-devices"
                title="Sensors"
            ></v-list-item>
          </template>

          <v-list-item to="/geolocation" title="Geolocation"></v-list-item>
          <v-list-item to="/motion" title="Motion"></v-list-item>
          <v-list-item to="/orientation" title="Orientation"></v-list-item>
        </v-list-group>
      </v-list>
    </v-navigation-drawer>

    <v-main>
      <RouterView />
    </v-main>
  </v-app>
</template>
