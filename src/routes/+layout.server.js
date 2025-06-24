// src/routes/+layout.server.js
import { redirect } from '@sveltejs/kit';

/** @type {import('./$types').LayoutServerLoad} */
export function load({ locals }) {
    // Passiamo la sessione dal server al client
    // Se l'utente È loggato, allora può vedere la pagina.
    return {
        user: locals.session.user
    };
}