<template>
  <q-page class="flex flex-center">
    <div class="q-pa-md" style="width: 100%;max-width: 500px;padding-bottom: 200px">
      <div class="row">
        <q-img src="../assets/logo.png" height="1500" width="1500">
        </q-img>
      </div>
      <div class="row">
        <div class="col-12">
          <q-input rounded outlined color="blue-12" v-model="text">
            <template v-slot:append>
              <q-icon name="search"></q-icon>
            </template>
          </q-input>
        </div>
      </div>
      <div class="row">
        <div class="col-12">
          <div class="q-gutter-md" style="padding-top: 20px;padding-left: 10px">
            <DailyAnime v-bind:anime_index="anime.id" v-for="anime in anime_items" :key="`${anime.id}`" style="display: inline-block"></DailyAnime>
          </div>
        </div>
      </div>
    </div>
  </q-page>
</template>

<script>
import { defineComponent } from 'vue'
import JsonGet from "components/JsonGet.vue";
import DailyAnime from "components/index_page/DailyAnime.vue";
import axios from "axios";
import anime_interfaces from "src/funcs/anime_interfaces";

export default defineComponent({
  name: 'IndexPage',
  components: { DailyAnime },
  data()
  {
    return{
      text:"",
      anime_items:[]
    }
  },
  mounted() {
    let day_index = (new Date().getDay()+6)%7;
    console.log(day_index);
    axios.get('https://api.bgm.tv/calendar',
      {
        'User-Agent':'AoiSora/BangumiByVue (https://github.com/Aoi-Sora-lan/BangumiByVue)',
      }).then(({data})=> {
      this.anime_items = data[day_index].items;
      while(this.anime_items.length >10){
        this.anime_items.pop()
      }
      console.log(data.anime_items);
    });
  }
})
</script>
