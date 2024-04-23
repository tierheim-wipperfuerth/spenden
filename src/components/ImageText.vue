<template>
    <div class="image-text">

        <div class="image-text__image" v-if="$slots.imageBefore"><slot name="imageBefore"></slot></div> 

        <div class="image-text__content"><slot></slot></div> 
        <div class="image-text__image" v-if="$slots.imageAfter"><slot name="imageAfter"></slot></div> 

    </div>
</template>

<style>

.image-text {
    display: flex;
    gap: 40px;
    flex-direction: column;
}

.image-text__image {
    flex: 1;
    height: 546px;
    overflow: hidden;
    border-radius: 20px;
}
.image-text__content {
    flex: 1;
}

@media screen and (min-width: 768px) {
    .image-text {
        flex-direction: row;
        align-items: center;
    }
}

@media screen and (min-width: 1440px){
    .image-text__image img {
        height: 100%;
        width: 100%;
        object-fit: cover;
    } 
}

</style>