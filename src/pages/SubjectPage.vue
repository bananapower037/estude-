<template>
  <div>
    <SubjectHeader :title="subject.title" :banner="subject.banner" />
    <CategoryNav :categories="subject.categories" />
    <CardsGrid :gridTitle="subject.gridTitle" :items="subject.highlights" />
  </div>
</template>

<script setup>
import SubjectHeader from "../components/SubjectHeader.vue";
import CategoryNav from "../components/CategoryNav.vue";
import CardsGrid from "../components/CardsGrid.vue";

defineProps({
  subject: Object
});
</script>
