<script setup lang="ts">
import { defineProps } from 'vue';
import BaseButton from './BaseButton.vue';
import ArrowRight from './icons/ArrowRight.vue';
import { useKeyboardNav } from '../composables/keyboard-nav';

const keyboardNav = useKeyboardNav();

const props = defineProps({
    text: {
        type: String,
        default: 'Weiter',
    },
});

const onClick = () => {
    keyboardNav.slideNext();
};
</script>

<template>
    <BaseButton class="next-button" @click="onClick">
        <span>{{ props.text }}</span>
        <ArrowRight />
    </BaseButton>
</template>