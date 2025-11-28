<script setup>
import SubjectPage from "./SubjectPage.vue"

const historia = {
  title: "História",
  banner: "https://i.ibb.co/qMZrzLzW/4.png",

  categories: [
    "História Geral",
    "História do Brasil",
    "História Antiga",
    "História Medieval",
    "História Moderna",
    "História Contemporânea"
  ],

  gridTitle: "Destaques de História",

  highlights: [
    {
      title: "Revolução Francesa: Causas e Consequências",
      description: "Conheça o movimento que mudou a história do Ocidente..."
    },
    {
      title: "Era Vargas no Brasil: Principais Fases",
      description: "Aprofunde-se no período de Getúlio Vargas..."
    },
    {
      title: "A Crise de 1929 e seus Efeitos Globais",
      description: "Entenda a Grande Depressão e o impacto econômico..."
    }
  ]
};
</script>

<template>
  <SubjectPage :subject="historia" />
</template>
