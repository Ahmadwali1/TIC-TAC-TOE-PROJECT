// Get elements
const cells = document.querySelectorAll('.cell');
const inform = document.getElementById('inform');
const resetButton = document.getElementById('reset_button');

// game variables
let currentPlayer = 'X';
let gameOver = false;

// event listeners for cell clicks
cells.forEach(function(cell){
  cell.addEventListener('click', function(){
      if(!gameOver && cell.textContent === '') {
        cell.textContent = currentPlayer;
        cell.classList.add(currentPlayer);
        
        currentPlayer = currentPlayer === 'X' ? '0' : 'X';
        checkForWin();
        inform.textContent = gameOver ? inform.textContent : `Player ${currentPlayer}'s turn`;
      }
  });
});
// reset button click event
resetButton.addEventListener('click', function(){
  cells.forEach(function(cell){
    cell.textContent = ''
     const cellClass = "cell"; 
    cell.classList.forEach(className => {
    if (className !== cellClass) {
        cell.classList.remove(className);
    }
});
  })
  currentPlayer = 'X';
  gameOver = false;
  inform.textContent = `Player ${currentPlayer}'s turn`;
})
// check for win
function checkForWin() {
  const winningCombinations = [
      [0, 1, 2], [3, 4, 5], [6, 7, 8], 
      [0, 3, 6], [1, 4, 7], [2, 5, 8], 
      [0, 4, 8], [2, 4, 6]             
  ];

  for(i = 0; i < winningCombinations.length; i++) {

    const cell1 = cells[winningCombinations[i][0]]
    const cell2 = cells[winningCombinations[i][1]]
    const cell3 = cells[winningCombinations[i][2]]
      if (
          cell1.classList.contains('X') &&
          cell2.classList.contains('X') && cell3.classList.contains('X') 
          
      ) {
        
          
          gameOver = true;
          inform.innerHTML = `Player X wins!`;
          return;
          
      }
      if (
        cell1.classList.contains('0') &&
        cell2.classList.contains('0') && cell3.classList.contains('0') 
        
    ) {
      
        
        gameOver = true;
        inform.innerHTML = `Player 0 wins!`;
        return;
        
    }
  }

  if ([...cells].every(cell => cell.textContent)) {
      inform.textContent = "It's a draw!";
      gameOver = true;
  }
}


