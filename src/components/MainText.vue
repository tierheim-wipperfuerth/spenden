<template>

    <div class="main-text">
        <slot></slot>
    </div>

</template>

<style>
    .main-text {
        font-size: 16px;
        line-height: 26px;
        font-weight: 600;
    }

    p {
        margin-bottom: 24px;
    }

    @media screen and (min-width: 1440px) {
        .main-text {
            font-size: 20px;
            line-height: 32px;
        }

    }
</style>