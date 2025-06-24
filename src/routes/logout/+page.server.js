
// src/routes/logout/+page.server.js
import { redirect } from '@sveltejs/kit';

// Usiamo `load` perché un link fa una richiesta GET, e `load` gestisce i GET.
export function load({ cookies }) {
    console.log("Eseguo il logout..."); // Utile per il debug
    cookies.delete('session', { path: '/' });
    throw redirect(303, '/'); // Reindirizza sempre alla homepage
}