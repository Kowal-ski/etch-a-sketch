function createGird() {
    for (x = 1; x <= 16; x++) {
        let column = document.createElement('div');
        column.setAttribute('class', 'column');
        document.querySelector('.grid-container').appendChild(column);
        for (y = 1; y <= 16; y++) {
            let cell = document.createElement('div');
            cell.setAttribute('class', 'cell');
            cell.addEventListener('mouseover', () => {
                if (mouseDown == true) {
                    cell.style.background = 'black';
                }
            })
            cell.addEventListener('mousedown', () => {
                cell.style.background = 'black';
            })
            column.appendChild(cell);
        }
    }
}

let mouseDown = false
document.body.onmousedown = () => (mouseDown = true)
document.body.onmouseup = () => (mouseDown = false)

createGird();