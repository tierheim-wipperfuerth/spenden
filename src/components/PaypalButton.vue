<template>
    <a href="#" class="paypal-button">Spende mit PayPal</a>
</template>

<style>

    .paypal-button {
        background-color: #FFCB38;
        color: #002A7C;;
        height: 50px;
        border: none;
        border-radius: 5px;
        cursor: pointer;
        appearance: none;
        font-weight: 600;
        font-size: 16px;
        line-height: 50px;
        padding-left: 22px;
        padding-right: 22px;
        display: inline-block;
        text-decoration: none;
        width: 100%;
        text-align: center;
    }

    @media screen and (min-width: 768px) {
        .paypal-button {
            max-width: 230px;
        }
        .paypal-button--full  {
            max-width: inherit;
        }
        
    }

</style>

