import './bootstrap.js';
/*
 * Welcome to your app's main JavaScript file!
 *
 * This file will be included onto the page via the importmap() Twig function,
 * which should already be in your base.html.twig.
 */
import './styles/app.css';

console.log('This log comes from assets/app.js - welcome to AssetMapper! 🎉');

import Alpine from 'alpinejs';
window.Alpine = Alpine;

// Optional plugins
import focus from '@alpinejs/focus';
import collapse from '@alpinejs/collapse';
Alpine.plugin(focus);
Alpine.plugin(collapse);

// Initialize Alpine
Alpine.start();
