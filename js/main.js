const paletteContainer = document.getElementById('paletteContainer');
const colorRange = document.getElementById('colorRange');
const colorValues = ['1','2','3','4','6','7','8','9','A','B','C','D','E','F'];
const palette_SIZE = 6;

const createpalette = () => {
    paletteContainer.innerHTML = '';
    for (let i = 0; i < palette_SIZE; i++) {
        const paletteElement = document.createElement('div');
        paletteElement.classList.add('paletteItem');

        // Agrega un contenedor para el color y el botón de copiar
        const colorContainer = document.createElement('div');
        colorContainer.classList.add('colorContainer');

        // Agrega el contenedor al elemento de paleta
        paletteElement.appendChild(colorContainer);

        // Agrega el elemento de paleta al contenedor principal
        paletteContainer.appendChild(paletteElement);
    }
    updatepalette();
}

const colorize = (container) => {
    let color = '#';

    // elige colores al azar
    for (let i = 0; i < 6; i++) {
        const randomElement = colorValues[Math.floor(Math.random() * colorValues.length)];
        color += randomElement;
    };

    //agrega el span con el color de fondo
    container.style.backgroundColor = color;
    container.innerHTML = `<span class='colorHex'>${color}</span>`;

    // Agrega el botón de copiar al contenedor
    const copyButton = document.createElement('button');
    copyButton.innerHTML = `
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-copy" viewBox="0 0 16 16">
        <path fill-rule="evenodd" d="M4 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1zM2 5a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-1h1v1a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h1v1z"/>
    </svg>`;
    copyButton.addEventListener('click', () => {
        copyToClipboard(container);
    });
    container.appendChild(copyButton);
}

const updatepalette = () => {
    const paletteItems = paletteContainer.children;

    // actualiza el color de cada paleta
    for (let i = 0; i < paletteItems.length; i++) {
        const colorContainer = paletteItems[i].querySelector('.colorContainer');
        colorize(colorContainer);
    }
};

const copyToClipboard = (container) => {
    const colorHex = container.querySelector('.colorHex').textContent;
    
    // Crea un elemento de texto temporal
    const tempTextArea = document.createElement('textarea');
    tempTextArea.value = colorHex;
    document.body.appendChild(tempTextArea);

    // Selecciona y copia el texto
    tempTextArea.select();
    document.execCommand('copy')

    // Elimina el elemento de texto temporal
    document.body.removeChild(tempTextArea);

    Toastify({
        text: '¡Color copiado al portapapeles!',
        duration: 3000,
        style: {
            background: 'black',
            fontFamily: 'Red Hat Display',
            borderRadius: '10px',
            letterSpacing: '1px'
        }
    }).showToast();
};

createpalette();
