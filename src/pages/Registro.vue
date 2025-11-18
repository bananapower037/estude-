<template>
  <div class="min-h-screen bg-gradient-to-br from-purple-100 to-purple-300 flex items-center justify-center p-6">
    <form @submit.prevent="registrar" class="bg-white p-8 rounded-xl shadow-lg w-full max-w-sm">
      <h2 class="text-2xl font-bold text-purple-700 mb-6 text-center">Criar Conta</h2>

      <input 
        type="text" 
        v-model="nome"
        placeholder="Nome" 
        class="w-full mb-4 p-3 border rounded focus:outline-none focus:ring-2 focus:ring-purple-400" 
      />

      <input 
        type="email" 
        v-model="email"
        placeholder="Email" 
        class="w-full mb-4 p-3 border rounded focus:outline-none focus:ring-2 focus:ring-purple-400" 
      />

      <input 
        type="password" 
        v-model="senha"
        placeholder="Senha" 
        class="w-full mb-4 p-3 border rounded focus:outline-none focus:ring-2 focus:ring-purple-400" 
      />

      <button 
        class="w-full bg-purple-600 text-white py-2 rounded hover:bg-purple-700 transition">
        Registrar
      </button>
    </form>
  </div>
</template>


<script>
import { auth } from "../plugins/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";

export default {
  data() {
    return {
      nome: "",
      email: "",
      senha: "",
    };
  },
  methods: {
    async registrar() {
      try {
        const userCredential = await createUserWithEmailAndPassword(
          auth,
          this.email,
          this.senha
        );

        console.log("Usuário registrado:", userCredential.user);

        alert("Conta criada com sucesso!");
      } catch (error) {
        console.error(error);
        alert("Erro ao registrar: " + error.message);
      }
    },
  },
};
</script>
