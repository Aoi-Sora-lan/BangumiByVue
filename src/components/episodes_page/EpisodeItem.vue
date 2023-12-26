<template>
  <div  style="max-width: 100%;">
    <q-item>
        <q-item-section>
          <!-- 第一行名称 -->
          <q-item-label style="height: 30px; width: 900px;" >
              <span style="font-size: larger; font-family:Cambria, Cochin, Georgia, Times, 'Times New Roman', serif; color:cornflowerblue">{{ episode_data.sort }}. {{ episode_data.name }} </span> 
          </q-item-label>
          <!-- 第二行信息 -->
          <q-item-label>时长:{{ episode_data.duration }} / 首播时间:{{ episode_data.airdate }}</q-item-label>
          <!-- 第三大行简介 -->
          <q-item-label caption style="font-size: small;"><br><br>{{episode_data.desc }}<br><br></q-item-label>
          <q-separator spaced inset />
        </q-item-section>
    </q-item>
  </div>
</template>

<script>
export default {
  name: "episode_item",
  props:{
    episode_data:{
      airdate:String, 
      name:String, 
      desc:String,
      duration:String,
      name_cn:String,
      Comment:String,
      sort:String,
    }
  },

};
</script>

<style scoped>

</style>
