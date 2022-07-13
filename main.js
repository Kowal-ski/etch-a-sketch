function createGird(size) {
    for (x = 1; x <= size; x++) {
        let column = document.createElement('div');
        column.setAttribute('class', 'column');
        column.setAttribute('id', 'column' + x);
        document.querySelector('.grid-container').appendChild(column);
        for (y = 1; y <= size; y++) {
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
    if (mouseDown == true) {
        e.target.style.background = 'black';
    }
})
document.querySelector('.grid-container').addEventListener('mousedown', (e) => {
    e.target.style.background = 'black';
})

createGird(64);