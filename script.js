const zero = document.getElementById('zero');
const one = document.getElementById('one');
const two = document.getElementById('two');
const three = document.getElementById('three');
const four = document.getElementById('four');
const five = document.getElementById('five');
const six = document.getElementById('six');
const seven = document.getElementById('seven');
const eight = document.getElementById('eight');

const clearbtn = document.querySelector('.clear');
const playagainbtn = document.querySelector('.play-again');
const xbtn = document.querySelector('.x');
const modal = document.querySelector('.winner-modal');
const roundWinner=document.querySelector('.round-winner');

let gameBoard = [
    ['', '', ''],
    ['', '', ''],
    ['', '', ''],
  ];
  
let tictactoeArr = [
  [zero, one, two],
  [three, four, five],
  [six, seven, eight],
  ];
 

const player = function(player){
    this.player=player;
}
const player1 = new player('X');
const player2 = new player('O');
let toggle=0;

tictactoeArr.forEach((row,rowIndex) => {
    row.forEach((element,columnIndex) => {
        element.addEventListener('click',function(){
          if(gameBoard[rowIndex][columnIndex]!==player1.player &&
            gameBoard[rowIndex][columnIndex]!==player2.player){
            if(toggle%2==0){
            element.textContent=player1.player;
            gameBoard[rowIndex][columnIndex] = player1.player;
            checkWinner(player1);
            toggle++;
            }
            else{
            element.textContent=player2.player;
            gameBoard[rowIndex][columnIndex] = player2.player;
            checkWinner(player2);
            toggle++;
            }
        }
       });
   });
});

function checkWinner(player) {
    const win =[
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6]
    ];
    for (const condition of win) {
      const [a, b, c] = condition;
      if  (gameBoard[Math.floor(a / 3)][a % 3] === player.player &&
      gameBoard[Math.floor(b / 3)][b % 3] === player.player &&
      gameBoard[Math.floor(c / 3)][c % 3] === player.player) {
        if(player.player==='X'){
             roundWinner.textContent=`Player 1 wins! Start clicking to play again`;
        }
        else if(player.player==='O') {
            roundWinner.textContent=`Player 2 wins! Start clicking to play again`;
        }

        modal.classList.toggle('hidden');
        clearboard();
        return true;
      }
    }
    if (toggle === 8) {
        roundWinner.textContent = `It's a tie! Start clicking to play again`;
        modal.classList.toggle('hidden');
        clearboard();
        return true;
      }

    return false;
  }

  function clearboard(){
    gameBoard = [
        ['', '', ''],
        ['', '', ''],
        ['', '', ''],
      ];
      toggle = 0;
      tictactoeArr.forEach((row,rowIndex) => {
        row.forEach((element,columnIndex) => {
          element.textContent = '';
        });
      });
  }
clearbtn.addEventListener('click',function(){
    clearboard();
 });

playagainbtn.addEventListener('click',function(){
    clearboard();
}); 

xbtn.addEventListener('click',function(){
    modal.classList.toggle('hidden');
});