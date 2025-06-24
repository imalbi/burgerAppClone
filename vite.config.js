import tailwindcss from '@tailwindcss/vite';
import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import { SvelteKitPWA } from '@vite-pwa/sveltekit';

export default defineConfig({
	plugins: [tailwindcss(), sveltekit(),
		SvelteKitPWA({
			// Questo è il manifest della tua PWA.
			// Contiene le informazioni chiave sull'applicazione.
			manifest: {
				name: 'Burger Clone App',
				short_name: 'BurgerClone',
				description: 'Una fantastica app che fa cose incredibili',
				// Questo è il colore che vedrà l'utente nella barra del browser
				theme_color: '#ffffff',
				// Questo è il colore dello splash screen quando l'app si avvia
				background_color: '#ffffff',
				// Questo dice al sistema operativo di aprire l'app a schermo intero
				display: 'standalone',
				// L'app partirà sempre dalla homepage
				scope: '/',
				start_url: '/',
				// Qui definisci le icone della tua app
				icons: [
					{
						src: '/media/pwa-small.png', // Il file deve trovarsi nella cartella /static
						sizes: '192x192',
						type: 'image/png',
					},
					{
						src: '/media/pwa-big.png', // Il file deve trovarsi nella cartella /static
						sizes: '512x512',
						type: 'image/png',
					},
					{
						src: '/media/pwa-big.png',
						sizes: '512x512',
						type: 'image/png',
						purpose: 'any maskable', // Un'icona "maskable" si adatta meglio alle varie forme di icone di Android
					},
				],
			}
		})
	]
});
