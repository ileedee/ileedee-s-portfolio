document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.getElementById('hamburger');
    const mobileMenu = document.getElementById('mobileMenu');

    if (!hamburger || !mobileMenu) return;

    hamburger.addEventListener('click', () => {
        mobileMenu.classList.toggle('max-h-0');
        mobileMenu.classList.toggle('max-h-96');
    });

    mobileMenu.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.add('max-h-0');
            mobileMenu.classList.remove('max-h-96');
        });
    });
});