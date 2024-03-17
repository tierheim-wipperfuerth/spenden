<script setup lang="ts">
import { useKeyboardNav } from './composables/keyboard-nav';
import MainHeader from './components/MainHeader.vue';
import MainFooter from './components/MainFooter.vue';

const { init } = useKeyboardNav();
init();

</script>

<template>
  <MainHeader />

  <RouterView />
  <MainFooter />
</template>

<style scoped>

</style>


