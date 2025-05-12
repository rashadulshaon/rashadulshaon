<script setup>
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
</script>

<template>
  <Header />
  <main class="container py-3">
    <slot />
  </main>
  <Footer />
</template>
