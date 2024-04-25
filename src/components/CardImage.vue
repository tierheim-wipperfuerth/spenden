<template>
    <div class="card-image" :class="{'card-image--image-top': props.imageTop}">
        
        <slot></slot>

        <img v-if="props.imageTop" :src="path" :alt="props.alt" class="image card-image__image" />

        <div class="card-image__content">
            <MainHeadline class="card-image__title">{{ props.title }}</MainHeadline>
            <p class="card-image__subtitle">{{ props.subtitle }}</p>
        </div>

        <img v-if="!props.imageTop" :src="path" :alt="props.alt" class="image card-image__image" />

    </div>
</template>

<script setup lang="ts">
    import { defineProps, computed } from 'vue';
    import MainHeadline from './MainHeadline.vue';

    const path = computed(() => {
        return new URL (`/src/assets/${props.src}`, import.meta.url).href;
    });

    const props = defineProps<{
        src: string;
        alt: string;
        title: string;
        subtitle: string;
        imageTop?: boolean;
    }>();
</script>

<style>
.card-image {
    padding-left: var(--side-gap);
    padding-right: var(--side-gap);
    padding-top: 40px;
    padding-bottom: 40px;
}
.card-image__image {
    width: 100%;
    height: 280px;
    object-fit: cover;
}
.card-image__subtitle  {
    font-size: 20px;
}

@media screen and (min-width: 768px) {
    .card-image {
        padding: 40px;
    }
    .card-image__image {
        height: 400px;
    }
    
}

@media screen and (min-width: 1368px) {
    .card-image {
        padding: 0;
    }
    .card-image__image {
        height: 630px;
    }

    .card-image__subtitle  {
       font-size: 28px;
    }
    
}

</style>