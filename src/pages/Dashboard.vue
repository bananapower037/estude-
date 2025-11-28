<template>
  <div class="min-h-screen bg-gradient-to-br from-purple-100 to-purple-300 text-gray-800">
    <!-- Cabeçalho -->
    <header class="bg-purple-700 text-white p-6 shadow-md">
      <h1 class="text-3xl font-bold text-center">ESTUDE+ Academy</h1>
      <p class="text-center text-sm mt-2">Do fundamental ao médio, tudo para aprender bem</p>
    </header>

    <!-- Barra de navegação -->
    <nav class="bg-white shadow flex justify-center gap-6 py-4 text-purple-700 font-semibold">
      <router-link to="/" class="hover:text-purple-900">Home</router-link>
      <router-link to="/login" class="hover:text-purple-900">Login</router-link>
      <router-link to="/registro" class="hover:text-purple-900">Registro</router-link>
      <router-link to="/dashboard" class="hover:text-purple-900">Dashboard</router-link>
    </nav>

    <!-- Campo de busca -->
    <div class="flex justify-center mt-6 mb-4">
      <input
        type="text"
        placeholder="🔍 O que você precisa aprender"
        class="w-full max-w-xl p-3 rounded-full border border-purple-300 shadow"
      />
    </div>

    <!-- Matérias -->
    <section class="px-6 py-8">
      <h2 class="text-2xl font-bold text-center mb-6">Matérias essenciais para aprender e praticar</h2>
      <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
        <router-link 
          v-for="materia in materias"
          :key="materia.nome"
          :to="`/${materia.nome}`"
          class="bg-white rounded-xl shadow-md p-4 flex flex-col items-center justify-center hover:scale-105 transition-transform duration-300 cursor-pointer"
        >
          <div class="text-4xl mb-2">{{ materia.emoji }}</div>
          <h3 class="text-lg font-semibold text-center">{{ materia.nome }}</h3>
        </router-link>

      </div>
    </section>
  </div>
</template>

<script>

export default {
  data() {
    return {
      materias: [
        { nome: 'Portugues', emoji: '📘' },
        { nome: 'Matemática', emoji: '➗' },
        { nome: 'História', emoji: '🏛️' },
        { nome: 'Inglês', emoji: '🇬🇧' },
        { nome: 'Geografia', emoji: '🗺️' },
        { nome: 'Biologia', emoji: '🧬' },
        { nome: 'Física', emoji: '⚛️' },
        { nome: 'Química', emoji: '🧪' },
        { nome: 'Filosofia', emoji: '🧠' },
        { nome: 'Literatura', emoji: '📖' },
        { nome: 'Educação Física', emoji: '🏃‍♂️' },
        { nome: 'Sociologia', emoji: '👥' },
      ],
    };
  },
};
</script>
