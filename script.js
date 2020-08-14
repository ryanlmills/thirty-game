/*
Rules:
- On each player's turn, they add 1, 2, or 3 to their overall score, starting at zero
- The first player forced to count to zero loses
*/

// Score addition

let score, activePlayer, gamePlaying

init()

function init () {
  score = 0
  activePlayer = 0
  gamePlaying = true
}

function nextPlayer () {
  activePlayer === 0 ? activePlayer = 1 : activePlayer = 0

  document.querySelector('.player-0-panel').classList.toggle('active')
  document.querySelector('.player-1-panel').classList.toggle('active')
}

// Check for win condition
function checkWin () {
  if (scores[activePlayer] > 30) {
    document.querySelector('#name-' + activePlayer).textContent = 'Winner'
    document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner')
    document.querySelector('.player-' + activePlayer + '-panel').classList.add('active')
    gamePlaying = false
  } else {
    nextPlayer()
  }
}

// Add to score
document.querySelector('.add0-1').addEventListener('click', function () {
  score += 1
  // checkWin()
  console.log('+1')
  document.querySelector('.score').textContent = score
})

document.querySelector('.add0-2').addEventListener('click', function () {
  roundScore += 2
  console.log('+2')
  document.querySelector('#score-0').textContent = roundScore
})

document.querySelector('.add0-3').addEventListener('click', function () {
  roundScore += 3
  console.log('+3')
  document.querySelector('#score-0').textContent = roundScore
})

document.querySelector('.add1-1').addEventListener('click', function () {
  roundScore += 1
  console.log('+1')
  document.querySelector('#score-1').textContent = roundScore
})

document.querySelector('.add1-2').addEventListener('click', function () {
  roundScore += 2
  console.log('+2')
  document.querySelector('#score-1').textContent = roundScore
})

document.querySelector('.add1-3').addEventListener('click', function () {
  roundScore += 3
  console.log('+3')
  document.querySelector('#score-1').textContent = roundScore
})

// Check for win condition

document.querySelector('.new-button').addEventListener('click', function () {
  init()
})
