<template>
  <q-layout view="hHh lpR fFf">

    <q-header elevated class="bg-primary text-white" height-hint="98">
      <q-toolbar>
        <q-toolbar-title>
          <q-avatar>
            <img src="https://cdn.quasar.dev/logo-v2/svg/logo-mono-white.svg">
          </q-avatar>
          Title
        </q-toolbar-title>
        <q-tabs align="center">
          <q-route-tab to="/page1" label="动画" />
          <q-route-tab to="/page2" label="书籍" />
          <q-route-tab to="/page3" label="音乐" />
          <q-route-tab to="/page4" label="游戏" />
          <q-route-tab to="/page4" label="人物" />
        </q-tabs>
      </q-toolbar>
    </q-header>
    <q-page-container>
      <router-view></router-view>
    </q-page-container>

  </q-layout>
</template>

<script setup>

</script>
