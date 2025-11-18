<template>
  <div class="min-h-screen bg-gradient-to-br from-purple-100 to-purple-300 flex items-center justify-center p-6">
    <form @submit.prevent="login" class="bg-white p-8 rounded-xl shadow-lg w-full max-w-sm">
      <h2 class="text-2xl font-bold text-purple-700 mb-6 text-center">Login</h2>

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
        Entrar
      </button>
    </form>
  </div>
</template>


<script>
import { auth } from "../plugins/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";

export default {
  data() {
    return {
      email: "",
      senha: "",
    };
  },
  methods: {
    async login() {
      try {
        const userCredential = await signInWithEmailAndPassword(
          auth,
          this.email,
          this.senha
        );

        console.log("Usuário logado:", userCredential.user);

        alert("Login realizado com sucesso!");

         this.$router.push('/dashboard');

      } catch (error) {
        console.error(error);
        alert("Erro ao fazer login: " + error.message);
      }
    },
  },
};
</script>
