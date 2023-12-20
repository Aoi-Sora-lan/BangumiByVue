<template>
  <q-page class="flex flex-center">
    <img
      alt="Quasar logo"
      src="~assets/quasar-logo-vertical.svg"
      style="width: 200px; height: 200px"
    >
    <json-get></json-get>
  </q-page>
</template>

<script>
import { defineComponent } from 'vue'
import JsonGet from "components/JsonGet.vue";

export default defineComponent({
  name: 'IndexPage',
  components: { JsonGet }
})
</script>
