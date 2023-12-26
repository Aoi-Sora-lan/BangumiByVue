<template>
  <div class="flex flex-center q-pa-md">
    <div style="width: 100%;max-width: 1000px">
      <div class="row flex-center">
        <div class="col-2 flex-center">
          <q-btn-dropdown :label="search_type_prompt" square push class="bg-pink-3 text-subtitle1 text-grey-1">
            <q-list>
              <q-item v-for="(value,index,key) in search_prompts" :key="key" clickable v-close-popup @click="()=>{search_type = search_types[index];search_type_prompt=value;}">
                <q-item-section>
                  <q-item-label>{{ value }}</q-item-label>
                </q-item-section>
              </q-item>
            </q-list>
          </q-btn-dropdown>
        </div>
        <q-input v-model="search_name" class="col-8"></q-input>
        <div class="col-2">
          <q-btn  @click="on_click" class="q-ma-md">搜索</q-btn>
        </div>
      </div>
      <div class="row">
        <div>
<!--          <q-checkbox v-for="index in anime_tags_bool.length" :key="index" v-model="anime_tags_bool[index-1]" :label="anime_tags_name[index-1]" />-->
        </div>
      </div>
      <div class="row">
        <q-separator class="col q-my-lg"></q-separator>
      </div>
      <div class="row q-pb-lg" v-for="index in search_ids" :key="index">
        <search-item :subject_id="index" class="col"></search-item>
      </div>
    </div>
  </div>
</template>

<script>
import SearchItem from "components/search_page/SearchItem.vue";
import axios from "axios";
import anime_interfaces from "src/funcs/anime_interfaces";

export default {
  name: "SearchPage",
  components: { SearchItem },
  data(){
    return{
      search_ids:[],
      search_name:"",
      anime_tags_name:["日本","动画","日本动画","国产"],
      anime_tags_bool:[false,false,true,false],
      search_type_prompt:'全部',
      search_type:0,
      search_prompts:["全部","书籍","二次元","音乐","游戏","三次元"],
      search_types:[0,1,2,3,4,6]
    }
  },
  methods:{
    on_click(){
      this.on_search();
    },
    on_search(){
      anime_interfaces.search_normal(this.search_name,this.search_type,0,(data)=>{
        console.log(data);
        const data_group = data.list;
          if(this.search_ids.length>0) this.search_ids.splice(0);
          for (let i in data_group)
          {
            this.search_ids.push(data_group[i].id);
          }
          console.log(this.search_ids);
      })
      // axios.post
      // (
      //   "https://api.bgm.tv/v0/search/subjects?limit=10&offset=0",
      //   {
      //     "keyword": this.search_name,
      //     "sort": "rank",
      //     "filter": {
      //       "type": [
      //         2
      //       ],
      //       "tag": tags_array,
      //       "air_date": [
      //       ],
      //       "rating": [
      //       ],
      //       "rank": [
      //       ],
      //       "nsfw": false
      //     }
      //   },
      //   {
      //     'User-Agent': 'AoiSora/BangumiByVue (https://github.com/Aoi-Sora-lan/BangumiByVue)',
      //   }
      // ).then((data)=>{
      //   const data_group = data.data.data;
      //   if(this.search_ids.length>0) this.search_ids.splice(0);
      //   for (let i in data_group)
      //   {
      //     this.search_ids.push(data_group[i].id);
      //   }
      //   console.log(this.search_ids);
      // });
    }
  },
  mounted() {
    if(this.$route.params.keyword !== undefined){
      this.search_name = this.$route.params.keyword;
      this.on_search();
      console.log(this.$route.params.keyword);
    }
    else{
      this.search_name=''
      this.on_search();
    }
  }
};

</script>

<style scoped>

</style>
