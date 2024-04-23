<template>
    <img v-bind:alt="alt" class="fullsize-image" :src="path"  width="1440" height="542" />
</template>

<script setup lang="ts">
    import { computed, defineProps } from 'vue';
    const props = defineProps<{
        src: string;
        alt: string;
    }>();

    const path = computed(() => {
        return new URL (`/src/assets/${props.src}`, import.meta.url).href;
    });
</script>

<style>
.fullsize-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
}
</style>