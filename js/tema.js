const themeStorageKey = 'hiztegia-theme';
const themeButtons = document.querySelectorAll('[data-theme-toggle]');

function applyTheme(theme) {
    const isLight = theme === 'light';
    document.documentElement.dataset.theme = isLight ? 'light' : 'dark';
    themeButtons.forEach((button) => {
        button.setAttribute('aria-pressed', String(isLight));
        button.textContent = isLight ? '☾' : '☼';
        button.setAttribute('aria-label', isLight ? 'Cambiar a tema oscuro' : 'Cambiar a tema claro');
        button.title = isLight ? 'Cambiar a tema oscuro' : 'Cambiar a tema claro';
    });
}

themeButtons.forEach((button) => {
    button.addEventListener('click', () => {
        const nextTheme = document.documentElement.dataset.theme === 'light' ? 'dark' : 'light';
        localStorage.setItem(themeStorageKey, nextTheme);
        applyTheme(nextTheme);
    });
});

applyTheme(localStorage.getItem(themeStorageKey) || 'dark');
