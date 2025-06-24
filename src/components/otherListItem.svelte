<script>
    let {label, href} = $props();
</script>
<a {href}>
    <li class="flex justify-between h-12 items-center w-9/10 mx-auto my-2">
        <p class="text-xl px-1 font-thin leading-5 w-full">
            {@html label}
        </p>
        <p class="font-extrabold w-full text-end"> > </p>

    </li>
    <div class="border-b-1 border-gray-400"></div>

</a>

