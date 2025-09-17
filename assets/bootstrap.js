// Stimulus
import { startStimulusApp } from '@symfony/stimulus-bridge';
const app = startStimulusApp();

// Alpine
import Alpine from 'alpinejs';
window.Alpine = Alpine;
Alpine.start();

// CSS
import './styles/app.css';
// register any custom, 3rd party controllers here
// app.register('some_controller_name', SomeImportedController);
