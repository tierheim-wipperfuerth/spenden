<template>

    <header class="main-header">
        <div class="main-header__inside">
            <PayPalButton />
        </div>
    </header>

</template>

<script setup lang="ts">
    import PayPalButton from './PaypalButton.vue';

</script>

<style>
    .main-header {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        padding: 12px var(--side-gap);
    }

</style>