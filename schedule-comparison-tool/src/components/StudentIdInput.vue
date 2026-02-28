<script setup>
import { ref } from "vue";

const emit = defineEmits(["search"]);

const idList = ref(["", ""]);

function addId() {
  if (idList.value.length < 5) {
    idList.value.push("");
  }
}

function removeId(index) {
  if (idList.value.length > 2) {
    idList.value.splice(index, 1);
  }
}

function handleSearch() {
  const filtered = idList.value
    .map((id) => id.trim())
    .filter((id) => id !== "");
  if (filtered.length < 2) {
    alert("Please enter at least 2 student IDs.");
    return;
  }
  emit("search", filtered);
}
</script>

<template>
  <div class="w-full max-w-md mx-auto">
    <h2
      class="text-lg font-semibold text-green-400 text-center mb-4 uppercase tracking-wide"
    >
      Enter Student IDs
    </h2>

    <div class="flex flex-col gap-3">
      <div
        v-for="(id, index) in idList"
        :key="index"
        class="flex items-center gap-2"
      >
        <input
          v-model="idList[index]"
          type="text"
          :placeholder="`Student ID ${index + 1}`"
          class="flex-1 rounded-lg border border-white/10 bg-white/5 px-4 py-2 text-white placeholder-gray-500 focus:border-green-400 focus:outline-none focus:ring-1 focus:ring-green-400"
        />
        <button
          v-if="idList.length > 2"
          @click="removeId(index)"
          class="text-gray-500 hover:text-red-400 transition-colors duration-200 text-xl font-bold"
        >
          ×
        </button>
      </div>
    </div>

    <div class="flex gap-3 mt-4">
      <button
        v-if="idList.length < 5"
        @click="addId"
        class="flex-1 rounded-lg border border-white/10 bg-white/5 py-2 text-sm text-gray-400 hover:border-green-400 hover:text-green-400 transition-all duration-200"
      >
        + Add Another Student
      </button>
      <button
        @click="handleSearch"
        class="flex-1 rounded-lg bg-green-500 py-2 text-sm font-semibold text-black hover:bg-green-400 transition-colors duration-200"
      >
        Compare Schedules
      </button>
    </div>
  </div>
</template>
