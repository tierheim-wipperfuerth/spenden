<script setup lang="ts">
import BaseButton from './BaseButton.vue';
import ArrowLeft from './icons/ArrowLeft.vue';
import { useKeyboardNav } from '../composables/keyboard-nav';

const keyboardNav = useKeyboardNav();

const props = defineProps({
    text: {
        type: String,
        default: 'Zurück',
    },
});

const onClick = () => {
    keyboardNav.slidePrev();
};

</script>

<template>
    <BaseButton class="next-button" @click="onClick">
        <ArrowLeft />
        <span>{{ props.text }}</span>
    </BaseButton>
</template>