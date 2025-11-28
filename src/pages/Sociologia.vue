<script setup>
import SubjectPage from "./SubjectPage.vue"

const sociologia = {
  title: "Sociologia",
  banner: "https://i.ibb.co/zHR15HYD/7.png",

  categories: [
    "Teorias Sociológicas",
    "Cultura e Sociedade",
    "Relações de Trabalho",
    "Desigualdade Social",
    "Meios de Comunicação",
    "Cidadania e Política"
  ],

  gridTitle: "Destaques de Sociologia",

  highlights: [
    {
      title: "Karl Marx: Resumo sobre sua Obra e Pensamento",
      description: "Introdução ao materialismo histórico e dialético..."
    },
    {
      title: "O Conceito de Fato Social em Émile Durkheim",
      description: "Entenda como a sociedade molda o indivíduo..."
    },
    {
      title: "Globalização: Conceitos e Características",
      description: "Analise a interconexão cultural, econômica e política..."
    }
  ]
};
</script>

<template>
  <SubjectPage :subject="sociologia" />
</template>
