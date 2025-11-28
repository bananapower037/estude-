<template>
  <div class="max-w-6xl mx-auto mt-10">
    <h2 class="text-2xl font-bold text-gray-800 mb-6">{{ gridTitle }}</h2>

    <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
      <CardItem
        v-for="(item, i) in items"
        :key="i"
        :title="item.title"
        :description="item.description"
      />
    </div>
  </div>
</template>

<script setup>
import CardItem from "./CardItem.vue";

defineProps({
  gridTitle: String,
  items: Array
})
</script>
