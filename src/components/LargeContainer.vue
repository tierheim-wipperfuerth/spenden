<template>
    <div class="large-container">
        <slot></slot>
    </div>
</template>

<style>

    .large-container {
        min-height: 100vh;
    }

    .large-container--blue {
        background-color: #194186;
        color: #E4F1EE;
    }

</style>