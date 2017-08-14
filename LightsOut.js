let startGameButton = document.querySelector("#gameStartButton");
startGameButton.addEventListener("click", startNewGame);
let lightsOutPlayGrid = document.querySelector("#lightsOutGrid");
let arrayOfLights = [];
let winMessage = document.querySelector('h1');

function startNewGame() {
  grid = '';
  winMessage.classList = '';

  for (var i = 1; i < 10; i++) {
    // if (Math.round(Math.random()) === 1) {
    //   grid += `<div class="lightBox" id="lightBox${i}">
    // </div>`
    // } else {
      grid += `<div class="lightBox active" id="lightBox${i}">
    </div>`
    // }
  }

  lightsOutPlayGrid.innerHTML = grid;
  arrayOfLights = document.getElementsByClassName('lightBox');
  for (var i = 0; i < arrayOfLights.length; i++) {
    buttonsChange(arrayOfLights[i])
  }
}



lightsOutPlayGrid.addEventListener("click", buttonsChange);

function buttonsChange(buttonsChange) {
  currentClass = buttonsChange.target;
  currentClass.classList.toggle("active")
  self = parseInt(currentClass.id.slice(-1));

  if (self - 3 > 0) {
    arrayOfLights[self - 4].classList.toggle("active");
  }
  if (self + 3 < 10) {
    arrayOfLights[self + 2].classList.toggle("active");
  }
  if (self % 3 === 1) {
    arrayOfLights[self].classList.toggle("active");
  } else if (self % 3 === 0) {
    arrayOfLights[self - 2].classList.toggle("active");
  } else {
    arrayOfLights[self].classList.toggle("active");
    arrayOfLights[self - 2].classList.toggle("active");
  }
  for (var i = 0; i < arrayOfLights.length; i++) {
    if (arrayOfLights[i].classList[1] !== "active") {
      return;
    }
  }
  winMessage.classList.toggle("active");
};
