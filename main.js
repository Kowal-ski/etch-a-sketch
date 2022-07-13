let gridSize = 16;
let eraser = false;

function createGrid(gridSize) {
    for (x = 1; x <= gridSize; x++) {
        let column = document.createElement('div');
        column.setAttribute('class', 'column');
        document.querySelector('.grid-container').appendChild(column);
        for (y = 1; y <= gridSize; y++) {
            let cell = document.createElement('div');
            cell.setAttribute('class', 'cell');
            cell.setAttribute('id', 'cell' + y);
            column.appendChild(cell);
        }
    }
}

let mouseDown = false
document.body.onmousedown = () => (mouseDown = true)
document.body.onmouseup = () => (mouseDown = false)

document.querySelector('.grid-container').addEventListener('mouseover', (e) => {
    switch (eraser) {
        case false: 
            if (mouseDown == true) {
                e.target.style.background = 'black';
            }
            break;

        case true:
            if (mouseDown == true) {
                e.target.style.background = 'white';
            }
            break;
    }
})
document.querySelector('.grid-container').addEventListener('mousedown', (e) => {
    switch (eraser) {
        case false: 
            e.target.style.background = 'black';
            break;
        
        case true:
            e.target.style.background = 'white';
            break;
    }
})

function cleanUp() {
    let columns = document.querySelectorAll('.column');
    columns.forEach(column => {
        for(i = 1; i <= columns.length; i++) {
            column.removeChild(document.getElementById('cell' + i));
        }
        column.remove();
    });

}

let gridSizeLabel = document.getElementById('gridSizeLabel')

let reloadGridBtn = document.getElementById('reloadGridBtn');
reloadGridBtn.addEventListener('click', () => {
    cleanUp();
    createGrid(gridSize);
})

let reduceGridSizeBtn = document.getElementById('reduceGridSizeBtn');
reduceGridSizeBtn.addEventListener('click', () => {
    if (gridSize > 4) {
        gridSize --;
        gridSizeLabel.textContent = gridSize + 'x' + gridSize;
    } 
})

let increaseGridSizeBtn = document.getElementById('increaseGridSizeBtn');
increaseGridSizeBtn.addEventListener('click', () => {
    if (gridSize < 100) {
        gridSize ++;
        gridSizeLabel.textContent = gridSize + 'x' + gridSize;
    }
})

let clearGridBtn = document.getElementById('clearGridBtn');
clearGridBtn.addEventListener('click', () => {
    cleanUp();
    createGrid(gridSize);
})

let eraseBtn = document.getElementById('eraseBtn');
eraseBtn.addEventListener('click', () => {
    switch (eraser) {
        case false:
            eraseBtn.textContent = 'Eraser on'
            eraser = true;
            break;

        case true: 
            eraseBtn.textContent = 'Eraser off'
            eraser = false;
            break;
    }
})

createGrid(gridSize);