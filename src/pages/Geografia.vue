<script setup>
import SubjectPage from "./SubjectPage.vue"

const geografia = {
  title: "Geografia",
  banner: "https://i.ibb.co/HpzGkC7C/3.png",

  categories: [
    "Geografia Física",
    "Geografia Humana",
    "Geografia do Brasil",
    "Geopolítica",
    "Climatologia",
    "Cartografia"
  ],

  gridTitle: "Destaques de Geografia",

  highlights: [
    {
      title: "Estrutura Geológica do Brasil: Rochas e Minérios",
      description: "Conheça o relevo brasileiro e suas formações..."
    },
    {
      title: "Tipos de Clima no Mundo e Fatores Climáticos",
      description: "Diferença entre tempo e clima e as classificações..."
    },
    {
      title: "Urbanização e Problemas Ambientais Urbanos",
      description: "Análise da metropolização e seus desafios..."
    }
  ]
};
</script>

<template>
  <SubjectPage :subject="geografia" />
</template>
