
let activePlayer = 'X';
let selectedSquares = [];

function placeXOrO(squareNumber) {

    if (!selectedSquares.some(element => element.includes(squareNumber))) {
        let select = document.getElementById(squareNumber);
		
        //Checks who's turn it is
        if (activePlayer === 'X') {
            select.style.backgroundImage = 'url("assets/images/x.png")';
        } else {
            select.style.backgroundImage = 'url("assets/images/o.png")';
        }
        selectedSquares.push(squareNumber + activePlayer);
		checkWinConditions(); 
		
        //Changing the active player.
        if (activePlayer === 'X') {
            activePlayer = 'O';
        } else {
            activePlayer = 'X';
        }
		
        //Plays placement sound.
        audio('./assets/audio/turn_place.wav');
        if (activePlayer === 'O') {
			disableClick();
            setTimeout(function() {computersTurn(); }, 1000);
        }
        return true;
    }
    //Random square selected.
    function computersTurn() {
        let success = false;
        let pickASquare;
		
        //While loop checks if a square is selected.
        while(!success) {
            pickASquare = String(Math.floor(Math.random() * 9));
            if (placeXOrO(pickASquare)) {
                placeXOrO(pickASquare);
                success = true;
            };
        }
    }
}

//Мakes our body element temporary unclickable.
function disableClick() {
    body.style.pointerEvents = 'none';
    setTimeout(function() {body.style.pointerEvents = 'auto';}, 1000);
}