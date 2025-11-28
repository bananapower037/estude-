<template>
  <header class="text-center mt-6">
    <h1 class="text-4xl font-bold text-blue-900">{{ title }}</h1>

    <img
      v-if="banner"
      :src="banner"
      class="mx-auto mt-4 max-h-56 object-contain"
    />
  </header>
</template>

<script setup>
defineProps({
  title: String,
  banner: {
    type: String,
    default: null
  }
})
</script>
