import { writable } from 'svelte/store';

export const userprefs = writable({ language: 'en', theme: 'light' });
