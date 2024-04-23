<script setup lang="ts">
import LargeContainer from '@/components/LargeContainer.vue';
import SlideCount from '@/components/SlideCount.vue';
import MainText from '@/components/MainText.vue';
import MainHeadline from '@/components/MainHeadline.vue';
import ImageText from '@/components/ImageText.vue';
</script>

<template>
  <section>
    <LargeContainer class="large-container--green">
      <div class="large-container__content">
        <ImageText>
          
            <SlideCount />
            <MainHeadline>206.000,00 Eur0 Lohnkosten</MainHeadline>
            <MainText>
              <p>Wir müssen allein 206.000,00 Lohnkosten jedes Jahr für unsere Mitarbeiter:innen aufbringen. Nicht, weil sie
                fett verdienen- sondern, weil wir Mindestlohn zahlen.</p>
              <p>Unsere Mitarbeiter:innen haben einen fairen Lohn verdient - für ihre Mühe und Hingabe bei der Pflege und
                Versorgung unserer Tierheimbewohner.</p>
            </MainText>

            <template v-slot:imageBefore>
              <img alt="Tierheim Wipperfürth Team" class="image image-large large-container__image-large"
          src="@/assets/team.jpeg" width="1142" height="857" />
            </template>

        </ImageText>
        
      </div>
      
    </LargeContainer>
  </section>
</template>

<style></style>
