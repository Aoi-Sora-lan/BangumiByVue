<template>
  <!-- <div v-for="character in characterData" :key="character">{{ character }}</div> -->
  <div class="row flex-center" style="width: 100%;">
    <div class="q-py-md flex" style="max-width: 1000px;">
      <div class="row">
        <chara_list v-for="character in anime_characters" :key="character" :character_data="character" style="display: flex; flex-wrap: wrap;"></chara_list>
      </div>
    </div>
  </div>
</template>

<script>
  import axios from "axios";

  import chara_list from "components/character_page/CharaList.vue";
  import common from "../../funcs/anime_page/common"
  import anime_interfaces from "src/funcs/anime_interfaces";
  import { QScrollArea } from "quasar";
  import {useCounterStore} from "stores/loading_anime";

  export default {
    name: "CharactersPage",
  components: { chara_list },
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
  // created() {
  //   this.$watch(
  //     () => this.$route.params,
  //     (toParams, previousParams) => {
  //       this.id = this.$route.params.id;
  //       anime_interfaces.get_subject(this.id,(data)=>
  //       {
  //         this.anime_data = data;
  //         this.emit_name(data.name);
  //         this.pic_src = data.images.common;
  //         this.anime_desc = data.summary;
  //       });
  //     })
  // },
  mounted() {
    this.id = this.$route.params.id;
    anime_interfaces.get_characters(this.id,(data)=>{
      this.anime_characters = common.get_characters_from_data(data);
      console.log(this.anime_characters)
    });
  }






}

</script>

<style scoped>

</style>
