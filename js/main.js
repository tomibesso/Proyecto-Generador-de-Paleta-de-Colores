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

createpalette();