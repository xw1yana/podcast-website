function init() {
    import('./index.popular-artists.js');      /* by Oleksandr Braiko */
    import('./index.testimonials.js');
    import('./index.popular-music-carousel.js');
    import('./index.popular-songs.js'); /* by Viktoriia Remeniuk */
    import('./global-header-toggle.js')
}

const totalPartials = document.querySelectorAll('[hx-trigger="load"], [data-hx-trigger="load"]').length;
let loadedPartialsCount = 0;

document.body.addEventListener('htmx:afterOnLoad', () => {
    loadedPartialsCount++;
    if (loadedPartialsCount === totalPartials) init();
});