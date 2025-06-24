// src/routes/(protected)/+layout.server.js
import { redirect } from '@sveltejs/kit';

/** @type {import('./$types').LayoutServerLoad} */
export function load({ locals,url }) {
    if (!locals.session.isLogged) {
        const fromUrl = url.pathname + url.search;
        throw redirect(303, `/login?redirectTo=${fromUrl}`); 
    }
}