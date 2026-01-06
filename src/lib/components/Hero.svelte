<script lang="ts">
    import { onMount, onDestroy } from "svelte";
    import Container from "$lib/components/Container.svelte";

    let currentSlide: number = 0;
    const totalSlides: number = 3;
    let interval: ReturnType<typeof setInterval> | null = null;

    function startInterval(): void {
        if (interval) {
            clearInterval(interval);
        }
        interval = setInterval(() => {
            currentSlide = (currentSlide + 1) % totalSlides;
        }, 3000);
    }

    onMount(() => {
        startInterval();
    });

    onDestroy(() => {
        if (interval) {
            clearInterval(interval);
        }
    });

    function goToSlide(index: number): void {
        currentSlide = index;
        startInterval();
    }
</script>

<section
    class="relative w-full h-[60vh] sm:h-[70vh] md:h-[80vh] overflow-hidden"
>
    <div
        class="absolute inset-0 transition-opacity duration-500 {currentSlide ===
        0
            ? 'opacity-100'
            : 'opacity-0'}"
    >
        <div
            class="w-full h-full bg-linear-to-r from-blue-500 to-purple-600 flex items-center justify-center px-4"
        >
            <Container>
                <div class="text-center text-white">
                    <h1
                        class="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-2 sm:mb-3 md:mb-4"
                    >
                        Banner 1
                    </h1>
                    <p class="text-sm sm:text-base md:text-lg lg:text-xl">
                        Mockup frame สำหรับรูปภาพที่ 1
                    </p>
                </div>
            </Container>
        </div>
    </div>

    <div
        class="absolute inset-0 transition-opacity duration-500 {currentSlide ===
        1
            ? 'opacity-100'
            : 'opacity-0'}"
    >
        <div
            class="w-full h-full bg-linear-to-r from-green-500 to-teal-600 flex items-center justify-center px-4"
        >
            <Container>
                <div class="text-center text-white">
                    <h1
                        class="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-2 sm:mb-3 md:mb-4"
                    >
                        Banner 2
                    </h1>
                    <p class="text-sm sm:text-base md:text-lg lg:text-xl">
                        Mockup frame สำหรับรูปภาพที่ 2
                    </p>
                </div>
            </Container>
        </div>
    </div>

    <div
        class="absolute inset-0 transition-opacity duration-500 {currentSlide ===
        2
            ? 'opacity-100'
            : 'opacity-0'}"
    >
        <div
            class="w-full h-full bg-linear-to-r from-orange-500 to-red-600 flex items-center justify-center px-4"
        >
            <Container>
                <div class="text-center text-white">
                    <h1
                        class="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-2 sm:mb-3 md:mb-4"
                    >
                        Banner 3
                    </h1>
                    <p class="text-sm sm:text-base md:text-lg lg:text-xl">
                        Mockup frame สำหรับรูปภาพที่ 3
                    </p>
                </div>
            </Container>
        </div>
    </div>

    <!-- Dots Navigation -->
    <div
        class="absolute bottom-4 sm:bottom-6 md:bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2 sm:space-x-3 z-10"
    >
        {#each Array(totalSlides) as _, index}
            <button
                onclick={() => goToSlide(index)}
                class="w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all {currentSlide ===
                index
                    ? 'bg-white scale-125'
                    : 'bg-white/50 hover:bg-white/75'}"
                aria-label="ไปยังสลได์ {index + 1}"
            ></button>
        {/each}
    </div>
</section>
