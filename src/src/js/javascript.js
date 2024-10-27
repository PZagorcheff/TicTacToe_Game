
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
		
        //Changing the active player.
        if (activePlayer === 'X') {
            activePlayer = 'O';
        } else {
            activePlayer = 'X';
        }
		
        //Plays placement sound.
        audio('./assets/audio/turn_place.wav');
        if (activePlayer === 'O') {
			...
        }
        return true;
    }
    
    function computersTurn() {
        let success = false;
        let pickASquare;
        
        while(!success) {
            pickASquare = String(Math.floor(Math.random() * 9));
            if (placeXOrO(pickASquare)) {
                placeXOrO(pickASquare);
                success = true;
            };
        }
    }
}