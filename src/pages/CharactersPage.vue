<template>
    <div class="row flex-center" style="width: 100%">
      <div class="q-py-md flex" style="max-width: 1000px">
        <div class="row">
          <div class="col-12 col-md-3">
            <div class="row q-mt-xs">
              <q-img :src="img" ></q-img>
            </div>
            <div class="row q-mt-xs">
                <q-list bordered separator>
                    <q-item v-for="info in infobox" v-bind:key="info">
                        <q-item-section>
                            <q-item-label>{{info.key}}</q-item-label>
                            <q-item-label caption v-if="(typeof info.value) !== 'object'">{{info.value}}</q-item-label>
                            <div v-else v-for="v in info.value" v-bind:key="v">
                            <q-item-label caption>{{v.v}}</q-item-label>
                            </div>
                        </q-item-section>
                    </q-item>
                </q-list>
            </div>
          </div>
          <div class="col-12 col-md-9 q-pa-sm">
            <div class="row text-body1 q-mb-md">
            {{summary}}
          </div>
          <div class="row text-h5">出演</div>
          <q-separator class="q-my-md"></q-separator>
            <div class="row">
                <chara_card1 v-for="character in sub_data" :key="character" :character_data="character" style="width:100%"></chara_card1>

            </div>
          </div>
        </div>
        <div class="row">
        </div>
      </div>
    </div>
  </template>

  <script>
  import axios from "axios";
  import chara_card1 from "components/anime_page/details_page/CharaCard.vue";
  import common from "../funcs/anime_page/common"
  import anime_interfaces from "src/funcs/anime_interfaces";
  import { QScrollArea } from "quasar";
  import {useCounterStore} from "stores/loading_anime";

  export default {
    components: { chara_card1},
    data() {
        return {
            id:0,
            characterData: [],
            gender:'',
            img:'',
            summary:'',
            name:'',
            infobox:[],
            sub_data: [],
        };
    },
    created() {
        this.fetchCharacters();
        this.fetchCharacters1();
        this.$watch(()=>this.$route.params,
        (toParams,previousParams)=>{
            this.id=this.params.id;
        })
    },
    methods: {
        fetchCharacters(){
            fetch('http://api.bgm.tv/v0/characters/86246')
            .then(response=>response.json())
            .then(data=>{
                this.characterData=data
                this.summary=data.summary
                this.img=data.images.large
                this.infobox=data.infobox
            })
            .then(error=>{
                console.error('error fetching characters',error)
            })
        },
        fetchCharacters1(){
            fetch('http://api.bgm.tv/v0/characters/86246/subjects')
            .then(response=>response.json())
            .then(data=>{
                this.sub_data=data
            })
            .then(error=>{
                console.error('error fetching characters',error)
            })
        },
    },

}

  </script>

  <style scoped>

  </style>
