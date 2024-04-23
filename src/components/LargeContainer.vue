<template>
    <div class="large-container">
        <div class="large-container__inside">
            <slot></slot>
        </div>
        <slot name="after"></slot>
    </div>
</template>

<style>

    .large-container {
        min-height: 100vh;
        width: 100%;
        padding-top: 100px;
        padding-left: var(--side-gap);
        padding-right: var(--side-gap);
        padding-bottom: 100px;
    }

    .large-container--no-side-padding {
        padding-left: 0;
        padding-right: 0;
    }

    .large-container--no-bottom-padding {
        padding-bottom: 0;
    }

    .large-container--no-side-padding .large-container__content {
        padding-left: var(--side-gap);
        padding-right: var(--side-gap);
    }

    .large-container--flex-column .large-container__content {
            min-height: 50vh;
            display: flex;
            flex-direction: column;
            justify-content: center;
     }

    .large-container__inside {
        max-width: var(--max-width);
        width: 100%;
        margin: 0 auto;
    }

    .large-container--blue {
        background-color: #194186;
        color: #E4F1EE;
    }
    .large-container--white {
        background-color: #E4F1EE;
        color: #037C68;
    }
    .large-container--green {
        background-color: #037C68;
        color: #E4F1EE;
    }
    .large-container--red {
        background-color: #B81E0A;
        color: #FFFFFF;
    }

    .large-container .slide-count {
        margin-bottom: 16px;
    }
    .large-container .main-headline {
        margin-bottom: 24px;
    }

    @media screen and (min-width: 1440px){
        .large-container {
            display: flex;
            align-items: center;   
        }
        .large-container--flex-column {
            flex-direction: column;
            
        }
        .large-container--flex-column .large-container__content {
            padding-bottom: 80px;
        }
        .large-container__inside {
            display: flex;
            align-items: center;
            gap: 80px;
        }
        .large-container__inside > *  {
            flex: 1;
            max-width: 100%;
        }
        .large-container .main-headline {
            margin-bottom: 40px;
        }

        .large-container--center-large {
            text-align: center;
        }
    }

</style>