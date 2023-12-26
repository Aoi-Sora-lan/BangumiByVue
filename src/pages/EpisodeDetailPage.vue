<template>
  <div class="row" style="width: 100%;">
    <!-- 左侧简介 -->
    <div class="left" style=" width: 630px; margin-left: 200px;">
      <div class="row">
          <episode_item  :episode_data="episode_data" style="width: 700px"></episode_item>
          <!-- <episode_item v-for="character in anime_characters" :key="character" :character_data="character" style="width: 200px"></episode_item> -->
      </div>
    </div>
    <!-- 右侧列表 -->
    <div class="row right-aligned-div" style=" width: 300px; margin-left: 10px;" >
      <q-card style="height: 35px;margin-top: 70px; width: 300px;">
        <q-item>
          <q-item-section>
            <q-item-label style="margin-top: -12px;">这个条目的其他章节</q-item-label>
          </q-item-section>
        </q-item>
      </q-card>
      <div v-for="episode in episode_datas" :key="episode" flat bordered style="height: 30px; width: 100%; margin-top: 2px; ">
        <!-- 问题2：路由切换需要修改 -->
        <router-link :to="'/episode/'+episode.id">
          <q-item style="border-radius: 15%; ">
              <q-item-section>
                <q-item-label >
                  <span style="font-size: medium; font-family:Cambria, Cochin, Georgia, Times, 'Times New Roman', serif; color: rgb(66, 148, 219);">ep.{{ episode.sort }}. {{ episode.name }} </span>
                </q-item-label>
              </q-item-section>
          </q-item>
        </router-link>
        <q-separator spaced inset style="margin-top: -9px;" />
      </div>
      </div>
  </div>

</template>

  <script>
  import anime_interfaces from "src/funcs/anime_interfaces";
  import {useCounterStore} from "stores/loading_anime";
  import episode_item from '../components/episodes_page/EpisodeItem.vue';


  export default {
    name: "EpisodesPage",
    components: { episode_item},
    data(){
      return{
        id:0,
        anime_data: null,
        anime_episodes:[],
        episode_data:[],
        episode_datas:[],
        store:null
      }
    },
    methods:{
      update(){
        this.id = this.$route.params.eid;
        if(this.id == undefined) return;
        anime_interfaces.get_episode(this.id,(data)=>{
          this.episode_data = data;
          console.log(this.episode_data);
        });

        //问题1：this.id需要修改
        anime_interfaces.get_episode(this.id,(ep_data)=>{
          let sid = ep_data.subject_id;
          anime_interfaces.get_episodes(sid,(data)=>{
            if(this.episode_datas.length!==0){
              this.episode_datas.splice(0);
            }
            for (let i in data.data){
              console.log(data.data[i]);
              if(data.data[i].name_cn!==''){
                this.episode_datas.push(data.data[i]);
              }
            }
          });
        });

      }
    },
    created() {
      this.$watch(() => this.$route.params.eid,this.update)
    }
    ,
    mounted() {
      this.update();
    }
  };
  </script>

  <style scoped>

  </style>
