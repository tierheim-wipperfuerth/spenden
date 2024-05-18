<template>

    <div class="bank">
        <p class="bank__text">Tierschutzverein Wipperfürth e.V.<br />IBAN: DE49 3706 9125 5109 3390 18<br />BIC: GENODED1RKO</p>
        <BaseButton class="bank__button base-button--blue">

            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20 9H11C9.89543 9 9 9.89543 9 11V20C9 21.1046 9.89543 22 11 22H20C21.1046 22 22 21.1046 22 20V11C22 9.89543 21.1046 9 20 9Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M5 15H4C3.46957 15 2.96086 14.7893 2.58579 14.4142C2.21071 14.0391 2 13.5304 2 13V4C2 3.46957 2.21071 2.96086 2.58579 2.58579C2.96086 2.21071 3.46957 2 4 2H13C13.5304 2 14.0391 2.21071 14.4142 2.58579C14.7893 2.96086 15 3.46957 15 4V5" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>

            <span>Kontodaten kopieren</span>
        </BaseButton>
        <p class="bank__text">oder</p>
        <PaypalButton class="bank__button base-button--yellow paypal-button--full" />

    </div>

</template>

<script setup lang="ts">
import BaseButton from '@/components/BaseButton.vue';
import PaypalButton from '@/components/PaypalButton.vue';
</script>

<style>

.bank {
    background-color: white;
    color: #194186;
    border-radius: 20px;
    padding: 24px;
    text-align: center;
    max-width: 500px;
    margin-bottom: 80px;
}
.bank__text {
    font-weight: 600;
}
.bank__button {
    margin-bottom: 24px;
} 

</style>