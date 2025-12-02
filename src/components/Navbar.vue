<template>
  <nav class="bg-purple-600 shadow-md px-6 py-4 flex items-center justify-between">
    
    <!-- Logo -->
  <router-link 
    to="/" 
    class="text-white font-medium hover:text-purple-200 transition">
    Estude+
  </router-link>


    <!-- Links -->
    <div class="flex items-center gap-6">

      <!-- Usuário NÃO logado -->
      <template v-if="!user">
        <router-link 
          to="/" 
          class="text-white font-medium hover:text-purple-200 transition">
          Home
        </router-link>

        <router-link 
          to="/login" 
          class="text-white font-medium hover:text-purple-200 transition">
          Login
        </router-link>

        <router-link 
          to="/registro" 
          class="text-white font-medium hover:text-purple-200 transition">
          Registrar
        </router-link>
      </template>

      <!-- Usuário LOGADO -->
      <template v-else>
        <router-link 
          to="/dashboard" 
          class="text-white font-medium hover:text-purple-200 transition">
          Dashboard
        </router-link>

        <button 
          @click="logout" 
          class="bg-white text-purple-600 font-medium py-1.5 px-4 rounded-lg shadow hover:bg-purple-100 transition">
          Sair
        </button>
      </template>

    </div>

  </nav>
</template>

<script>
import { ref, onMounted } from "vue";
import { useRouter } from "vue-router";
import { auth } from "../plugins/firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";

export default {
  setup() {
    const user = ref(null);
    const router = useRouter();

    onMounted(() => {
      onAuthStateChanged(auth, (u) => {
        user.value = u;
      });
    });

    async function logout() {
      await signOut(auth);
      router.push("/");
    }

    return { user, logout };
  },
};
</script>

<style scoped>
a {
  @apply no-underline;
}
</style>
