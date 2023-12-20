<template>
  <q-card class="my-card">
  <img :src="json">
  </q-card>
</template>

<script setup>
  import { ref } from "vue";
  import axios from "axios";
  const json = ref('')
  axios.get("https://api.bgm.tv/v0/subjects/410928").then(
    (res)=>{
      json.value = res.data.images.grid
    }
  )
</script>

<style scoped>

</style>
