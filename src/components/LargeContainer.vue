<template>
    <div class="large-container">
        <slot></slot>
    </div>
</template>

<style>

    .large-container {
        min-height: 100vh;
        width: 100%;
        padding-top: 100px;
        padding-left: var(--side-gap);
        padding-right: var(--side-gap);
    }

    .large-container--blue {
        background-color: #194186;
        color: #E4F1EE;
    }

    .large-container .slide-count {
        margin-bottom: 16px;
    }
    .large-container .main-headline {
        margin-bottom: 24px;
    }

</style>