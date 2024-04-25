<template>
    <div class="fullsize-container">

        <div class="fullsize-container--left">
            <div class="fullsize-container--inside">
                <slot name="left"></slot>
            </div>
        </div>

        <div class="fullsize-container--right">
            <div class="fullsize-container--inside">
                <slot name="right"></slot>
            </div>
        </div>
        
    </div>

</template>

<style>

.fullsize-container--left {
    background-color: #E4F1EE;
    color: #037C68;
}
.fullsize-container--right {
    color: #E4F1EE;
    background-color: #037C68;
}

.fullsize-container--left .fullsize-container--inside {
    padding-top: 100px;
}

.fullsize-container--right .fullsize-container--inside {
    padding-bottom: 100px;
}


@media screen and (min-width: 768px){
    .fullsize-container {
        display: flex;
        width: 100%;
        min-height: 100vh;
    }

    .fullsize-container--left, 
    .fullsize-container--right {
        flex: 1;
    }   
}

@media screen and (min-width: 1368px){
    .fullsize-container--inside {
        width: calc((1368px / 2) - 80px);
    }

    .fullsize-container--left, 
    .fullsize-container--right {
        padding: 80px;
    }
    .fullsize-container--left {
        display: flex;
        justify-content: flex-end;
    }
}

</style>