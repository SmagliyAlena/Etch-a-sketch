let modeBorder = 'solid';
populateBoard(16);
let mode = 'colorPicker';

function populateBoard(size) {
    let board = document.querySelector('.board');
    let squares = board.querySelectorAll('div');

    
    squares.forEach((div) => div.remove());
    let cellSize = (500 / size);
    for (let i = 0; i < size; i++) {
        for(let j = 0; j < size; j++) {
            let square = document.createElement('div');
            square.classList.add('square', 'background')

            square.style.position = 'absolute';
            square.style.left = `${j*cellSize}px`; 
            square.style.top = `${i*cellSize}px`;
     
            square.style.width = `${cellSize}px`;
            square.style.height = `${cellSize}px`;

            square.style.backgroundColor = document.getElementById('backgroundColorPicker').value;
            
            board.insertAdjacentElement('beforeend', square);
            makeColor(square);
        }
    }
        // another way to build board:
        // board.style.gridTemplateColumns = `repeat(${size}, 2fr)`;
        // board.style.gridTemplateRows = `repeat(${size}, 2fr)`;
 
}

function makeColor(whiteSquare){
    function handler (ev) {
        let penColor;
        whiteSquare.classList.add('colored')
        whiteSquare.classList.remove('background')
        
        if (mode === 'black') {
            penColor ='#000000';
        }
        if (mode === 'white') {
            penColor = '#ffffff'
        }
        if (mode ==='colorPicker') {
            penColor = document.getElementById("colorPicker").value;
        }
        if (mode === 'rainbow') {
            const randomR = Math.floor(Math.random() * 256);
            const randomG = Math.floor(Math.random() * 256);
            const randomB = Math.floor(Math.random() * 256);
            
            penColor = `rgb(${randomR}, ${randomG}, ${randomB}`;  
        }
        whiteSquare.style.backgroundColor = penColor;

    }

    whiteSquare.addEventListener('mouseover', handler);
}

function changeSize(input) {
    if (input >= 2 && input <=100) {
        populateBoard(input);    
    }
    else {
        console.log('Too many squares');
    }
}

reset.onclick  = () => resetBoard();
function changeBoardColor() {
    let squares = document.querySelectorAll('.background');
    squares.forEach(div => {
        div.style.backgroundColor = document.getElementById("backgroundColorPicker").value
    });

}
function resetBoard() {
    let sizeOfBoarder = document.getElementById("sizePicker").value
    populateBoard(sizeOfBoarder)
}

gridLines.onclick = () => {
    let board = document.querySelector('.board')
    board.classList.toggle("border");

}

whiteColor.onclick = () => {
    mode = 'white'  
}
blackColor.onclick = () => {
    mode = 'black' 
}
colorPickerButton.onclick = () => {
    mode = 'colorPicker'
};
rainbowColor.onclick = () => { 
    mode = 'rainbow';
}


