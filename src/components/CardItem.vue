<template>
  <div class="border rounded-lg p-4 shadow hover:shadow-md transition cursor-pointer">
    <h3 class="text-blue-700 font-semibold mb-2 hover:underline">
      {{ title }}
    </h3>

    <p class="text-gray-700 text-sm">{{ description }}</p>
  </div>
</template>

<script setup>
defineProps({
  title: String,
  description: String
})
</script>
