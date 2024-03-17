<template>
    <div class="slide-count">
        {{ currentSlide }} - {{ maxSlides }}
    </div>
</template>

<script setup lang="ts">
    import { computed } from 'vue';
    import { useRouter } from 'vue-router';
    const router = useRouter();
   
    const maxSlides = computed(() => {
        return router
            .getRoutes()
            .filter((route) => {
                if (typeof route.name !== 'string') {
                    return false;
                };

                return Number.isInteger(parseInt(route.name));
            }).length;
    });

    const currentSlide = computed(() => {
        return parseInt(router.currentRoute.value.name as string);
    });
</script>

<style>
    .slide-count {
        font-weight: 700;
    }
</style>