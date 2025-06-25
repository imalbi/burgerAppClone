<script>
import { listData } from "../../../../data/accountListData";
import OtherListItem from "../../../../components/otherListItem.svelte";
</script>
<a class="cursor-pointer font-bold text-3xl ml-2 py-4" href="/other" aria-label="Back"> &lt;</a>
<h1 class=" text-3xl font-extrabold px-6 py-6">Account</h1>
{#each listData as field(field.id) }
    <OtherListItem label = {field.label} href={field.href}/>
{/each}
