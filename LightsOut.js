let startGameButton = document.querySelector("#gameStartButton");
startGameButton.addEventListener("click", startNewGame);
let lightsOutPlayGrid = document.querySelector("#lightsOutGrid");

function startNewGame() {
  grid = '';
  for (var i = 1; i < 10; i++) {
    if (Math.round(Math.random()) === 1) {
      grid += `<div class="" value=${i} id="lightBox${i}">
    </div>`
    } else {
      grid += `<div class="active" value=${i} id="lightBox${i}">
    </div>`
    }
  }
  lightsOutPlayGrid.innerHTML = grid;
}



lightsOutPlayGrid.addEventListener("click", function(buttonsChange){
  currentClass = buttonsChange.target;
  currentClass.classList.toggle("active")

});


//
// toggle this class avtive and then toggle 4 around it.
// take number of this up is -3 down is +3 left is -1 right is +1
// set up to this.number -3 if >0 toggle active
// set down to this.number +3 if <10 toggle active
// set left to this.number -1 if >0 toggle active
// set right to this.number +1 if <10 toggle active
//
// when light get clicked change it and lights on 4 sides of it(up down left and right)
// if all lights are active player wins.
//
