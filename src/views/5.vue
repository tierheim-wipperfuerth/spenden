<script setup lang="ts">
import SlideCount from '@/components/SlideCount.vue';
import FullsizeContainer from '@/components/FullsizeContainer.vue';
import CardImage from '@/components/CardImage.vue';
</script>

<template>
  <section>
    <FullsizeContainer>
      
        <template v-slot:left>
          <CardImage
            class="card-image--white"
            src="suesse-katze.jpeg"
            alt="Eine süße Katze"
            title="56,00 Euro"
            subtitle="Kostet eine Impfung für eine Katze."
          >
          <SlideCount />
        </CardImage>
        </template>

        <template v-slot:right>
          <CardImage
            class="card-image--green"
            src="suesser-hund.jpeg"
            alt="Ein süßer Hund"
            title="40,00 Euro"
            subtitle="Kostet eine Impfung für einen Hund."
            imageTop
          />
        </template>
      
    </FullsizeContainer>
  </section>
</template>

<style></style>
