<template>
  <div class="row flex-center" style="width: 100%">
    <div class="q-py-md flex" style="max-width: 1000px">
      <div class="row">
        <div class="col-12 col-md-3">
          <div class="row q-mt-sm">
            <q-img class="q-ma-md" :src="pic_src"></q-img>
          </div>
          <div class="row q-ma-md">
            <info-box :anime_data="anime_data"></info-box>
          </div>
        </div>
        <div class="col-12 col-md-9 q-pa-sm q-pl-md">
          <div class="row text-h5">番剧简介</div>
          <q-separator class="q-my-md"></q-separator>
          <div class="row text-body1 q-mb-md">
            {{anime_desc}}
          </div>
          <div class="row" v-if="page_type===2">
            <div class="col-12">
              <video-card :episodes="select_episodes" :search_name="name"></video-card>
            </div>
          </div>
          <div class="row text-h5">番剧列表</div>
          <q-separator class="q-my-md"></q-separator>
          <div class="row  q-mb-md">
            <q-card :class="(episode.ep===select_episodes)?'bg-blue-1':''" v-for="episode in episode_data" :key="episode" flat bordered style="width: 200px;margin: 5px 5px;">
              <q-card-section @click="select_episodes = episode.ep" style="padding: 5px 10px">
                <div class="text-h6">{{episode.ep}}</div>
                <div class="text-subtitle2">{{episode.name_cn}}</div>
              </q-card-section>
            </q-card>
          </div>
          <div class="row text-h5">角色列表</div>
          <q-separator class="q-my-md"></q-separator>
          <div class="row q-pb-lg">
            <chara_card v-for="character in anime_characters" :key="character" :character_data="character" style="width: 200px"></chara_card>
          </div>
          <div class="row text-h5">大众标签</div>
          <q-separator class="q-my-md"></q-separator>
          <tag-box :anime_data="anime_data"></tag-box>
        </div>
<!--        <iframe style="width: 400px;height: 240px" referrerPolicy="no-referrer" :src="video_src" allowfullscreen="allowfullscreen" mozallowfullscreen="mozallowfullscreen" msallowfullscreen="msallowfullscreen" oallowfullscreen="oallowfullscreen" webkitallowfullscreen="webkitallowfullscreen"></iframe>-->
      </div>
      <div class="row">

      </div>
    </div>
  </div>
</template>

<script>
import InfoBox from "components/anime_page/details_page/InfoBox.vue";
import axios from "axios";
import common from "../../funcs/anime_page/common"
import anime_interfaces from "src/funcs/anime_interfaces";
import { QScrollArea } from "quasar";
import chara_card from "components/anime_page/details_page/CharaCard.vue";
import {useCounterStore} from "stores/loading_anime";
import VideoCard from "components/anime_page/details_page/VideoCard.vue";
import TagBox from "components/anime_page/details_page/TagBox.vue";

export default {
  name: "AnimePage",
  components: { TagBox, VideoCard, chara_card, InfoBox },
  methods:{
    update_page(){
      this.id = this.$route.params.id;
      anime_interfaces.get_subject(this.id,(data)=>
      {
        this.anime_data = data;
        this.pic_src = data.images.common;
        this.anime_desc = data.summary;
        let store = useCounterStore();
        if(data.name_cn!=""){
          store.name = data.name_cn;
        }
        else{
          store.name = data.name;
        }
        this.name = store.name;
        this.page_type = data.type;
        console.log(this.name);
      });
      anime_interfaces.get_characters(this.id,(data)=>{
        this.anime_characters = common.get_characters_from_data(data);
        //console.log(this.anime_characters)
      });
      anime_interfaces.get_episodes(this.id,(data)=>{
        if(this.episode_data.length!==0){
          this.episode_data.splice(0);
        }
        for (let i in data.data){
          //console.log(data.data[i]);
          if(data.data[i].name_cn!==''){
            this.episode_data.push(data.data[i]);
          }
        }
      });
    }
  },
  data(){
    return{
      id:0,
      video_src:"",
      pic_src:"",
      anime_data: null,
      anime_desc: "",
      name:'',
      page_type:0,
      anime_characters:[],
      episode_data:[],
      store:null,
      select_episodes:1,
    }
  },
  mounted() {
    this.update_page();
    // let myChart = echarts.init(document.getElementById('myChart'))
    // // 绘制图表
    // myChart.setOption({
    //   title: { text: '在Vue中使用echarts' },
    //   tooltip: {},
    //   xAxis: {
    //     data: ["衬衫","羊毛衫","雪纺衫","裤子","高跟鞋","袜子"]
    //   },
    //   yAxis: {},
    //   series: [{
    //     name: '销量',
    //     type: 'bar',
    //     data: [5, 20, 36, 10, 10, 20]
    //   }]
    // });
  }
};
</script>

<style scoped>

</style>
