<script setup>
import NextButton from './NextButton.vue';
import PrevButton from './PrevButton.vue';
import { useKeyboardNav } from '@/composables/keyboard-nav';

const keyboardNav = useKeyboardNav();
</script>

<template>
    <div class="slide-nav">

        <PrevButton v-if="keyboardNav.prevSlide" />
        <NextButton v-if="keyboardNav.nextSlide" />

    </div>
</template>