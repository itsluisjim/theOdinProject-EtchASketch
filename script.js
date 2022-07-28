const container = document.getElementById('sketchPad');

function createGrid(width) {
    for(let i = 0; i < Math.pow(width,2); i++){

        let box = document.createElement('div');
        box.setAttribute('id', `${i}`)
        box.classList.add('grid-square');

        let adjustedBoxSizing = 500/width;
        box.style.width = `${adjustedBoxSizing}px`;
        box.style.height = `${adjustedBoxSizing}px`;
        box.style.background = "rgb(255,255,255)";
    
        container.appendChild(box);
    }
}