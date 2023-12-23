<template>
  <div class="row flex-center" style="width: 100%">
    <div class="q-pa-md col-12 flex" style="max-width: 1000px">
      <div class="text-h4">{{ anime_name }}</div>
    </div>
    <div class="q-pa-none col-12 flex">
      <q-toolbar class="flex-center bg-grey-4 text-black" >
        <div class="flex" style="max-width: 1000px;width: 100%">
          <q-tabs v-model="tab" shrink>
            <q-tab name="tab1" label="概览" />
            <q-tab name="tab2" label="章节" />
            <q-tab name="tab3" label="角色" />
            <q-tab name="tab4" label="制作人员" />
          </q-tabs>
        </div>
      </q-toolbar>
    </div>
    <div class="q-pa-none col-12 flex">
      <router-view>
      </router-view>
    </div>
  </div>
<!--  <div class="q-pl-lg q-py-md text-h4 flex-center" style="width: 100%">-->
<!--    <div class="flex" style="max-width: 1000px">-->
<!--        <div class="col">222</div>-->
<!--        <div class="col">222</div>-->
<!--    </div>-->
<!--  </div>-->

<!--  <div class="row flex-center" style="width: 100%">-->
<!--    <div class="q-pa-md flex" style="max-width: 1000px">-->

<!--    </div>-->
<!--  </div>-->
</template>

<script>
import {useCounterStore} from "stores/loading_anime";
import anime_interfaces from "src/funcs/anime_interfaces";

export default {
  name: "AnimeLayout",
  methods:{
    on_emit_name(){
      console.log("23333");
    }
  },
  data(){
    return {
      anime_name:"",
      tab:"tab1",
      name:"",
    }
  },
  created() {
    this.$watch(
      () => this.store.name,
      (toParams, previousParams) => {
        this.anime_name = this.store.name;
        console.log(this.anime_name)
      })
  },
  setup() {
    const store = useCounterStore();
    return {
      store
    }
  }
};
</script>

<style scoped>

</style>
