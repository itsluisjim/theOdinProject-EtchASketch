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

function hoverFunction(e) {
    if(!e.target.classList.contains('grid-square')) return;
    let str = e.target.style.backgroundColor
    var vals = str.substring(str.indexOf('(') +1, str.length -1).split(', ');
    if(vals[0]==0) return; 
    let decreaseBy = 255/10;

    e.target.style.backgroundColor = `rgb(${vals[0]-decreaseBy},${vals[0]-decreaseBy},${vals[0]-decreaseBy})`
}

function resetGrid(e) {

    if(!(e.target.id =='reset')) return;
    container.replaceChildren();

    let width = prompt("Enter width: (Width: 1-100)",1)

    //hitting cancel, inputting 0, anything over 100, or a string will display 16x16 by default
    if(width == null || width <= 0 || width > 100 || isNaN(width)){
        return createGrid(16);
    }    
    createGrid(width);
}