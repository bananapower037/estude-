<template>
  <div class="min-h-screen bg-gradient-to-br from-purple-100 to-purple-300 flex items-center justify-center p-6">
    <form class="bg-white p-8 rounded-xl shadow-lg w-full max-w-sm">
      <h2 class="text-2xl font-bold text-purple-700 mb-6 text-center">Criar Conta</h2>
      <input type="text" placeholder="Nome" class="w-full mb-4 p-3 border rounded focus:outline-none focus:ring-2 focus:ring-purple-400" />
      <input type="email" placeholder="Email" class="w-full mb-4 p-3 border rounded focus:outline-none focus:ring-2 focus:ring-purple-400" />
      <input type="password" placeholder="Senha" class="w-full mb-4 p-3 border rounded focus:outline-none focus:ring-2 focus:ring-purple-400" />
      <button class="w-full bg-purple-600 text-white py-2 rounded hover:bg-purple-700 transition">Registrar</button>
    </form>
  </div>
</template>
