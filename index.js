import{createBoard} from "./scripts/createBoard";
const startButton = form.querySelector('.board__button');

startButton.addEventListener('click', (event) => {
  event.preventDefault();
  let columns = input.value;
  let count;
  if (columns >= 2 && columns <= 6 && columns % 2 == 0) {
    count = columns * columns;
  } else {
    alert('Ukazite cetnoe cislo');
    return;
  }
  createBoard(columns, count);
});

