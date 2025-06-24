<script>
    let { data } = $props();


	$effect(() => {
        session.set(data.session);
    });
</script>

<div class="bg-[url(/media/login2_bg.png)] bg-cover">
						<form class="flex flex-col justify-end h-180 gap-4 w-7/10 mx-auto" method="POST" action="?/login">
							<h1 class="text-center text-2xl font-bold">Accedi</h1>
							<input type="hidden" name="redirectTo" value={data.redirectTo || '/account'} />
							<input 
								class="w-full rounded-lg border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-amber-500" 
								type="email" 
								placeholder="email" 
								name="email"
								required>
							
							<input 
								class="w-full rounded-lg border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-amber-500" 
								type="password" 
								placeholder="password" 
								name="password"
								required>
                            <button class="w-full h-10 bg-amber-600 rounded-2xl text-white cursor-pointer" type="submit">Login</button>
							<button class="w-full h-10 bg-amber-600 rounded-2xl text-white cursor-pointer" type="submit">Register</button>
						</form>
					</div>

