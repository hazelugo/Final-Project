<script setup>
import StudentIdInput from "@/components/StudentIdInput.vue";
import { useScheduleStore } from "@/stores/scheduleStore.js";

const store = useScheduleStore();

function handleSearch(ids) {
  store.fetchStudents(ids);
  console.log("Students found:", store.students);
  console.log("Shared courses:", store.getSharedCourses());
}
</script>

<template>
  <main class="flex min-h-screen flex-col items-center px-4 py-12 bg-gray-950">
    <h1 class="text-3xl font-bold text-white mb-8">Schedule Comparison Tool</h1>
    <StudentIdInput @search="handleSearch" />
  </main>
</template>
