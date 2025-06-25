<script>
    import { page } from "$app/state";
    let {label, href, srcs} = $props();
    let isActive = $derived(
        href === '/'
            ? page.url.pathname === '/'
            : page.url.pathname.startsWith(href) && href !== '/'
    );
    let src = $derived(isActive ? srcs[1] : srcs[0]);
</script>

<a  {href} class="flex flex-col items-center justify-center w-full">
    <img src={src}  class="relative size-6 mt-1" alt={`${label} Logo`}>
    <h1 class="w-full text-s text-center truncate">
        {#if isActive}
        <span class="font-extrabold">
            {label}
        </span>
        {:else}
        <span>
            {label}
        </span>
        {/if}
    </h1>
    </a>