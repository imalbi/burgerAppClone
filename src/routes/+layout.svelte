<script>
	import '../app.css';
	import Navbar from '../components/navbar.svelte';
	let { children } = $props();
</script>

<svelte:head>
	<title>Clone App - BurgerApp</title>
</svelte:head>

{@render children()}
<div class="h-25">

</div>
<div class="fixed bottom-0 self-center bg-white border-gray-400 border-t-1 w-full z-50">
	<Navbar/>
</div>
