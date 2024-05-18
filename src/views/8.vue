<script setup lang="ts">
  import LargeContainer from '@/components/LargeContainer.vue';
  import MainHeadline from '@/components/MainHeadline.vue';
  import Bank from '@/components/Bank.vue';
  import SlideCount from '@/components/SlideCount.vue';
  import ImageGallery from '@/components/ImageGallery.vue';
</script>

<template>
  <section>
     <LargeContainer class="large-container--blue">
      <div class="large-container__content">
        <SlideCount />
        <MainHeadline>Wir brauchen dich. Hilfst du uns?</MainHeadline>
        <Bank />
      </div>
      <ImageGallery />
      </LargeContainer>
  </section>
</template>

<style>

</style>
