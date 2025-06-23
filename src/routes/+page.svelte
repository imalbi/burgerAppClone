<script>
    import HomeCard from "../components/homeCard.svelte";
    import HomeHeader from "../components/homeHeader.svelte";
    import { homeData } from "../data/homeData";
</script>

<HomeHeader/>
<main class="mt-3">
    {#each homeData as hc(hc.id)}
    <HomeCard descrizione={hc.descrizione} href= {hc.href} src={hc.src}/>
        
    {/each}
     
</main>