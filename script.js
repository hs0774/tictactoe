const zero = document.getElementById('zero');
const one = document.getElementById('one');
const two = document.getElementById('two');
const three = document.getElementById('three');
const four = document.getElementById('four');
const five = document.getElementById('five');
const six = document.getElementById('six');
const seven = document.getElementById('seven');
const eight = document.getElementById('eight');

const gameBoard = [
    ['', '', ''],
    ['', '', ''],
    ['', '', ''],
  ];
  
const tictactoeArr = [
  [zero, one, two],
  [three, four, five],
  [six, seven, eight],
  ];
 

const player = function(player){
    this.player=player;
}
const player1 = new player('x');
const player2 = new player('o');
let toggle=0;

tictactoeArr.forEach((row,rowIndex) => {
    row.forEach((element,columnIndex) => {
        element.addEventListener('click',function(){
          if(gameBoard[rowIndex][columnIndex]!==player1.player &&
            gameBoard[rowIndex][columnIndex]!==player2.player){
            if(toggle%2==0){
            element.textContent=player1.player;
            gameBoard[rowIndex][columnIndex] = player1.player;
            toggle++;
            }
            else{
            element.textContent=player2.player;
            gameBoard[rowIndex][columnIndex] = player2.player;
            toggle++;
            }
            checkwinner();
        }
       });
   });
});
const checkwinner = function(){
  console.log('checking');
  if(toggle==9){
    alert('tie');
  }
}