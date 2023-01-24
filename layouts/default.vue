<script setup lang="ts">
import Sidebar from '../components/Sidebar.vue'
</script>

<template>
  <a-layout :style="{ height: '100vh' }">
    <Sidebar />
    <a-layout style="padding: 24px 24px 24px">
      <a-layout-content :style="{ background: '#fff', padding: '24px', margin: 0, minHeight: '500px' }">
        <slot />
      </a-layout-content>
    </a-layout>
  </a-layout>
</template>