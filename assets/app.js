import 'core-js/stable'

import Alpine from 'alpinejs'
import Collapse from '@alpinejs/collapse'
import Focus from '@alpinejs/focus' // You have this installed too

// Initialize plugins FIRST
Alpine.plugin(Collapse)
Alpine.plugin(Focus)

// Then assign to window and start
window.Alpine = Alpine
Alpine.start()

console.log('Alpine initialized with:', Object.keys(Alpine._plugins)) // Should show ["collapse", "focus"]

// Safe resize handler with version check
const handleResize = _.debounce(() => {
    if (!window.Alpine?.version) return

    const isMobile = window.innerWidth < 768
    Alpine.store('app', {
        isMobile,
        // Add other store properties here
    })
}, 200)

window.addEventListener('resize', handleResize)
