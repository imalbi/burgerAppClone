<script>
    let {descrizione, href, src} = $props();
</script>

<article class=" rounded-3xl w-9/10 m-auto overflow-hidden shadow-md/50 mt-3">
    <a {href} aria-label={descrizione}>
        <img class="object-cover overflow-hidden h-40 w-full"  {src} alt={descrizione} >
        <h1 class=" text-xl font-bold px-5 py-2"> {@html descrizione}</h1>

    </a>
</article>