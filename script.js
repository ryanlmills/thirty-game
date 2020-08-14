/*
Rules:
- On each player's turn, they add 1, 2, or 3 to their overall score, starting at zero
- The first player forced to count to zero loses
*/

// Score addition

let roundScore = 0

document.querySelector('.add0-1').addEventListener('click', function () {
  roundScore += 1
  nextPlayer()
  console.log('+1')
})

document.querySelector('.add0-2').addEventListener('click', function () {
  roundScore += 2
  nextPlayer()
  console.log('+2')
})

document.querySelector('.add0-3').addEventListener('click', function () {
  roundScore += 3
  nextPlayer()
  console.log('+3')
})

document.querySelector('.add1-1').addEventListener('click', function () {
  roundScore += 1
  nextPlayer()
  console.log('+1')
})

document.querySelector('.add1-2').addEventListener('click', function () {
  roundScore += 2
  nextPlayer()
  console.log('+2')
})

document.querySelector('.add1-3').addEventListener('click', function () {
  roundScore += 3
  nextPlayer()
  console.log('+3')
})

function nextPlayer () {
  console.log('Next player working')
  console.log(roundScore)
}
