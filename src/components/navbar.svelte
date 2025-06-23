<script>
    import { navbarMenu } from "../data/navData";
    import NavItem from "./navitem.svelte";
</script>



<nav class="flex flex-row  w-full mb-3">
    {#each navbarMenu as navbarEntry (navbarEntry.id) }
        <div class="w-1/5">
            <NavItem label = {navbarEntry.label} href= {navbarEntry.path} srcs={navbarEntry.icons}></NavItem>
        </div>
    {/each}
</nav>