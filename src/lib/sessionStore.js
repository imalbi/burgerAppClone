import { derived,writable } from "svelte/store";

/**
 * @typedef {object} User
 * @property {string} name
 * @property {string} email
 * @property {string} ristorantePreferito
 *
 * @typedef {object} CartItem
 * @property {string} id
 * @property {string} name
 * @property {number} quantity
 *
 * @typedef {object} Session
 * @property {boolean} isLogged
 * @property {User} user
 * @property {CartItem[]} cart
 */



/**
 * Store principale che contiene lo stato della sessione.
 * @type {import('svelte/store').Writable<Session>}
 */
export const session = writable({
    isLogged: false,
    user: { name: '', email: '' },
    cart: []
});

//Store derivare per accedere ai dati
export const isLoggedIn = derived(session, ($session) => $session.isLogged);
export const cartCount = derived(session, ($session) => $session.cart.reduce((sum, item) => sum + item.quantity, 0));
export const user = derived(session, ($session) => $session.user);