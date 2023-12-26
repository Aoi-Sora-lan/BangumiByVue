<template>
    <text-h3 class="text-weight-bold">大家将{{anime_name}}标注为</text-h3>
     <div class="q-pt-xs" style="width:600px">
        <small v-for="tag in anime_tags" v-bind:key="tag">
        <q-chip class="bg-pink-3 text-white" square clickable @click="onclick">
                {{tag.name}}
             <text-caption class="q-pl-md text-white">{{tag.count}}</text-caption>
            </q-chip></small>
          <q-chip class="bg-pink-3" square clickable @click="onclick">
            <text-caption class="text-white">更多+</text-caption>
            </q-chip>
    </div>
</template>

<script>
import axios from "axios";

export default {
  name: "TagBox",
  props:{
    anime_data:{
      type:Object,
      required:true
    }
  },
  data(){
    return {
      anime_tags: [],
      anime_name:"",
    }
  },
  created() {
    this.$watch(
      () => this.anime_data,
      (toParams, previousParams) => {
        //console.log(this.anime_data)
        if(this.anime_tags.length!=0){
          this.anime_tags.splice(0);
        }
        let data = this.anime_data
        this.anime_name=data.name
        for (let i in data.tags){
          this.anime_tags.push(data.tags[i]);
        }
        console.log(this.anime_tags)
      }
    )
  },
  mounted() {
    console.log("child-mount-on");
  }
};
</script>

<style lang="scss">
.grey{
     color:rgb(177, 175, 175)
}
.tag{
    color:rgb(255, 255, 255),
}
</style>
