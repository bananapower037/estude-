<template>
  <nav class="bg-purple-700 text-white p-4 flex justify-between items-center shadow">
    <h1 class="text-xl font-bold">ESTUDE+</h1>
    <ul class="flex gap-6">
      <li><router-link to="/" class="hover:underline">Home</router-link></li>
      <li><router-link to="/login" class="hover:underline">Login</router-link></li>
      <li><router-link to="/registro" class="hover:underline">Registro</router-link></li>
      <li><router-link to="/dashboard" class="hover:underline">Dashboard</router-link></li>
    </ul>
  </nav>
</template>

<script>
export default {};
</script>
