<template>
    <button class="base-button">
        <slot></slot>
    </button>
</template>

<style>

.base-button {
    background-color: #FFFFFF;
    color: #194186;
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: 'Montserrat', sans-serif;
    font-weight: 600;
    border: none;
    width: 100%;
    height: 50px;
    line-height: 50px;
    font-size: 16px;
    border-radius: 8px;
    cursor: pointer;
    gap: 10px;
}

</style>