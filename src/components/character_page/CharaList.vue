<template>
  <q-card class="my-card q-ma-xs" flat bordered style="width: 100%">
    <q-item class="flex-center q-pa-md" style="width: 100%">
      <q-item-section class="flex" avatar >
        <q-avatar square class="col-2">
          <img style="width: 100%;max-height: 300px" :src="character_data.image_url"/>
        </q-avatar>
      </q-item-section>
      <q-item-section class="flex " style="width: 100%">
        <q-item-label class="q-pl-md" style="text-overflow: ellipsis; overflow: hidden; white-space: nowrap">
          <div class="text-h4">{{ character_data.character_name }}</div>
        </q-item-label>
        <q-item-label class="q-pl-md" caption style="text-overflow: ellipsis; overflow: hidden; white-space: nowrap">
          <q-badge class="text-subtitle2" outline color="secondary" :label="character_data.character_relation"/>
          <!-- {{ "性别 " + character_data.person_name }} -->
        </q-item-label>
        <q-separator class="q-my-lg bg-dark"></q-separator>
        <q-item-lable>
          <q-card class="my-card q-pl-md"  flat bordered style="max-width: 280px;border:none;">
            <q-item class="flex-center  q-pa-none">
              <q-item-section class="flex" avatar>
                <q-avatar  square style="width: 100px;height: 100px">
                  <img :src="character_data.actor_img" style="width: 200px;height: 200px"
                   />
                </q-avatar>
              </q-item-section>
              <q-item-section class="flex">

                <q-item-label
                  caption
                  style="
                    text-overflow: ellipsis;
                    overflow: hidden;
                    white-space: nowrap;
                  "
                >
                  {{ character_data.person_name }}
                </q-item-label>
              </q-item-section>
            </q-item>
          </q-card>
        </q-item-lable>
      </q-item-section>
    </q-item>
  </q-card>
</template>

<script>
import chara_card from "components/anime_page/details_page/CharaCard.vue";
export default {
  name: "chara_list",
  props: {
    character_data: {
      images: Object,
      character_name: String,
      person_name: String,
      character_relation: String,
      actor_img:String,
    },
  },
};
</script>

<style scoped></style>
