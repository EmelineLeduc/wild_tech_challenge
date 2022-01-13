<template>
  <div class="flex flex-col justify-center text-center mt-10 w-2/3 m-auto">
    <h2 class="text-2xl font-medium">Ajouter un(e) Argonaute</h2>
    <form class="text-center mt-10" @submit.prevent="addNewArgonaut()">
      <label for="name" class="block pb-6 text-lg"
        >Nom de l&apos;Argonaute</label
      >
      <input
        v-model="inputName"
        id="name"
        name="name"
        type="text"
        placeholder="Charalampos"
        class="border-2 border-gray-400 p-2 rounded-md focus:ring-1 focus:border-pink-dark focus:ring-pink-dark focus:z-10"
      />
      <button
        type="submit"
        class="bg-pink-light text-white py-2 px-4 ml-6 rounded-md duration-300 hover:bg-pink-dark"
      >
        Envoyer
      </button>
    </form>
    <h2 class="text-2xl font-medium mt-16 mb-10">Membres de l'équipage</h2>
    <div class="flex-wrap grid grid-cols-3 gap-4 text-gray-500">
      <p v-for="(name, id) in argonautsList" :key="id">
        {{ name }}
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

const inputName = ref<string>("");
const argonautsList = ref<Array<{ id: number; name: string }>>([
  { id: 0, name: "Eleftheria" },
  { id: 1, name: "Gennadios" },
  { id: 2, name: "Lysimachos" },
  { id: 3, name: "Emeline" },
  { id: 4, name: "Antoine" },
]);

const addNewArgonaut = () => {};
</script>
