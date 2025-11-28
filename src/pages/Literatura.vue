<script setup>
import SubjectPage from "./SubjectPage.vue"

const literatura = {
  title: "Literatura",
  banner: "https://i.ibb.co/bg0w406K/12.png",

  categories: [
    "Teoria Literária",
    "Gêneros Literários",
    "Períodos Literários",
    "Literatura Brasileira",
    "Literatura Portuguesa"
  ],

  gridTitle: "Destaques de Literatura",

  highlights: [
    {
      title: "Romantismo no Brasil: Características e Autores",
      description: "A poesia de Álvares de Azevedo e Castro Alves..."
    },
    {
      title: "Modernismo: A Semana de Arte Moderna de 1922",
      description: "O marco inicial e as fases do Modernismo..."
    },
    {
      title: "Maria Firmina dos Reis: Biografia e Importância",
      description: "Primeira romancista brasileira e obra abolicionista..."
    }
  ]
};
</script>

<template>
  <SubjectPage :subject="literatura" />
</template>
