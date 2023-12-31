// 'use strict';

const  scoreEl = document.querySelector('#score--0');
const  score1El = document.getElementById('score--1');
const  diceEl = document.querySelector('.dice')
const btnNew = document.querySelector('.btn--new');
const btnRow = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');

const player0 = document.querySelector('.player--0');
const player1 = document.querySelector('.player--1');

// const winner1 = document.querySelector('.player-0');
// const winner2 = document.querySelector('.player-1');


scoreEl.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add('hidden');

scores = [0,0];
let currentScore = 0 ;
let activePlayer = 0 ;
let playing = true;


//switch  Player
const switchPlayer = function(){
   const test =  document.getElementById(`current--${activePlayer}`).textContent = 0;
    console.log(test)
    activePlayer = activePlayer ===0 ? 1 : 0 ;
    console.log(activePlayer)
    currentScore = 0;
    console.log(currentScore)
    player0.classList.toggle('player--active');
    player1.classList.toggle('player--active');
}

btnRow.addEventListener('click', function(){
  if(playing){
    const dice = Math.trunc(Math.random()*6) + 1;
    console.log(dice)
    diceEl.classList.remove('hidden');
    diceEl.src = `dice-${dice}.png`;
    
    

 if(dice !== 1){
        currentScore +=dice;
        // current0El.textContent = currentScore;
     const test1=   document.getElementById(`current--${activePlayer}`).textContent = currentScore
     console.log(test1)
     console.log(currentScore)
}else{
    //switch player
    switchPlayer();
}
  }
});

btnHold.addEventListener('click', function(){

  if(playing){
      scores[activePlayer] += currentScore;

      document.getElementById(`score--${activePlayer}`).textContent = scores[activePlayer];

      
      if(scores[activePlayer] >= 100){
          playing = false;
          
          document.querySelector(`.player--${activePlayer}`).classList.add('player--winner')
          document.querySelector(`player--${activePlayer}`).classList.remove('player--active');
      }else{
        switchPlayer();
      }
    }
})

btnNew.addEventListener('click', function(){

    scores = [0,0];
    currentScore = 0;
    activePlayer = 0;
    playing = true;
    scoreEl.textContent = 0;
    score1El.textContent = 0;
    current0El.textContent = 0;
    current1El.textContent = 0;
    player0.classList.remove("player--winner")
    player1.classList.remove("player--winner")
    player0.classList.add('player--active');
    player1.classList.remove('player--active');

})