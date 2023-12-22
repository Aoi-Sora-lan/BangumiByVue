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
    anime_index:{
      type:Number,
      required:true
    }
  },
  data(){
    return {
      anime_infos: null,
    }
  },
  created() {
    this.$watch(
      () => this.$route.params,
      (toParams, previousParams) => {
        console.log(this.anime_index)
        axios.get('https://api.bgm.tv/v0/subjects/'+this.anime_index,
          {
            'User-Agent':'AoiSora/BangumiByVue (https://github.com/Aoi-Sora-lan/BangumiByVue)',
          }).then(({data})=> {
            this.anime_infos.splice(0)
            for (let i in data.infobox){
              this.anime_infos.push(data.infobox[i]);
            }
          console.log(this.anime_index)
        });
      }
    )
  },
  mounted() {
    axios.get('https://api.bgm.tv/v0/subjects/'+this.anime_index.toString(),
      {
        'User-Agent':'AoiSora/BangumiByVue (https://github.com/Aoi-Sora-lan/BangumiByVue)',
      }).then(({data})=> {
      this.anime_infos = data.infobox;
      console.log(this.anime_infos);
    });
  }
};
</script>

<style scoped>

</style>
