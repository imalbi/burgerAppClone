<script>
  import OtherListItem from '../../../components/otherListItem.svelte';
  import { otherData } from '../../../data/otherData';


</script>

<header class="flex justify-between items-center h-35">
    <h1 class="text-4xl font-bold ml-5">Altro</h1> 
    <img class="size-25 p-3 mr-5" src="/media/icon.png" alt="logo">
</header>
<main class="w-full m-auto"> 
    <ul class="w-full">
        {#each otherData as item(item.id)}
            <OtherListItem label = {item.option} href={item.href}/>
        {/each}
    </ul>
</main>