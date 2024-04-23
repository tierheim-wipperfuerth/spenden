<script setup lang="ts">
import LargeContainer from '@/components/LargeContainer.vue';
import SlideCount from '@/components/SlideCount.vue';
import MainText from '@/components/MainText.vue';
import MainHeadline from '@/components/MainHeadline.vue';
import FullsizeImage from '@/components/FullsizeImage.vue';
</script>

<template>
  <section>
    <LargeContainer class="large-container--white large-container--center-large large-container--flex-column large-container--no-side-padding large-container--no-bottom-padding">
      <div class="large-container__content">
        <SlideCount />
        <MainHeadline>321.000,00 Euro im Jahr</MainHeadline>
        <MainText>
          <p>So viel brauchen wir im Jahr, um unser Tierheim am Laufen zu halten. Und diese Kosten sind in den letzten Jahren dramatisch gestiegen.</p>
          <p>Du fragst dich jetzt? Was, so viel? Wofür? Das lies weiter.</p>
        </MainText>
      </div>
      <template v-slot:after>
        <FullsizeImage alt="Tierheim Wipperfürth Hund" class="slide-two-large-image" src="hunde-auf-wiese.jpeg" />
      </template>
      </LargeContainer>
  </section>
</template>

<style>
  
  @media screen and (min-width: 1024px){
    .slide-two-large-image {
      max-height: 550px;
    }
  }

</style>