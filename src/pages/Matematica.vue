<script setup>
import SubjectPage from "./SubjectPage.vue"

const matematica = {
  title: "Matemática",
  banner: "https://i.ibb.co/gFbGVgXq/1.png",

  categories: [
    "Geometria Espacial",
    "Ciclo Trigonometrico",
    "Ângulos",
    "Função Quadratica",
    "Análise Combinatório",
    "Coeficiente angular",
    "Coeficiente Linear"
  ],

  gridTitle: "Destaques de Matemática",

  highlights: [
    {
      title: "Exercícios sobre Funções (com gabarito resolvido)",
      description: "Revise e pratique os principais tipos de funções..."
    },
    {
      title: "O que são Juros Simples e Compostos?",
      description: "Entenda a diferença e como aplicar em problemas..."
    },
    {
      title: "Teorema de Pitágoras: Aplicações e Exemplos",
      description: "Aprenda sobre o teorema fundamental da geometria..."
    }
  ]
};
</script>

<template>
  <SubjectPage :subject="matematica" />
</template>
