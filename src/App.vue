<script setup lang="js">
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { ref, onMounted } from 'vue';
import { fetchDataFromAPI } from './functions/functions.js';
import axios from 'axios';

const apiData = ref([]);

onMounted(async () => {
  try {
    const data = await fetchDataFromAPI();
    apiData.value = data.data;
  } catch (error) {
    console.error('Error fetching data:', error);
  }
});

const isModalOpen = ref(false);
const selectedCountry = ref(null);
const openModal = async (country) => {
  selectedCountry.value = country;

  try {
    const response = await axios.get(`https://restcountries.com/v3.1/name/${country.country}`);
    
    selectedCountry.value.flagUrl = response.data[0]?.flags?.svg ?? null;

    isModalOpen.value = true;
  } catch (error) {
    console.error('Error fetching country details:', error);
  }
};
const closeModal = () => {
  isModalOpen.value = false;
  selectedCountry.value = null;
};
</script>

<template>
  <section class="h-full bg-zinc-700 text-2xl font-medium text-white p-8">
    <div class="flex justify-center items-center">
      <div class="flex rounded bg-zinc-700 p-3 w-96 border border-cyan-50">
        <input class="bg-zinc-700 flex-1 outline-none text-sm" type="text" id="" name="" placeholder="pesquisar" />
        <FontAwesomeIcon :icon="faSearch" />
      </div>
    </div>

    <div class="flex flex-col mt-5">
      <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div class="inline-block min-w-full py-2 sm:px-6 lg:px-8">
          <div class="overflow-hidden">
            <table class="min-w-full text-left text-sm font-light">
              <thead class="border-b bg-white font-medium dark:border-neutral-500 dark:bg-neutral-600">
                <tr>
                  <th scope="col" class="px-6 py-4">País</th>
                  <th scope="col" class="px-6 py-4">Casos Confirmados</th>
                  <th scope="col" class="px-6 py-4">Casos Confirmados</th>
                  <th scope="col" class="px-6 py-4">Mortes</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="country in apiData" :key="country.country"
                  class="hover:dark:bg-neutral-600 border-b bg-neutral-100 dark:border-neutral-500 dark:bg-neutral-700 cursor-pointer"
                  @click="openModal(country)">
                  <td class="whitespace-nowrap px-6 py-4 font-medium">{{ country.country }}</td>
                  <td class="whitespace-nowrap px-6 py-4">{{ country.cases ?? country.confirmed }}</td>
                  <td class="whitespace-nowrap px-6 py-4">{{ country.confirmed }}</td>
                  <td class="whitespace-nowrap px-6 py-4">{{ country.deaths }}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>

    <!-- Modal -->
    <div v-if="isModalOpen" class="fixed inset-0 z-10 overflow-y-auto">
      <div class="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
        <div class="fixed inset-0 transition-opacity" @click="closeModal">
          <div class="absolute inset-0 bg-gray-500 opacity-75"></div>
        </div>

        <div class="inline-block align-bottom bg-white dark:bg-neutral-800 rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
          <div class="bg-white dark:bg-neutral-800">
            <div class="text-center p-5 sm:p-8">
              <h3 class="text-lg font-medium text-gray-900 dark:text-white">{{ selectedCountry ? selectedCountry.country : '' }}</h3>
              
              <img v-if="selectedCountry && selectedCountry.flagUrl" :src="selectedCountry.flagUrl" alt="Flag" class="w-16 m-auto h-12 mb-4 mt-4">

              <p class="m-4 text-sm font-medium text-gray-900 dark:text-white">Casos: {{ selectedCountry ? selectedCountry.cases : '' }}</p>
              <p class="m-4 text-sm font-medium text-gray-900 dark:text-white">Casos confirmados: {{ selectedCountry ? selectedCountry.confirmed : '' }}</p>
              <p class="m-4 text-sm font-medium text-gray-900 dark:text-white">Mortes: {{ selectedCountry ? selectedCountry.deaths : '' }}</p>
              
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Fim do Modal -->
  </section>
</template>
