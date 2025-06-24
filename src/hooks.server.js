// src/hooks.server.js
import { redirect } from '@sveltejs/kit';

/** @type {import('@sveltejs/kit').Handle} */
export const handle = async ({ event, resolve }) => {
    // 1. Legge il cookie
    const sessionCookie = event.cookies.get('session');

    // 2. Prepara `event.locals` in base a quello che hai trovato
    if (sessionCookie) {
        try {
            // Se il cookie c'è, usalo per definire la sessione
            event.locals.session = JSON.parse(sessionCookie);
        } catch {
            // Se è corrotto, imposta una sessione vuota
            event.locals.session = { isLogged: false, user: null, cart: [] };
        }
    } else {
        // Se non c'è, imposta una sessione vuota
        event.locals.session = { isLogged: false, user: null, cart: [] };
    }

    // 3. Esegui il resto (la `load` della pagina o l'azione)
    return resolve(event);
};