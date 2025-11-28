<script setup>
import SubjectPage from "./SubjectPage.vue"

const quimica = {
  title: "Química",
  banner: "https://i.ibb.co/F4nh5xzM/9.png",

  categories: [
    "Química Geral",
    "Química Inorgânica",
    "Química Orgânica",
    "Físico-Química",
    "Química Ambiental"
  ],

  gridTitle: "Destaques de Química",

  highlights: [
    {
      title: "Tabela Periódica: Como Ler e Interpretar",
      description: "Guia completo sobre elementos, períodos e grupos..."
    },
    {
      title: "Balanceamento de Equações Químicas",
      description: "Aprenda a aplicar a Lei de Conservação das Massas..."
    },
    {
      title: "Funções Orgânicas: Nomenclatura e Principais Grupos",
      description: "Estude álcoois, aldeídos, cetonas e ácidos carboxílicos..."
    }
  ]
};
</script>

<template>
  <SubjectPage :subject="quimica" />
</template>
