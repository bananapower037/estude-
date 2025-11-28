<template>
  <div class="flex flex-wrap gap-3 justify-center mt-6">
    <button
      v-for="c in categories"
      :key="c"
      class="bg-blue-100 px-4 py-2 rounded-full text-blue-900 font-semibold hover:bg-blue-200 transition"
    >
      {{ c }}
    </button>
  </div>
</template>

<script setup>
defineProps({
  categories: Array
})
</script>
