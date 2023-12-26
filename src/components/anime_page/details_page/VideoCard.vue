<template>
  <div class="row flex-center q-pa-md" >
    <iframe class="col-12" style="height: 400px" referrerPolicy="no-referrer" :src="video_src" allowfullscreen="allowfullscreen" mozallowfullscreen="mozallowfullscreen" msallowfullscreen="msallowfullscreen" oallowfullscreen="oallowfullscreen" webkitallowfullscreen="webkitallowfullscreen"></iframe>
  </div>
  <q-page-sticky>
    <div class="row flex-center q-pa-md" style="width: 200px" >
      <q-card class="col-12 q-pa-md bg-blue-2">
        <div class="col-12">
          <div class="row">
            <q-btn @click="fetch_the_anime" push :label="select_anime" class="col-12 bg-pink-3 text-h5 text-white">
              <q-menu>
                <q-list style="min-width: 100px">
                  <q-item @click="select_the_anime(text)" clickable v-close-popup :key="text" v-for="text in text_list">
                    <q-item-section>{{text}}</q-item-section>
                  </q-item>
                </q-list>
              </q-menu>
            </q-btn>
          </div>
          <div class="row flex-center">
            <q-knob
              :min="1"
              :max="6"
              :inner-min="1"
              v-model="lines"
              show-value
              size="80px"
              :thickness="0.25"
              color="blue-3"
              track-color="grey-3"
              class="q-ma-md"
            >
              <div style="width: 90%" class="text-body2 text-center"> {{'频道：'+lines.toString()}}</div>
            </q-knob>
            <div class="col-9" style="height: 100%">
              <q-btn @click="play_the_anime" push label="播放→V→" style="width: 100%" class=" bg-pink-3 text-h5 text-white">
              </q-btn>
            </div>
          </div>
        </div>
      </q-card>
    </div>
  </q-page-sticky>

</template>

<script>
import axios from "axios";

export default {
  name: "VideoCard",
  props:{
    search_name:String,
    episodes:Number,
  },
  data(){
    return{
      select_anime:'匹配番剧  OVO',
      lines:2,
      video_src:'',
      text_list:[],
      href_list:[]
    }
  },
  methods:{
    fetch_the_anime(){
      this.text_list.push('加载中...');
      axios.get('https://www.agedm.org/search?query=' + this.search_name.toString()).then(({ data }) => {
        if(this.text_list.length>0){
          this.text_list.splice(0);
          this.href_list.splice(0);
        }
        const parser = new DOMParser();
        const doc = parser.parseFromString(data, 'text/html');
        const list = doc.getElementById('cata_video_list').children[0];
        const length = list.childElementCount;
        for(let i=0;i<length;i++){
          let href = list.children[i].children[0].children[0].children[0].children[0].getAttribute('href').toString();
          let text = list.children[i].children[0].children[0].children[0].children[0].getAttribute('title').toString();
          this.text_list.push(text);
          this.href_list.push(href);
        }
        console.log(this.text_list);
      })
    },
    select_the_anime(text){
      this.select_anime = text;
    },
    play_the_anime(){
      const web_address = (this.href_list[this.text_list.indexOf(this.select_anime)] + '/'+this.lines+'/'+this.episodes).replace("detail", "play");
      axios.get(web_address).then(({ data }) => {
        const parser = new DOMParser();
        const doc = parser.parseFromString(data, 'text/html');
        const iframe = doc.querySelector('iframe');
        console.log(iframe);
        this.video_src = iframe.getAttribute("src");
        console.log(this.video_src);
      })
    }
  }
};
</script>

<style scoped>

</style>
