<script setup>
import SubjectPage from "./SubjectPage.vue"

const educacaoFisica = {
  title: "Educação Física",
  banner: "https://i.ibb.co/S4RYMGQ9/8.png",

  categories: [
    "Cultura Corporal",
    "Jogos e Esportes",
    "Saúde e Qualidade de Vida",
    "Anatomia e Fisiologia do Exercício",
    "Ginástica",
    "Lutas"
  ],

  gridTitle: "Destaques de Educação Física",

  highlights: [
    {
      title: "Benefícios do Exercício Aeróbico e Anaeróbico",
      description: "Diferenças e como cada um age no corpo..."
    },
    {
      title: "Regras e Fundamentos Básicos do Voleibol",
      description: "Tudo sobre saque, passe, levantamento e ataque..."
    },
    {
      title: "Primeiros Socorros em Lesões Esportivas",
      description: "O que fazer em casos de entorses e contusões..."
    }
  ]
};
</script>

<template>
  <SubjectPage :subject="educacaoFisica" />
</template>
