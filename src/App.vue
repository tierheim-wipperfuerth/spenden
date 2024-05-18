<script setup lang="ts">
import { useHead } from '@unhead/vue';
import { useKeyboardNav } from './composables/keyboard-nav';
import MainHeader from './components/MainHeader.vue';
import MainFooter from './components/MainFooter.vue';

const { init } = useKeyboardNav();
init();
useHead({
  title: 'Tierheim Wipperfürth | Spenden',
  meta: [
    {
      name: 'description',
      content: 'Wir brauchen deine Hilfe!',
    }, {
      name: 'viewport',
      content: 'width=device-width, initial-scale=1',
    }
  ],
});

</script>

<template>
  <head>
    <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png">
    <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png">
    <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png">
  <link rel="manifest" href="/site.webmanifest">
  </head>
  <MainHeader />

  <RouterView />
  <MainFooter />
</template>


