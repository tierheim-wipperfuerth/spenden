<script setup lang="ts">
import LargeContainer from '@/components/LargeContainer.vue';
import SlideCount from '@/components/SlideCount.vue';
import MainText from '@/components/MainText.vue';
import MainHeadline from '@/components/MainHeadline.vue';
import ImageText from '@/components/ImageText.vue';
</script>

<template>
  <section>
    <LargeContainer class="large-container--red">
      <div class="large-container__content">
        <ImageText>
          
            <SlideCount />
            <MainHeadline>85.000,00 Eur0 tierarztkosten</MainHeadline>
            <MainText>
              <p>Wir müssen jedes Jahr 85.000 Euro für Tierarztkosten aufbringen. Tendenz steigend. Die Erhöhung der Gebührenordnung der Tierärzte (GOT) trifft uns hart.</p>
              <p>Alte, kranke, verletzte, verwahrloste und nicht kastrierte/gekennzeichnete Tiere treffen täglich im Tierheim ein und müssen kostspielig tierärztlich versorgt werden.</p>
            </MainText>

            <template v-slot:imageAfter>
              <img alt="Tierheim Wipperfürth Team" class="image image-large large-container__image-large"
          src="@/assets/katze-nach-op.jpeg" width="620" height="827" />
            </template>

        </ImageText>
        
      </div>
      
    </LargeContainer>
  </section>
</template>

<style></style>
