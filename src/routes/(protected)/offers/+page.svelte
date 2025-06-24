<script>
    const filters = [
        {type:"tutti", label:"Tutte"},
        {type:"cheap", label:"Offerte <=1€"},
        {type:"carne", label:"Carne"},
        {type:"pollo", label:"Pollo"},
        {type:"snack", label:"Snack"},
        {type:"bevande", label:"Bevande"},
        {type:"combo", label:"Combo"},
        {type:"glutenfree", label:"Senza Glutine"}
    ]
    import { offersData } from "../../../data/offersData";
    import HomeCard from "../../../components/homeCard.svelte";
    let activeFilter=$state('tutti');
    function handleClick(filterType){
        console.log('Filtro selezionato:', filterType); //debug
        activeFilter = filterType;
    }
    
</script>

<main class="w-full m-auto mt-3">
    <h1 class="w-10/12 m-auto font-bold text-2xl p-2">Offerte</h1>
    <div class="flex  items-center overflow-x-scroll gap-2 scroll-auto scrollbar-hide mx-1">

        {#each filters as filter(filter.type) }

            <button class=" px-2 py-1 border-gray-800 border rounded-3xl whitespace-nowrap transition-colors" 
             onclick={() => handleClick(filter.type)}
            class:bg-amber-400={activeFilter===filter.type}
            >{filter.label}</button>

        {/each}

    </div>
    
    <div class="w-11/12 m-auto flex flex-col gap-2">

        {#each offersData as offer(offer.id) }
                {#if offer.filters.includes(activeFilter)}
                    
                    <HomeCard descrizione={offer.descrizione} href={offer.href} src={offer.src}></HomeCard>    
                {/if}
            {/each}

    </div>

</main>

<style>

</style>