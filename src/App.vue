<script setup lang="js">
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { ref, onMounted } from 'vue';
import { fetchDataFromAPI } from './functions/functions.js'; 

const apiData = ref([]);

onMounted(async () => {
  try {
    const data = await fetchDataFromAPI();
    apiData.value = data.data;
  } catch (error) {
    console.error('Error fetching data:', error);
  }
});
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
              <thead
                class="border-b bg-white font-medium dark:border-neutral-500 dark:bg-neutral-600">
                <tr>
                  <th scope="col" class="px-6 py-4">País</th>
                  <th scope="col" class="px-6 py-4">Casos Confirmados</th>
                  <th scope="col" class="px-6 py-4">Casos Confirmados</th>
                  <th scope="col" class="px-6 py-4">Mortes</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="country in apiData" :key="country.country"
                  class="border-b bg-neutral-100 dark:border-neutral-500 dark:bg-neutral-700">
                  <td class="whitespace-nowrap px-6 py-4 font-medium">{{ country.country }}</td>
                  <td class="whitespace-nowrap px-6 py-4">{{ country.cases }}</td>
                  <td class="whitespace-nowrap px-6 py-4">{{ country.confirmed }}</td>
                  <td class="whitespace-nowrap px-6 py-4">{{ country.deaths }}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div> 
  </section>
</template>
