<script setup>
import SubjectPage from "./SubjectPage.vue"

const biologia = {
  title: "Biologia",
  banner: "https://i.ibb.co/zTq8BjDM/6.png",

  categories: [
    "Biologia Celular",
    "Genética",
    "Ecologia",
    "Fisiologia Humana",
    "Zoologia",
    "Botânica",
    "Evolução"
  ],

  gridTitle: "Destaques de Biologia",

  highlights: [
    {
      title: "Ciclo de Krebs e Cadeia Respiratória",
      description: "Detalhes da respiração celular e produção de ATP..."
    },
    {
      title: "Leis de Mendel: Genética Básica",
      description: "Entenda os conceitos de dominância e recessividade..."
    },
    {
      title: "Ecossistemas e Cadeias Alimentares",
      description: "Fluxo de energia e relações tróficas na natureza..."
    }
  ]
};
</script>

<template>
  <SubjectPage :subject="biologia" />
</template>
