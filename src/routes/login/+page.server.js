// src/routes/login/+page.server.js
import { redirect } from '@sveltejs/kit';

/** @type {import('../$types').Actions} */
export const actions = {
    login: async ({ request, cookies }) => {
        console.log('✅ 1. Azione "login" avviata!'); // Segnalatore 1
        const data = await request.formData();
        const email = data.get('email');
        const password = data.get('password');
        const redirectTo= data.get('redirectTo');

        console.log('➡️ 2. Dati ricevuti:', { email, password }); // Segnalatore 2

        const sessionData = {
            isLogged: true,
            user: { name: email.split('@')[0], email: email },
            cart: []
        };
        console.log('📦 3. Oggetto sessione creato:', sessionData); // Segnalatore 3

        cookies.set('session', JSON.stringify(sessionData), {
            path: '/',
            httpOnly: true,
            maxAge: 60 * 60 * 24 * 7
        });
        console.log('🍪 4. Cookie impostato. Sto per fare il redirect...'); // Segnalatore 4
        throw redirect(303, redirectTo||"/account");
    }
};


/** @type {import('./$types').PageServerLoad} */
export function load({ url }) {
    // Leggiamo il parametro 'redirectTo' dall'URL
    const redirectTo = url.searchParams.get('redirectTo');

    // Lo passiamo alla pagina Svelte come prop
    return {
        redirectTo: redirectTo
    };
}