<script setup>
import SubjectPage from "./SubjectPage.vue"

const ingles = {
  title: "Inglês",
  banner: "https://i.ibb.co/Xfhcc9J8/11.png",

  categories: [
    "Cultura Corporal",
    "Jogos e Esportes",
    "Saúde e Qualidade de Vida",
    "Gramática",
    "Vocabulário",
    "Interpretação de Texto",
    "Verb Tenses",
    "Phrasal Verbs",
    "Listening e Speaking"
  ],

  gridTitle: "Destaques de Inglês",

  highlights: [
    {
      title: "Simple Present e Present Continuous: Usos e Estrutura",
      description: "Quando usar e como formar frases nos tempos presente..."
    },
    {
      title: "Modal Verbs: Can, Could, May, Might",
      description: "Expressando habilidades, permissões e possibilidades..."
    },
    {
      title: "Interpretação de Textos: Dicas e Estratégias",
      description: "Como abordar diferentes gêneros textuais em inglês..."
    }
  ]
};
</script>

<template>
  <SubjectPage :subject="ingles" />
</template>
