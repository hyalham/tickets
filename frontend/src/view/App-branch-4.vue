<script setup>
  import {ref, computed} from 'vue'

// Défini la fonction submitForm
  const submitForm = async () => {
    console.log("Formulaire", formData.value)
    // Envoi les données à l'app.js
    const response = await fetch('/api/ticket', {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json'
          //application/x-www-form-urlencoded  <--- pour les formulaires  
      },
      body: JSON.stringify(formData.value)
  });
    // Reçoit les données depuis l'app.js
    const nouveauTicket = await response.json()
    console.log("Ticket", nouveauTicket)
  }
  

  const formData = ref({})


  const regexEmail = new RegExp(/^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/)

  const checkEmail = computed(() => regexEmail.test(formData.value.email))
  const checkTicket = computed(() => formData.value.category)
  const checkMessage = computed(() => formData.value.description)
  const checkpriority = computed(() => formData.value.priority)
  const checkForm = computed(() => checkEmail.value && checkMessage.value && checkTicket.value && checkpriority.value)
</script>



<template>
  <div class="max-w-md mx-auto mt-8">
      <div class="mb-5">
        <label for="ticket" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Quel est le problème ?</label>
        <select id="ticket" v-model="formData.category" required :class="{ 'shadow-lg shadow-red-500/50' :!checkTicket, 'shadow-lg shadow-green-500/50' : checkTicket }" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
          <option disabled selected value="">Choisir un ticket</option>
          <option value="furniture">Mobilier</option>
          <option value="computer">Informatique</option>
        </select>
      </div>

      <div class="mb-5">
        <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email</label>
        <input :class="{ 'shadow-lg shadow-red-500/50' :!checkEmail, 'shadow-lg shadow-green-500/50' : checkEmail}" type="email" id="email" placeholder="Email" v-model="formData.email" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required>
      </div>

      <div class="mb-5">
        <label for="message" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Problème</label>
        <textarea id="message" rows="4" v-model="formData.description" :class="{ 'shadow-lg shadow-red-500/50' :!checkMessage, 'shadow-lg shadow-green-500/50' : !!checkMessage }" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Description du problème" required></textarea>
      </div>

      <fieldset>
        <legend class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Type d'priority</legend>
        <div class="flex items-center mb-4">
          <input id="faible" type="radio" v-model="formData.priority" value="low" required :class="{ 'shadow-lg shadow-red-500/50' :!checkpriority, 'shadow-lg shadow-green-500/50' : !!checkpriority }" class="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 dark:focus:bg-blue-600 dark:bg-gray-700 dark:border-gray-600">
          <label for="faible" class="block ms-2  text-sm font-medium text-gray-900 dark:text-gray-300">
          Faible
          </label>
        </div>
        <div class="flex items-center mb-4">
          <input id="normale" type="radio" v-model="formData.priority" value="normal" :class="{ 'shadow-lg shadow-red-500/50' :!checkpriority, 'shadow-lg shadow-green-500/50' : !!checkpriority }" class="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 dark:focus:bg-blue-600 dark:bg-gray-700 dark:border-gray-600">
          <label for="normale" class="block ms-2  text-sm font-medium text-gray-900 dark:text-gray-300">
          Normale
          </label>
        </div> 
        <div class="flex items-center mb-4">
          <input id="forte" type="radio" v-model="formData.priority" value="high" :class="{ 'shadow-lg shadow-red-500/50' :!checkpriority, 'shadow-lg shadow-green-500/50' : !!checkpriority }" class="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 dark:focus:bg-blue-600 dark:bg-gray-700 dark:border-gray-600">
          <label for="forte" class="block ms-2  text-sm font-medium text-gray-900 dark:text-gray-300">
          Forte
          </label>
        </div> 
      </fieldset> 
      <!-- Demande la fonction "submitForm" -->  
      <button @click="submitForm" :disabled="!checkForm" class="text-white bg-blue-700 disabled:bg-red-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
        Valider
      </button>
  </div>
</template>

<style>

</style>