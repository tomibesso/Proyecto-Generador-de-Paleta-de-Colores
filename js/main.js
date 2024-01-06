const paletteContainer = document.getElementById('paletteContainer');
const colorRange = document.getElementById('colorRange');
const colorValues = ['1','2','3','4','6','7','8','9','A','B','C','D','E','F'];
const palette_SIZE = 6;

const createpalette = () => {
    paletteContainer.innerHTML = '';
    for(let i = 0; i < palette_SIZE; i++) {
        const paletteElement = document.createElement('div');
        paletteElement.classList.add('paletteItem');
        paletteContainer.appendChild(paletteElement);
    }
    updatepalette();
}

const colorize = (element) => {
    let color = '#';
    for(let i = 0; i < 6; i++) {
        const randomElement = colorValues[Math.floor(Math.random() * colorValues.length)];
        color += randomElement;
    };
    element.style.backgroundColor = color; 
    element.innerHTML = `<span class='colorHex'>${color}</span>`;   
}

const updatepalette = () => {
    for (let i = 0; i < paletteContainer.children.length; i++) {
        colorize(paletteContainer.children[i])
    }
};

const copyToClipboard = (id) => {
    const firstPaletteItem = paletteContainer.children[id];
    const colorHex = firstPaletteItem.querySelector('.colorHex').textContent;

    // Crea un elemento de texto temporal
    const tempTextArea = document.createElement('textarea');
    tempTextArea.value = colorHex;
    document.body.appendChild(tempTextArea);

    // Selecciona y copiar el texto
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