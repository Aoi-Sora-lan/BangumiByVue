<template>
  <q-card class="my-card q-ma-xs" flat bordered  style="max-width: 280px;">
    <q-item class="flex-center q-pa-md">
      <q-item-section class="flex" avatar>
        <q-avatar>
          <img style="width: 150px;height: 150px" :src="character_data.image_url">
        </q-avatar>
      </q-item-section>
      <q-item-section class="flex">
        <q-item-label style="text-overflow: ellipsis;overflow:hidden;white-space: nowrap">
          {{character_data.character_name}}
        </q-item-label>
        <q-item-label caption style="text-overflow: ellipsis;overflow:hidden;white-space: nowrap">
          <q-badge outline color="secondary" label="CV" />
          {{character_data.person_name}}
        </q-item-label>
      </q-item-section>
    </q-item>
  </q-card>
</template>

<script>
export default {
  name: "chara_card",
  props:{
    character_data:{
      image_url:String,
      character_name:String,
      person_name:String
    }
  },
};
</script>

<style scoped>

</style>
