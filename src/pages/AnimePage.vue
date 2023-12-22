<template>
  <div class="q-pa-md" style="max-width: 350px">
    <info-box :anime_index="$route.params.id"></info-box>
  </div>
</template>

<script>
import InfoBox from "components/anime_page/InfoBox.vue";

export default {
  name: "AnimePage",
  components: { InfoBox },
  data(){
    return{
      id:0
    }
  },
  created() {
    this.$watch(
      () => this.$route.params,
      (toParams, previousParams) => {
        this.id = this.$route.params.id
      }
    )
  }
};
</script>

<style scoped>

</style>
