let startGameButton = document.querySelector('#gameStartButton');
startGameButton.addEventListener('click', startNewGame);
let lightsOutPlayGrid = document.querySelector('#lightsOutGrid');
let arrayOfLights = [];
let winMessage = document.querySelector('h1');
let gameSize = 5;
let gridSize = gameSize * gameSize;
function startNewGame() {
  grid = '';
  winMessage.classList;
  for (var i = 1; i < (gridSize + 1); i++) {
    grid += `<div class='lightBox' data-id='${i}'>
    </div>`;
  }

  lightsOutPlayGrid.innerHTML = grid;
  arrayOfLights = document.getElementsByClassName('lightBox');
  newGameSetUp();
}

lightsOutPlayGrid.addEventListener('click', function (buttonsChange) {
  currentClass = buttonsChange.target;
  currentClass.classList.toggle('active');
  self = parseInt(currentClass.dataset.id);

  if (self - gameSize > 0) {
    changeLightUp();
  }

  if (self + gameSize < gridSize + 1) {
    changeLightDown();
  }

  if (self % gameSize === 1) {
    changeLightLeft();
  } else if (self % gameSize === 0) {
    changeLightRight();
  } else {
    changeLightLeft();
    changeLightRight();
  }

  for (var i = 0; i < arrayOfLights.length; i++) {
    if (arrayOfLights[i].classList[1] !== 'active') {
      return;
    }
  }

  youWin();
});

function newGameSetUp() {
  for (i = 1; i < gridSize + 1; i++) {
    if (Math.random() > 0.5) {
      arrayOfLights[i].classList.toggle('active');
    }
  }
}

function changeLightUp() {
  arrayOfLights[self - gameSize - 1].classList.toggle('active');
}

function changeLightDown() {
  arrayOfLights[self + gameSize - 1].classList.toggle('active');
}

function changeLightLeft() {
  arrayOfLights[self].classList.toggle('active');
}

function changeLightRight() {
  arrayOfLights[self - 2].classList.toggle('active');
}

function youWin() {
  winMessage.classList.toggle('active');
}
