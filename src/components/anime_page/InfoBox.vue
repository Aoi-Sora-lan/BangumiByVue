<template>
  <q-list bordered separator>
    <q-item v-for="info in anime_infos" v-bind:key="info">
      <q-item-section>
        <q-item-label>{{info.key}}</q-item-label>
        <q-item-label caption v-if="(typeof info.value) !== 'object'">{{info.value}}</q-item-label>
        <div v-else v-for="v in info.value" v-bind:key="v">
           <q-item-label caption>{{v.v}}</q-item-label>
        </div>
      </q-item-section>
    </q-item>
  </q-list>
</template>

<script>
import axios from "axios";

export default {
  name: "InfoBox",
  props:{
    anime_data:{
      type:Object,
      required:true
    }
  },
  data(){
    return {
      anime_infos: [],
    }
  },
  created() {
    this.$watch(
      () => this.anime_data,
      (toParams, previousParams) => {
        console.log("child-watch-on");
        //console.log(this.anime_data)
        if(this.anime_infos.length!=0){
          this.anime_infos.splice(0);
        }
        let data = this.anime_data
        for (let i in data.infobox){
          this.anime_infos.push(data.infobox[i]);
        }
        console.log(this.anime_infos)
      }
    )
  },
  mounted() {
    console.log("child-mount-on");
  }
};
</script>

<style scoped>

</style>
