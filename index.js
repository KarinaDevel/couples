const gameBoard = document.querySelector(".board");
const form = document.querySelector('.board__form')
const startButton = form.querySelector('.board__button');
const input = form.querySelector('.board__input');


startButton.addEventListener("click", (event) => {
  event.preventDefault()
  let columns = input.value;
  let count;
  if (columns >= 2 && columns <= 6 && columns % 2 == 0) {
    count = columns * columns;
  } else {
    input.value = 4;
  }
  createBoard();
});

function createBoard() {
  gameBoard.textContent = "";
}