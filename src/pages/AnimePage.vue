<template>
  <div class="q-pa-md">
    <div class="row">
      <div class="col-3">
        <div class="row">
          <q-img :src="pic_src"></q-img>
        </div>
        <div class="row">
          <info-box :anime_data="anime_data"></info-box>
        </div>
      </div>

<!--      <iframe style="width: 400px;height: 240px" referrerPolicy="no-referrer" :src="video_src" allowfullscreen="allowfullscreen" mozallowfullscreen="mozallowfullscreen" msallowfullscreen="msallowfullscreen" oallowfullscreen="oallowfullscreen" webkitallowfullscreen="webkitallowfullscreen"></iframe>-->

    </div>
    <div class="row">

    </div>
  </div>
</template>

<script>
import InfoBox from "components/anime_page/InfoBox.vue";
import axios from "axios";
import common from "../funcs/anime_page/common"
import anime_interfaces from "src/funcs/anime_interfaces";

export default {
  name: "AnimePage",
  components: { InfoBox },
  data(){
    return{
      id:0,
      video_src:"",
      pic_src:"",
      anime_data: null
    }
  },
  created() {
    this.$watch(
      () => this.$route.params,
      (toParams, previousParams) => {
        console.log("parent-watch-on");
        this.id = this.$route.params.id;
        anime_interfaces.get_subject(this.id,(data)=>
        {
          this.anime_data = data;
          this.pic_src = data.images.common;
        });
      })
  },
  mounted() {
    console.log("parent-mount-on");
    console.log(this.$route.params.id);
    this.id = this.$route.params.id;
    anime_interfaces.get_subject(this.id,(data)=>{
      this.anime_data = data;
      this.pic_src = data.images.common;
    });
    //common.search_page("盾之")
  }
};
</script>

<style scoped>

</style>
