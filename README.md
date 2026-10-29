# Zibersegurtasun Hiztegia

Diccionario web bilingüe de ciberseguridad construido únicamente con **HTML5, CSS3 y JavaScript Vanilla**. La interfaz utiliza una estética tipo hacker/terminal, con tema oscuro por defecto, tema claro opcional, acentos neón, partículas interactivas y animaciones de entrada.

## Características

- Diseño responsive con tema oscuro por defecto y botón para cambiar a tema claro.
- Estética terminal/cyberpunk:
  - Fondo `#0b0f19`.
  - Paneles azul grisáceo oscuro.
  - Texto claro.
  - Acentos cyan `#00f0ff` y verde terminal `#00ff66`.
- Diccionario organizado en dos evaluaciones y una sección de ataques históricos.
- Fichas bilingües sobre Stuxnet y WannaCry, con hechos, características e impacto.
- Página de detalle reutilizable para todos los términos.
- Selector de idioma español/euskera.
- Cambio de idioma sin recargar la página.
- Preferencia de idioma guardada en `localStorage`.
- Preferencia de tema guardada en `localStorage`.
- Animación de entrada de tarjetas con Anime.js.
- Efecto de descodificación tipo Matrix en los términos.
- Título principal con efecto glitch.
- Resplandor neón y elevación suave al pasar el cursor.
- Fondo animado de nodos y conexiones con tsParticles.
- Soporte para `prefers-reduced-motion`.

## Estructura del proyecto

```text
Hiztegia/
├── index.html
├── palabra.html
├── datos.js
├── README.md
├── css/
│   └── style.css
└── js/
    ├── cards.js
    ├── datos.js
    ├── tema.js
    └── transiciones.js
```

## Cómo funciona

### `datos.js`

Contiene los arrays `diccionario` y `erasoak`. `diccionario` actúa como fuente única de datos para el listado y las páginas individuales; `erasoak` contiene las fichas de ataques históricos mostradas en la sección `03 / ERASOAK`.

Cada término tiene esta estructura:

```javascript
{
    id: 'malware',
    termino_es: 'Malware',
    termino_eu: 'Malwarea',
    definicion_es: '...',
    definicion_eu: '...',
    ejemplo_es: '...',
    ejemplo_eu: '...',
    proteccion_es: '...',
    proteccion_eu: '...',
    evaluacion: 1,
    helburuak_es: '...',
    helburuak_eu: '...',
    zergatia_es: '...',
    zergatia_eu: '...',
    fuentes: ['https://ejemplo.com/fuente']
}
```

La primera evaluación contiene seis conceptos. Los términos con `evaluacion: 3`
se muestran junto a las fichas históricas en `03 / ERASOAK`; las fichas del
diccionario mantienen su enlace a la página de definición.

El campo `id` se utiliza para construir los enlaces:

```text
palabra.html?id=malware
```

### `index.html`

Es la página principal del diccionario.

1. Carga `datos.js`.
2. Filtra los términos según el número de evaluación.
3. Genera las tarjetas dinámicamente dentro de cada `.term-grid`.
4. Usa el idioma seleccionado para mostrar `termino_es` o `termino_eu`.
5. Guarda el idioma elegido en:

```javascript
localStorage.setItem('hiztegia-language', currentLanguage);
```

Al volver a cargar la página, se recupera la preferencia:

```javascript
const currentLanguage = localStorage.getItem('hiztegia-language') || 'es';
```

Las tarjetas enlazan con la plantilla única:

```html
<a href="palabra.html?id=malware">
```

### `palabra.html`

Esta página sirve como plantilla para cualquier término.

El identificador se obtiene mediante `URLSearchParams`:

```javascript
const requestedId = new URLSearchParams(window.location.search).get('id');
```

Después se busca la entrada correspondiente:

```javascript
const term = diccionario.find((entry) => entry.id === requestedId);
```

La página también recupera el idioma de `localStorage` y pinta la información adecuada:

```javascript
term[`definicion_${currentLanguage}`]
```

El selector ES/EU de esta página funciona sin recargar el documento y actualiza:

- El nombre del término.
- La definición.
- El ejemplo.
- Las etiquetas de la interfaz.
- El título de la pestaña.

### `css/style.css`

Contiene todos los estilos del proyecto:

- Variables de color mediante `:root`.
- Layout responsive.
- Tarjetas, botones y navegación.
- Glow neón en hover.
- Fondo con cuadrícula tecnológica.
- Animación `glow-pulse`.
- Animación `title-glitch`.
- Animación de parpadeo del cursor.
- Adaptación para usuarios con movimiento reducido.

Ejemplo de variables principales:

```css
:root {
    --background: #0b0f19;
    --panel: #111827;
    --text: #e2e8f0;
    --cyan: #00f0ff;
    --green: #00ff66;
}
```

### `js/transiciones.js`

Intercepta los enlaces internos y añade una transición de opacidad antes de navegar a otra página. Los enlaces con anclas dentro de la misma página no se bloquean.

## Librerías externas

El proyecto no utiliza frameworks pesados. Las únicas dependencias externas se cargan desde CDN:

### tsParticles

Se utiliza para crear el fondo animado de nodos:

- Partículas flotantes.
- Líneas entre partículas cercanas.
- Conexión visual con el cursor mediante el modo `grab`.

CDN utilizado:

```html
<script src="https://cdn.jsdelivr.net/npm/tsparticles@2.12.0/tsparticles.bundle.min.js"></script>
```

### Anime.js

Se utiliza para animar la aparición de las tarjetas:

- Opacidad inicial desde `0` hasta `1`.
- Movimiento vertical desde abajo.
- Retraso progresivo entre tarjetas con `anime.stagger`.

CDN utilizado:

```html
<script src="https://cdnjs.cloudflare.com/ajax/libs/animejs/3.2.1/anime.min.js"></script>
```

## Animaciones

### Entrada de tarjetas

Al cargar el listado, Anime.js aplica una animación en cascada:

```javascript
anime({
    targets: cards,
    opacity: [0, 1],
    translateY: [28, 0],
    delay: anime.stagger(90),
    duration: 650,
    easing: 'easeOutCubic'
});
```

### Efecto de descodificación

Antes de mostrar el término definitivo, cada título se rellena temporalmente con caracteres aleatorios:

```text
PR49}CYY
7}MAFIS
```

La animación revela progresivamente los caracteres reales hasta mostrar el término completo.

### Efecto glitch

El título principal utiliza pseudoelementos CSS para crear desplazamientos de color verde y magenta, simulando una interferencia digital.

### Glow de tarjetas

Las tarjetas tienen una pulsación de luz continua y un resplandor más intenso al pasar el cursor:

```css
.term-card:hover {
    box-shadow: 0 0 15px rgba(0, 240, 255, .4);
}
```

## Ejecución local

No es necesario instalar dependencias ni utilizar un proceso de compilación.

Se puede abrir directamente:

```text
index.html
```

También se recomienda utilizar un servidor local sencillo para evitar restricciones del navegador con archivos locales. Por ejemplo, con VS Code se puede utilizar la extensión **Live Server**.

## Añadir un nuevo término

Para añadir una palabra, incorpora un nuevo objeto en `datos.js`:

```javascript
{
    id: 'autenticacion-multifactor',
    termino_es: 'Autenticación multifactor',
    termino_eu: 'Faktore anitzeko autentifikazioa',
    definicion_es: 'Método que utiliza varias formas de verificar la identidad.',
    definicion_eu: 'Identitatea egiaztatzeko hainbat modu erabiltzen dituen metodoa.',
    ejemplo_es: 'Introduces una contraseña y después un código del móvil.',
    ejemplo_eu: 'Pasahitza sartu eta, ondoren, mugikorreko kode bat sartzen duzu.',
    evaluacion: 1
}
```

No es necesario crear otra página HTML. La tarjeta y la página de detalle se generan automáticamente.

## Accesibilidad y rendimiento

- Se utilizan elementos semánticos como `header`, `main`, `section`, `article` y `footer`.
- Los botones del selector de idioma incluyen `aria-pressed`.
- Las tarjetas mantienen enlaces navegables con teclado.
- El fondo de partículas no bloquea los clics gracias a `pointer-events: none`.
- Si tsParticles o Anime.js no cargan, el contenido principal sigue siendo accesible.
- `prefers-reduced-motion` desactiva las animaciones para usuarios que lo soliciten.
