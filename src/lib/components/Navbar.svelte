<script lang="ts">
    import { onMount, onDestroy } from "svelte";

    import { navBarMenu } from "$lib/assets/contents/content";

    import Container from "$lib/components/Container.svelte";
    import SignInButton from "$lib/components/auth/SignInButton.svelte";

    let isScrolled: boolean = false;
    let lastScrollY: number = 0;
    let isHidden: boolean = false;

    function handleScroll(): void {
        const currentScrollY = window.scrollY;

        isScrolled = currentScrollY > 10;

        if (currentScrollY > lastScrollY && currentScrollY > 100) {
            isHidden = true;
        } else if (currentScrollY < lastScrollY) {
            isHidden = false;
        }

        lastScrollY = currentScrollY;
    }

    onMount(() => {
        if (typeof window !== "undefined") {
            window.addEventListener("scroll", handleScroll, { passive: true });
        }
    });

    onDestroy(() => {
        if (typeof window !== "undefined") {
            window.removeEventListener("scroll", handleScroll);
        }
    });
</script>

<nav
    class="fixed w-full z-50 transition-all duration-300 ease-in-out {isScrolled
        ? 'bg-white/20 backdrop-blur-md shadow-sm'
        : 'bg-white'} {isHidden ? '-translate-y-full' : 'translate-y-0'}"
>
    <Container>
        <div class="flex justify-between items-center py-4">
            <a href="/" class="text-xl font-bold">Used Car Market</a>
            <div class="flex items-center justify-center gap-4">
                <ul class="flex space-x-4">
                    {#each navBarMenu as item}
                        <li><a href={item.href}>{item.title}</a></li>
                    {/each}
                </ul>
                <SignInButton />
            </div>
        </div>
    </Container>
</nav>
