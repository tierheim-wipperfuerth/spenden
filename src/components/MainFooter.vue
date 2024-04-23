<template>
    <footer class="main-footer">
        <SlideNav />
        <div class="main-footer__inside">
            <img alt="Tierheim Wipperfürth Logo" class="main-footer__logo" src="@/assets/logo.svg" width="241" height="60" />

            <div class="main-footer__middle">
                <nav class="main-footer__nav">
                    <router-link to="/impressum" class="main-footer__link">Impressum</router-link>
                    <router-link to="/datenschutz" class="main-footer__link">Datenschutz</router-link>
                </nav>

                <span class="main-footer__copy">
                    &copy; {{ year }} Tierheim Wipperfürth
                </span>
            </div>
        </div>
        <div class="main-footer__made">Made with love by <a target="_blank" href="https://www.nuris.studio/">nuris.studio</a></div>
    </footer>
</template>

<script setup>
    import { ref } from 'vue';
    import SlideNav from './SlideNav.vue';

    const year = ref(new Date().getFullYear());
</script>

<style>
.main-footer {
    background-color: #F5F5F5;
    position: relative;
}
.main-footer__inside {
    padding: 24px var(--side-gap);
    display: flex;
    flex-direction: column;
    width: 100%;
    gap: 40px;
    justify-content: space-between;
    align-items: center;
}
.main-footer__made {
    text-align: center;
    padding: 12px var(--side-gap);
    font-weight: 700;
    color: #18191D;
}
.main-footer__made a {
    color: #18191D;
    text-decoration: none;
}
.main-footer__nav {
    margin-bottom: 40px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 14px;
}
.main-footer__link {
    text-decoration: none;
    color: #1C1C1C;
    font-weight: 500;
}

</style>