<script setup>
import NextButton from './NextButton.vue';
import PrevButton from './PrevButton.vue';
import { useKeyboardNav } from '@/composables/keyboard-nav';

const keyboardNav = useKeyboardNav();
</script>

<template>
    <div class="slide-nav">
        <PrevButton class="slide-nav__button" v-if="keyboardNav.prevSlide.value" />
        <NextButton class="slide-nav__button" v-if="keyboardNav.nextSlide.value" />
    </div>
</template>

<style>
.slide-nav {
    position: absolute;
    right: 0;
    width: 100%;
    top: -16px;
    display: flex;
    padding-left: var(--side-gap);
    padding-right: var(--side-gap);
    gap: 16px;
    transform: translateY(-100%);
    justify-content: flex-end;
}

@media screen and (min-width: 768px){
    .slide-nav__button {
        width: 154px;
    }
}
</style>