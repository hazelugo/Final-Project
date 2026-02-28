import { defineStore } from "pinia";
import { ref } from "vue";
import { getStudentById } from "@/data/mockStudents.js";

export const useScheduleStore = defineStore("schedule", () => {
  const students = ref([]);
  const notFound = ref([]);

  function fetchStudents(ids) {
    students.value = [];
    notFound.value = [];

    ids.forEach((id) => {
      const student = getStudentById(id);
      if (student) {
        students.value.push(student);
      } else {
        notFound.value.push(id);
      }
    });
  }

  function getSharedCourses() {
    if (students.value.length < 2) return [];

    const allSchedules = students.value.map((s) => s.schedule);

    return allSchedules[0].filter((classA) =>
      allSchedules.every((schedule) =>
        schedule.some(
          (classB) =>
            classB.course === classA.course &&
            classB.teacher === classA.teacher &&
            classB.room === classA.room,
        ),
      ),
    );
  }

  return { students, notFound, fetchStudents, getSharedCourses };
});
