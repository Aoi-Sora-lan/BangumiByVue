 <template>
    <div class="row flex-center" style="width: 100%">
      <div class="q-py-md flex" style="max-width: 1000px">
        <div >

          <div class="col-12 col-md-9 q-pa-sm">
            <div class="row text-h6">本篇</div>
            <q-separator class="q-my-md"></q-separator>
            <div class="row  q-mb-md">

              <EpisodeItem v-for="episode in episode_data" :key="episode" flat bordered style="height: 110px;; width: 100%; margin: 5px 5px">
                <router-link  :to="'/episode/'+episode.id" style="text-decoration: none">
                <q-item  >
                  <q-item-section>
                    <q-item-label >
                      <span style="font-size: large; font-family:Cambria, Cochin, Georgia, Times, 'Times New Roman', serif; color:cornflowerblue">{{ episode.sort }}. {{ episode.name }} </span>
                      <span style="font-family: 楷体; font-size: medium;">/{{ episode.name_cn }}</span>
                    </q-item-label>
                    <q-item-label>时长:{{ episode.duration }} / 首播时间:{{ episode.airdate }}</q-item-label>

                    <q-item-label caption>{{ episode.desc }}</q-item-label>
                  </q-item-section>

                  <q-item-section side top>
                    <q-badge color="teal" >{{ episode.comment }}</q-badge>
                  </q-item-section>
                </q-item>
                </router-link>
                <q-separator spaced inset />
              </EpisodeItem>

            </div>
          </div>
        </div>
        <div class="row">

        </div>
      </div>
    </div>
  </template>

  <script>
  import anime_interfaces from "src/funcs/anime_interfaces";
  import {useCounterStore} from "stores/loading_anime";

  export default {

    name: "EpisodesPage",

    data(){
      return{
        id:0,
        anime_data: null,
        episode_data:[],
        store:null
      }
    },
    mounted() {
      this.id = this.$route.params.id;

      anime_interfaces.get_episodes(this.id,(data)=>{
        if(this.episode_data.length!==0){
          this.episode_data.splice(0);
        }
        for (let i in data.data){
          console.log(data.data[i]);
          if(data.data[i].name_cn!==''){
            this.episode_data.push(data.data[i]);
          }
        }
      });
    }
  };
  </script>

  <style scoped>

  </style>

