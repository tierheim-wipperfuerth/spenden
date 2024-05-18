<script setup lang="ts">
  import LargeContainer from '@/components/LargeContainer.vue';
  import MainHeadline from '@/components/MainHeadline.vue';
  import MainText from '@/components/MainText.vue';
  import SlideCount from '@/components/SlideCount.vue';
  import NextButton from '@/components/NextButton.vue';
  import ImageGallery from '@/components/ImageGallery.vue';
</script>

<template>
  <section>
     <LargeContainer class="large-container--blue large-container--no-bottom-padding-large">
      <div class="large-container__content">
        <SlideCount />
        <MainHeadline>Wir brauchen dich. Es wird eng für uns.</MainHeadline>
        <MainText>
          <p>Nicht nur für Dich wird alles teurer. Auch für uns. Wir brauchen dringend finanzielle Unterstützung, damit unser Tierheim weiterhin Fellnasen in Not helfen kann.</p>
          <p>Warum wir ganz dringend Hilfe brauchen, zeigen wir dir hier.</p>
          <NextButton text="Los geht's" />
        </MainText>
      </div>
      <ImageGallery />
      </LargeContainer>
  </section>
</template>

<style>

</style>
