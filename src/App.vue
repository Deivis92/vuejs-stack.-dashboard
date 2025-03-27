<template>
  <BaseCard>

  </BaseCard>
</template>

<script>
import { ref, onMounted } from "vue";
import BaseCard from "./components/BaseCard.vue";
import apiService from "./services/apiService";

export default {
  name: "App",
  components: { BaseCard },
  setup() {
    const data = ref([]);

    const fetchData = async () => {
      try {
        data.value = await apiService.fetchData("$AAPL");
        console.log("Empfangene Daten:", data.value);
      } catch (error) {
        console.error("Fehler beim Abrufen der API-Daten:", error);
      }
    };
    onMounted(fetchData);
    return { data };
  },
};
</script>

<style>
body {
  margin: 0;
  padding: 100px;
  background: radial-gradient(71.11% 100% at 50% 0%, #020204 14.6%, #011F35 100%);
  box-sizing: border-box;
}

#app {
  width: 100%;
  min-height: 100vh;
}
</style>


<!-- https://www.figma.com/design/VvV00Qnwgs9uQLytzXGxg2/Vue-JSA-Dashboard---The-Magnificent%C2%A0Seven-Companies?node-id=2-2&t=MGb4F07glgu4bpbc-0 -->
<!-- https://docs.google.com/spreadsheets/d/1m3h9Xce3SRMaq20li2Qg4HuSZowwxQSd9FkQmeuI7Dw/edit?gid=244946188#gid=244946188 -->