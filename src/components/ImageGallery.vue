<template>
    <div class="image-gallery">
        <img alt="Tierheim Wipperfürth Hund" class="image-gallery__image image-gallery__first" src="@/assets/hund.jpeg" width="452" height="340" />
        <img alt="Tierheim Wipperfürth Hase" class="image-gallery__image image-gallery__second" src="@/assets/hase.jpeg" width="330" height="440" />
        <img alt="Tierheim Wipperfürth Pferde" class="image-gallery__image image-gallery__third" src="@/assets/pferde.jpeg" width="452" height="340" />
    </div>
</template>

<style>
.image-gallery {
    height: 523px;
    width: 100%;
    position: relative;

}
.image-gallery__image {
    border-radius: 20px;
    object-fit: cover;
    position: absolute;
}
.image-gallery__first {
    width: 50%;
    height: 178.07px;
    top: 80px;
}
.image-gallery__second {
    width: 50%;
    height: 230.73px;
    top: 20px;
    right: 0;
    
}
.image-gallery__third {
    width: 50%;
    height: 178.07px;
    transform: translateX(-24px);
    bottom: 98px;
    right: 0;   
}

@media screen and (min-width: 768px) {
    .image-gallery__second {
        height: 293.16px;
        transform: translateX(24px);
    }
    .image-gallery__first {
        height: 320.26px;
        object-position: top;
    }
    .image-gallery__third {
        height: 260.26px;
    }
    

}
</style>