<script setup>
import SubjectPage from "./SubjectPage.vue"

const filosofia = {
  title: "Filosofia",
  banner: "https://i.ibb.co/rKN46KzR/10.png",

  categories: [
    "Filosofia Antiga",
    "Filosofia Medieval",
    "Filosofia Moderna",
    "Filosofia Contemporânea",
    "Ética e Política"
  ],

  gridTitle: "Destaques de Filosofia",

  highlights: [
    {
      title: "Platão: A Alegoria da Caverna e o Mundo das Ideias",
      description: "Entenda o dualismo platônico e a teoria do conhecimento..."
    },
    {
      title: "Introdução à Ética de Aristóteles",
      description: "Conceitos de Virtude e Felicidade (Eudaimonia)..."
    },
    {
      title: "O Racionalismo de René Descartes",
      description: "A dúvida metódica e o 'Penso, logo existo'..."
    }
  ]
};
</script>

<template>
  <SubjectPage :subject="filosofia" />
</template>
