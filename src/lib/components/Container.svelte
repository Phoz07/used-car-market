<script lang="ts">
    import type { Snippet } from "svelte";

    interface Props {
        children: Snippet;
        class?: string;
        noPadding?: boolean;
    }

    let {
        children,
        class: className = "",
        noPadding = false,
    }: Props = $props();
</script>

<div
    class="container mx-auto {noPadding
        ? ''
        : 'px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12'} {className}"
>
    {@render children()}
</div>
