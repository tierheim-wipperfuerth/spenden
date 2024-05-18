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
        <MainHeadline>30.000,00 Euro</MainHeadline>
        <MainText>
          <p>Hinzu kommen noch 30.000 Euro weitere Kosten, wie beispielsweise Versicherungen, Telefon usw. Ja, auch wir müssen diese Kostenpunkte zahlen - genauso, wie du.</p>
        </MainText>
      </div>
      <template v-slot:after>
        <FullsizeImage alt="Tierheim Wipperfürth Garten" class="slide-two-large-image" src="tierheim-garten.png" />
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