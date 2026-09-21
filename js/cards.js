const translations = {
    es: {
        eyebrow: 'DICCIONARIO DE CIBERSEGURIDAD // TERMINAL EDUCATIVA',
        title: 'Zibersegurtasun Hiztegia',
        intro: 'Explora los conceptos esenciales para moverte con seguridad por el mundo digital.',
        evaluation1: '01 / PRIMERA EVALUACIÓN', evaluation2: '02 / SEGUNDA EVALUACIÓN',
        description1: 'Fundamentos y amenazas habituales.', description2: 'Herramientas y medidas de protección.',
        term: 'TÉRMINO', action: 'CONSULTAR DEFINICIÓN', footer: 'SISTEMA ACTIVO // APRENDER ES PROTEGER'
    },
    eu: {
        eyebrow: 'ZIBERSEGURTASUN HIZTEGIA // HEZKUNTZA-TERMINALA',
        title: 'Zibersegurtasun Hiztegia',
        intro: 'Arakatu mundu digitalean modu seguruan mugitzeko oinarrizko kontzeptuak.',
        evaluation1: '01 / LEHEN EBALUAZIOA', evaluation2: '02 / BIGARREN EBALUAZIOA',
        description1: 'Oinarriak eta ohiko mehatxuak.', description2: 'Babeserako tresnak eta neurriak.',
        term: 'TERMINOA', action: 'DEFINIZIOA IKUSI', footer: 'SISTEMA AKTIBOA // IKASTEA BABESTEA DA'
    }
};

let currentLanguage = localStorage.getItem('hiztegia-language') || 'es';
const matrixCharacters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789<>/{}[]$#@';

function animateCards() {
    const cards = document.querySelectorAll('.term-card');
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches || !window.anime) {
        cards.forEach((card) => {
            card.style.opacity = '1';
            card.querySelector('.term-card__title').textContent = card.dataset.finalText;
        });
        return;
    }

    anime({
        targets: cards,
        opacity: [0, 1],
        translateY: [28, 0],
        delay: anime.stagger(90),
        duration: 650,
        easing: 'easeOutCubic'
    });

    cards.forEach((card, cardIndex) => {
        const title = card.querySelector('.term-card__title');
        const finalText = card.dataset.finalText;
        const startedAt = performance.now() + cardIndex * 90;
        const decode = () => {
            const elapsed = performance.now() - startedAt;
            if (elapsed < 0) {
                requestAnimationFrame(decode);
                return;
            }
            const progress = Math.min(elapsed / 550, 1);
            const revealed = Math.floor(progress * finalText.length);
            title.textContent = finalText
                .split('')
                .map((character, index) => index < revealed
                    ? character
                    : matrixCharacters[Math.floor(Math.random() * matrixCharacters.length)])
                .join('');
            if (progress < 1) requestAnimationFrame(decode);
        };
        requestAnimationFrame(decode);
    });
}

function renderInterface() {
    document.documentElement.lang = currentLanguage;
    document.querySelectorAll('[data-i18n]').forEach((element) => {
        element.textContent = translations[currentLanguage][element.dataset.i18n];
    });
    document.querySelectorAll('.language-button').forEach((button) => {
        const active = button.dataset.language === currentLanguage;
        button.classList.toggle('is-active', active);
        button.setAttribute('aria-pressed', String(active));
    });
    document.querySelectorAll('.term-grid').forEach((grid) => {
        grid.replaceChildren();
        diccionario.filter((term) => term.evaluacion === Number(grid.dataset.evaluation))
            .forEach((term, index) => {
                const card = document.createElement('a');
                card.className = 'term-card';
                card.href = `palabra.html?id=${encodeURIComponent(term.id)}`;
                card.style.setProperty('--card-delay', `${index * 80}ms`);
                card.dataset.finalText = term[`termino_${currentLanguage}`];
                card.innerHTML = `<span class="term-card__label">${translations[currentLanguage].term} // ${term.id}</span>
                    <h3 class="term-card__title" aria-label="${card.dataset.finalText}">${card.dataset.finalText}</h3>
                    <span class="term-card__action">${translations[currentLanguage].action} <span aria-hidden="true">→</span></span>`;
                grid.appendChild(card);
            });
    });
    animateCards();
}

document.querySelectorAll('.language-button').forEach((button) => {
    button.addEventListener('click', () => {
        currentLanguage = button.dataset.language;
        localStorage.setItem('hiztegia-language', currentLanguage);
        renderInterface();
    });
});

renderInterface();
