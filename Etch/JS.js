//let color = 'black'
let click = false;
document.addEventListener('DOMContentLoaded', function () {
    createBoard(16)

    document.querySelector('body').addEventListener('click', function (e) {
        if (e.target.tagName != 'BUTTON') {
            click = !click;
            let draw = document.querySelector('#draw');
            if (click) {
                draw.innerHTML = 'Теперь можно рисовать '
            } else {
                draw.innerHTML = 'Теперб можно рисовать '
            }
        }
    })

    let btn_popup = document.querySelector('#popup');
    btn_popup.addEventListener('click', function () {
        let size = getSize();
        createBoard(size)
    })
    console.log('Load Finish')
})
function createBoard(size) {
    let board = document.querySelector('.board');

    board.style.gridTemplateColumns = `repeat(${size},1fr)`;
    board.style.gridTemplateRows = `repeat(${size},1fr)`;
    let numDivs = size * size;
    for (let i = 0; i < numDivs; i++) {
        let div = document.createElement('div')
        div.addEventListener('mouseover', colorDiv)
        board.insertAdjacentElement('beforeend', div)
    }

}
function getSize() {
    let input = prompt("Размер Доски ");
    let message = document.querySelector("#message");
    if (input == "") {
        message.innerHTML = "Введите Число";
    }
    else if (input < 0 || input > 100) {
        message.innerHTML = "Введите число от одного до ста"
    } else (message.innerHTML = "Начинайте")
    return input
}
function colorDiv() {
    if (click) {
        if (color == 'random') {
            this.style.backgroundColor = `hsl(${Math.random() * 360},100%,50%)`
        }
        else {
            this.style.backgroundColor = 'black'
        }
    }
}


function setColor(colorChoice) {
    color = colorChoice

}
function resetBoard() {
    let divs = document.querySelectorAll('div')
    divs.forEach((div) => div.style.backgroundColor = 'rgba(28,28,28,0)')
}