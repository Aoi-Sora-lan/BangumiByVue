<template>
  <q-card @mouseenter="name_show=true" @mouseleave="name_show=false" class="my-card" style="width: 75px;height: 100px">
    <router-link :to="'/subject/'+$props.anime_index.toString()">
      <q-img :src="anime_picture" style="width: 75px;height: 100px">
        <div v-if="name_show" class="absolute-center text-left" style="width: 100%;height: 100%; padding: 5px 5px;">
          {{anime_name}}
        </div>
        <div v-if="!name_show" class="absolute-bottom text-left" style="padding: 0px 5px;width: 100%;text-overflow: ellipsis;overflow:hidden;white-space: nowrap">
          {{anime_name}}
        </div>
        <div v-if="!name_show" class="absolute-top-right text-right" style="padding: 0px 5px;">
          {{anime_score+'/'+10}}
        </div>
      </q-img>
    </router-link>
  </q-card>
</template>

<script>
import axios from 'axios'
import anime_interfaces from "src/funcs/anime_interfaces";
export default {
  name: "DailyAnime",
  props:{
    anime_index:{
      type:Number,
      required:true
    }
  },
  data(){
    return {
      anime_name: "",
      anime_picture:"",
      anime_score:0,
      name_show:false
    }
  }
  ,
  mounted() {
    anime_interfaces.get_subject(this.anime_index,(data)=>{
      console.log(data);
      this.anime_name = data.name_cn;
      this.anime_picture = data.images.common;
      this.anime_score = data.rating.score;
      console.log(data.images.common);
    });
  }
};
</script>

<style lang="sass" scoped>
.my-card
  width: 100%
  max-width: 250px
</style>
