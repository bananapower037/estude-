<script setup>
import SubjectPage from "./SubjectPage.vue"

const fisica = {
  title: "Física",
  banner: "https://i.ibb.co/cS0vv1tM/5.png",

  categories: [
    "Mecânica",
    "Termodinâmica",
    "Eletricidade e Magnetismo",
    "Óptica",
    "Ondulatória",
    "Física Moderna"
  ],

  gridTitle: "Destaques de Física",

  highlights: [
    {
      title: "As Três Leis de Newton: Exemplos e Aplicações",
      description: "Fundamentos da dinâmica e do movimento..."
    },
    {
      title: "Eletrodinâmica: Circuitos e Resistência Elétrica",
      description: "Estude as leis de Ohm e seus cálculos..."
    },
    {
      title: "Movimento Uniforme e Uniformemente Variado (M.R.U. e M.R.U.V.)",
      description: "Exercícios sobre velocidade e aceleração..."
    }
  ]
};
</script>

<template>
  <SubjectPage :subject="fisica" />
</template>
