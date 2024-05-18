<script setup lang="ts">
import MainHeadline from '@/components/MainHeadline.vue';
import SlideCount from '@/components/SlideCount.vue';
</script>

<template>
  <section>
    <div class="display-container">
      
      <div class="display-container__image-container">
        <SlideCount class="display-container__slide-count" />
        <img src="@/assets/zwei-katzen-im-bett.jpeg" alt="Zwei Katzen auf Teppich" class="display-container__image" />
      </div>

      <div class="facts">
          <div class="facts__fact">
            <MainHeadline class="facts__headline">12,50 Euro</MainHeadline>
            <p class="facts__text">Kostet uns ein Hund am Tag.</p>
          </div>
          <div class="facts__fact">
            <MainHeadline class="facts__headline">5,65 Euro</MainHeadline>
            <p class="facts__text">Kostet uns eine Katze am Tag.</p>
          </div>
          <div class="facts__fact">
            <MainHeadline class="facts__headline">4,00 Euro</MainHeadline>
            <p class="facts__text">Kostet uns ein Kleintier am Tag.</p>
          </div>
        </div>
      
    </div>
  </section>
</template>

<style>

.display-container {
  background-color: #037C68;
  color: #E4F1EE;
  padding-top: 100px;
  padding-left: var(--side-gap);
  padding-bottom: 120px;
}
.display-container__image-container {
  padding-right: var(--side-gap);
  margin-bottom: 24px;
}
.display-container__slide-count {
  margin-bottom: 16px;

}

.display-container__image {
  width: 100%;
  height: auto;
  border-radius: 20px;
}

.facts {
  background-color: #E4F1EE;
  color: #037C68;
  border-top-left-radius: 20px;
  border-bottom-left-radius: 20px;
  padding: 40px 24px 24px 40px;
}

@media screen and (min-width: 768px) {
  .facts {
    position: absolute;
    z-index: 1;
    top: 0;
    right: 0;
    border-top-left-radius: 0;
    width: calc(50% - var(--side-gap));
    padding-top: 100px;
  }

  .display-container__image-container {
    width: 50%;
  }
  
}

@media screen and (min-width: 1440px){
  .facts {
    padding: 140px 80px 80px 80px;
  }
}

</style>
