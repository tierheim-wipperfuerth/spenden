import { onMounted, onUnmounted, computed } from 'vue';
import { useRouter } from 'vue-router';

export function useKeyboardNav() {
    const router = useRouter();

    const sortedSlides = router
        .getRoutes()
        .filter((route) => {
            if (typeof route.name !== 'string') {
                return false;
            }

            return Number.isInteger(parseInt(route.name));
        })
        .map((route) => parseInt(route.name as string))
        .sort();

    const isNavActive = computed((): boolean => {
        const currentRouteName = router.currentRoute.value.name;
        
        if (typeof currentRouteName !== 'string') {
            return false;
        }

        return Number.isInteger(parseInt(currentRouteName));
    });

    const prepareSlide = (nextNumber: number): false|string => {
        if (!isNavActive.value) {
            return false;
        }

        if (sortedSlides.indexOf(nextNumber) < 0) {
            return false;
        }

        return nextNumber.toString();
    }

    const nextSlide = computed(() => {
        if (!isNavActive.value) {
            return false;
        }

        const currentRouteNumber = parseInt(router.currentRoute.value.name as string);
        
        const nextSlide = prepareSlide(currentRouteNumber + 1);

        return nextSlide;
    });

    const prevSlide = computed(() => {
        if (!isNavActive.value) {
            return false;
        }

        const currentRouteNumber = parseInt(router.currentRoute.value.name as string);
        
        const nextSlide = prepareSlide(currentRouteNumber - 1);

        return nextSlide;
    });

    const slideNext = () => {
        const slide = nextSlide.value;        

        if (slide) {
            router.push({ name: nextSlide.value });
        }
    }

    const slidePrev = () => {
        const slide = prevSlide.value;

        if (slide) {
            router.push({ name: prevSlide.value });
        }
    }

    const handleKeydown = (event: KeyboardEvent) => {
        const isArrowKey = event.key === 'ArrowRight' || event.key === 'ArrowLeft';

        if (!isArrowKey) {
            return;
        }

        if (event.key === 'ArrowRight') {
            slideNext();
        }

        if (event.key === 'ArrowLeft') {
            slidePrev();
        }
    };
    
    const init = () => {
        onMounted(() => {
            window.addEventListener('keydown', handleKeydown);
        });
        
        onUnmounted(() => {
            window.removeEventListener('keydown', handleKeydown);
        });
    }

    return {
        init,
        slideNext,
        slidePrev,
        nextSlide,
        prevSlide,
    };
};