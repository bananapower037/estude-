<script setup>
import SubjectPage from "./SubjectPage.vue"

const portugues = {
  title: "Língua Portuguesa",
  banner: "https://i.ibb.co/jZG7dFyN/2.png",

  categories: [
    "Produção de Textos",
    "Sintaxe",
    "Morfologia",
    "Pragmática",
    "Fonologia",
    "Ortografia",
    "Estilística"
  ],

  gridTitle: "Destaques de Língua Portuguesa",

  highlights: [
    {
      title: "Exercícios sobre conjunções coordenativas (com gabarito resolvido)",
      description: "As conjunções coordenativas têm um papel essencial..."
    },
    {
      title: "Exercícios sobre conjunções subordinativas (com gabarito)",
      description: "Teste seus conhecimentos com exercícios..."
    },
    {
      title: "Maria Firmina dos Reis: biografia e importância",
      description: "Maria Firmina dos Reis foi professora e escritora..."
    }
  ]
};
</script>

<template>
  <SubjectPage :subject="portugues" />
</template>
