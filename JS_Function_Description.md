# Tic-Tac-Toe Game

## Features
- Single-player mode: Play with the logic implemented. 
- Interactive UI: Design for a smooth gaming experience.
- Win/Loss Detection: Automatically detects when a player wins or if the game ends in a draw.
- Game Reset: Auto-start a new game after each round.
- Cross-browser compatibility.

## JS Functions Description
- function placeXOrO() 							# Placement of an X or O in a square
-- function computersTurn() 					# Computer's turn - a random square being selected
--- Condition which allows our while loop 
to keep trying if a square is selected already

- function checkWinConditions() 				# Checks if there is a tie and win

- function disableClick() 						# This function makes our body element temporary unclickable

- function audio()								# Audio path

- function drawWinLine() 						# Draws win line
-- function animateLineDrawing() 				# Animates win line on the canvas
-- function clear() 							# Clears our canvas after our win line is drawn

- function resetGame() 							# Resets the game in a tie or a win
  