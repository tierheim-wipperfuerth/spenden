<template>
    <h1 class="main-headline">
        <slot></slot>
    </h1>
</template>

<style>
    .main-headline {
        font-size: 44px;
        line-height: 44px;
        font-family: 'Passion One', sans-serif;
        text-transform: uppercase;
    }

    @media screen and (min-width: 768px) {
        .main-headline {
            font-size: 64px;
            line-height: 64px;
        }
    }

    @media screen and (min-width: 1440px) {
        .main-headline {
            font-size: 84px;
            line-height: 84px;
        }
    }
</style>