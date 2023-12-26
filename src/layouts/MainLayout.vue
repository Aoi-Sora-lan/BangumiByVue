<template>
  <q-layout view="hHh lpR fFf">
    <q-header elevated class="bg-pink-3 text-white" height-hint="98">
      <q-toolbar>
        <q-toolbar-title>
          <router-link to="/">
          <q-avatar>
            <img src="https://cdn.quasar.dev/logo-v2/svg/logo-mono-white.svg">
          </q-avatar>
          </router-link>
          Bangumi For Vue
        </q-toolbar-title>
      </q-toolbar>
    </q-header>
    <q-page-container>
      <router-view></router-view>
    </q-page-container>
  </q-layout>
</template>

<script setup>

</script>
