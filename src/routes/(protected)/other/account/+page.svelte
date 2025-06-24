<script>
import { listData } from "../../../../data/accountListData";
import OtherListItem from "../../../../components/otherListItem.svelte";
</script>
    
<h1 class=" text-2xl font-normal py-10 px-6">Account</h1>
{#each listData as field(field.id) }
    <OtherListItem label = {field.label} href={field.href}/>
{/each}
