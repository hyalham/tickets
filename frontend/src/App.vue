<script setup>
  import {ref} from 'vue'

  const formData = ref({})

  const submitForm = () => {
    console.log("Formulaire", formData)
  }

</script>



<template>
  <div>
    <form class="max-w-sm mx-auto" @submit.prevent="submitForm">
      <div class="mb-5">
        <label for="ticket" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Quel est le problème ?</label>
        <select id="ticket" v-model="formData.ticket" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
          <option value="" selected>Choisir un ticket</option>
          <option value="mobilier">Mobilier</option>
          <option value="informatique">Informatique</option>
        </select>
      </div>

      <div class="mb-5">
        <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email</label>
        <input type="email" id="email" placeholder="Email" v-model="formData.email" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required>
      </div>

      <div class="mb-5">
        <label for="message" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Problème</label>
        <textarea id="message" rows="4" v-model="formData.message" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Description du problème" required></textarea>
      </div>

      <fieldset>
        <legend class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Type d'urgence</legend>
        <div class="flex items-center mb-4">
          <input id="faible" type="radio" v-model="formData.urgence" value="faible" class="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 dark:focus:bg-blue-600 dark:bg-gray-700 dark:border-gray-600">
          <label for="faible" class="block ms-2  text-sm font-medium text-gray-900 dark:text-gray-300">
          Faible
          </label>
        </div>
        <div class="flex items-center mb-4">
          <input id="normale" type="radio" v-model="formData.urgence" value="normale" class="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 dark:focus:bg-blue-600 dark:bg-gray-700 dark:border-gray-600">
          <label for="normale" class="block ms-2  text-sm font-medium text-gray-900 dark:text-gray-300">
          Normale
          </label>
        </div> 
        <div class="flex items-center mb-4">
          <input id="forte" type="radio" v-model="formData.urgence" value="forte" class="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 dark:focus:bg-blue-600 dark:bg-gray-700 dark:border-gray-600">
          <label for="forte" class="block ms-2  text-sm font-medium text-gray-900 dark:text-gray-300">
          Forte
          </label>
        </div> 
      </fieldset>    
      <button type="submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
        Valider
      </button>
    </form>
  </div>
</template>
