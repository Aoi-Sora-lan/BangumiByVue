<template>
  <q-card flat bordered>
    <q-card-section horizontal>
      <q-img class="col-2" :src="pic_url">
      </q-img>
    <q-card-section>
      <router-link :to="'/subject/'+subject_id.toString()" style="text-decoration: none">
        <div class="text-h5 text-blue q-mt-sm q-mb-xs">{{title}}</div>
      </router-link>
      <div class="text-body1 text-grey" style="max-height: 140px;overflow: hidden">
        {{ detail }}
      </div>
      </q-card-section>
    </q-card-section>
  </q-card>
</template>

<script>
import anime_interfaces from "src/funcs/anime_interfaces";

export default {
  name: "SearchItem",
  props: {
    subject_id: Number,
  },
  data() {
    return {
      detail: '',
      title: '',
      pic_url: ''
    }
  },
  mounted() {
    anime_interfaces.get_subject(this.subject_id, (data) => {
      this.detail = data.summary;
      if (data.name_cn !== '') this.title = data.name_cn;
      else this.title = data.name;
      this.pic_url = data.images.common;
    });
  }
};
</script>

<style scoped>

</style>
