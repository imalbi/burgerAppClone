<script>
	import LoginForm from '../components/loginForm.svelte';

	import { session, isLoggedIn } from '$lib/sessionStore';
    import '../app.css';
    import Navbar from '../components/navbar.svelte';
    let {data, children } = $props();


	$effect(() => {
		session.set(data.session);
    });
</script>

<svelte:head>
    <title>Clone App - BurgerApp</title>
</svelte:head>


<div class="min-h-screen sm:bg-gray-400 sm:flex sm:items-center sm:justify-center">

    <!-- Il contenitore del finto telefono (attivo solo su schermi 'sm' in su) -->
    <div class="sm:mx-auto sm:my-12 sm:w-[425px] sm:h-[850px] sm:border-[12px] sm:bg-white sm:border-black sm:rounded-[40px] sm:shadow-2xl">
        
        <!-- 
          Lo "schermo" del telefono.
          - Diventa il punto di riferimento con `sm:relative`.
          - Nasconde tutto ciò che esce con `sm:overflow-hidden`.
        -->
        <div class="w-full h-full sm:rounded-[28px] sm:overflow-hidden sm:relative">
            
            <!-- 
              L'area principale dei contenuti.
              - Lo scrolling su desktop avviene solo qui dentro.
            -->
            <div class="h-full w-full sm:overflow-y-auto pb-24">  <!-- NOTA 1 -->
					{@render children()}
				
            </div>
            
            <!-- 
             Contenitore per la Navbar, modificato.
              - È `fixed` su mobile
              - Diventa `absolute` su desktop (`sm:absolute`) per rimanere "intrappolato".
            -->
            <div class="fixed bottom-0 w-full z-50 bg-white border-gray-300 border-t sm:absolute"> <!-- NOTA 2 -->
                <Navbar />
            </div>

        </div>
    </div>
</div>