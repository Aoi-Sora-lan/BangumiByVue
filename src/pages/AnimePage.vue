<template>
  <div class="row flex-center" style="width: 100%">
    <div class="q-py-md flex" style="max-width: 1000px">
      <div class="row">
        <div class="col-12 col-md-3">
          <div class="row q-mt-xs">
            <q-img :src="pic_src"></q-img>
          </div>
          <div class="row q-mt-xs">
            <info-box :anime_data="anime_data"></info-box>
          </div>
        </div>
        <div class="col-12 col-md-9 q-pa-sm">
          <div class="row text-h5">番剧简介</div>
          <q-separator class="q-my-md"></q-separator>
          <div class="row text-body1 q-mb-md">
            {{anime_desc}}
          </div>
          <div class="row text-h5">番剧列表</div>
          <q-separator class="q-my-md"></q-separator>
          <div class="row  q-mb-md">
            <q-card v-for="episode in episode_data" :key="episode" flat bordered style="width: 200px;margin: 5px 5px">
              <q-card-section style="padding: 5px 10px">
                <div class="text-h6">{{episode.ep}}</div>
                <div class="text-subtitle2">{{episode.name_cn}}</div>
              </q-card-section>
            </q-card>
          </div>
          <div class="row text-h5">角色列表</div>
          <q-separator class="q-my-md"></q-separator>
          <div class="row">
            <chara_card v-for="character in anime_characters" :key="character" :character_data="character" style="width: 200px"></chara_card>
          </div>
        </div>
  <!--      <iframe style="width: 400px;height: 240px" referrerPolicy="no-referrer" :src="video_src" allowfullscreen="allowfullscreen" mozallowfullscreen="mozallowfullscreen" msallowfullscreen="msallowfullscreen" oallowfullscreen="oallowfullscreen" webkitallowfullscreen="webkitallowfullscreen"></iframe>-->
      </div>
      <div class="row">

      </div>
    </div>
  </div>
</template>

<script>
import InfoBox from "components/anime_page/InfoBox.vue";
import axios from "axios";
import common from "../funcs/anime_page/common"
import anime_interfaces from "src/funcs/anime_interfaces";
import { QScrollArea } from "quasar";
import chara_card from "components/anime_page/CharaCard.vue";
import {useCounterStore} from "stores/loading_anime";

export default {
  name: "AnimePage",
  components: { chara_card, InfoBox },
  methods:{
    emit_name(name){
      console.log("244");
      this.$emit('on_emit_name', name);
    }
  },
  data(){
    return{
      id:0,
      video_src:"",
      pic_src:"",
      anime_data: null,
      anime_desc: "",
      anime_characters:[],
      episode_data:[],
      store:null
    }
  },
  created() {
    this.$watch(
      () => this.$route.params,
      (toParams, previousParams) => {
        this.id = this.$route.params.id;
        anime_interfaces.get_subject(this.id,(data)=>
        {
          this.anime_data = data;
          this.emit_name(data.name);
          this.pic_src = data.images.common;
          this.anime_desc = data.summary;
        });
      })
  },
  mounted() {
    this.id = this.$route.params.id;
    anime_interfaces.get_subject(this.id,(data)=>{
      this.anime_data = data;
      this.pic_src = data.images.common;
      this.anime_desc = data.summary;
      let store = useCounterStore();
      store.name = data.name;
    });
    anime_interfaces.get_characters(this.id,(data)=>{
      this.anime_characters = common.get_characters_from_data(data);
      console.log(this.anime_characters)
    });
    anime_interfaces.get_episodes(this.id,(data)=>{
      this.episode_data = data.data;
    });
    //common.search_page("盾之")
  }
};
</script>

<style scoped>

</style>
