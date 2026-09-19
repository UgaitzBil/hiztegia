// Suaviza la salida de página sin interferir con enlaces externos o anclas.
document.addEventListener('click', (event) => {
    const link = event.target.closest('a');
    if (!link || link.target === '_blank' || link.origin !== window.location.origin) {
        return;
    }

    const destination = new URL(link.href);
    if (destination.pathname === window.location.pathname &&
        destination.hash &&
        !destination.search) {
        return;
    }

    event.preventDefault();
    document.body.classList.add('is-leaving');
    window.setTimeout(() => {
        window.location.href = link.href;
    }, 180);
});
