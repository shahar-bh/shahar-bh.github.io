let curPlayer = 'X';

function whosTurn(btnID)
{   
    // put the X or the O on the square that was clicked
    const button = document.getElementById(btnID);
    button.disabled = true;
    button.firstChild.textContent = curPlayer;

    const par = document.getElementById("turnP");
    if (!didWin()){
        // normal turn
        if (!isTie()){
            // change the turns
            if (curPlayer === 'X') curPlayer = 'O';
            else curPlayer = 'X';

            // cahnge the paragraph according to who's turn is it
            par.textContent = "It's " + curPlayer + "'s turn!";   
        }

        // it's a tie
        else{
            par.textContent = "No one won, it's a tie!";  
        }
    }

    // if somone won
    else{
        par.textContent = curPlayer + " won!";
    }
}


function didWin()
{
    const topLeft = document.getElementById("topLeft");
    const topMiddle = document.getElementById("topMiddle");
    const topRight = document.getElementById("topRight");

    const middleLeft = document.getElementById("middleLeft");
    const middleMiddle = document.getElementById("middleMiddle");
    const middleRight = document.getElementById("middleRight");

    const bottomLeft = document.getElementById("bottomLeft");
    const bottomMiddle = document.getElementById("bottomMiddle");
    const bottomRight = document.getElementById("bottomRight");

    let won = false;

    // win in the top row
    if (topLeft.textContent !== "" && topLeft.textContent === topMiddle.textContent && topLeft.textContent === topRight.textContent){
        topLeft.firstChild.classList.add("animated");
        topMiddle.firstChild.classList.add("animated");
        topRight.firstChild.classList.add("animated");
        won = true;
    }
    // win in the middle row
    if (middleLeft.textContent !== "" && middleLeft.textContent === middleMiddle.textContent && middleLeft.textContent === middleRight.textContent){
        middleLeft.firstChild.classList.add("animated");
        middleMiddle.firstChild.classList.add("animated");
        middleRight.firstChild.classList.add("animated");
        won = true;
    }
    // win in the bottom row
    if (bottomLeft.textContent !== "" && bottomLeft.textContent === bottomMiddle.textContent && bottomLeft.textContent === bottomRight.textContent){
        bottomLeft.firstChild.classList.add("animated");
        bottomMiddle.firstChild.classList.add("animated");
        bottomRight.firstChild.classList.add("animated");
        won = true;
    }
    // win in the left column
    if (topLeft.textContent !== "" && topLeft.textContent === middleLeft.textContent && topLeft.textContent === bottomLeft.textContent){
        topLeft.firstChild.classList.add("animated");
        middleLeft.firstChild.classList.add("animated");
        bottomLeft.firstChild.classList.add("animated");
    }
    // win in the middle column
    if (topMiddle.textContent !== "" && topMiddle.textContent === middleMiddle.textContent && topMiddle.textContent === bottomMiddle.textContent){
        topMiddle.firstChild.classList.add("animated");
        middleMiddle.firstChild.classList.add("animated");
        bottomMiddle.firstChild.classList.add("animated");
        won = true;
    }
    // win in the right column
    if (topRight.textContent !== "" && topRight.textContent === middleRight.textContent && topRight.textContent === bottomRight.textContent){
        topRight.firstChild.classList.add("animated");
        middleRight.firstChild.classList.add("animated");
        bottomRight.firstChild.classList.add("animated");
        won = true;
    }
    // win in the main diagonal
    if (topLeft.textContent !== "" && topLeft.textContent === middleMiddle.textContent && topLeft.textContent === bottomRight.textContent){
        topLeft.firstChild.classList.add("animated");
        middleMiddle.firstChild.classList.add("animated");
        bottomRight.firstChild.classList.add("animated");
        won = true;
    }
    // win in the cross diagonal
    if (topRight.textContent !== "" && topRight.textContent === middleMiddle.textContent && topRight.textContent === bottomLeft.textContent){
        topRight.firstChild.classList.add("animated");
        middleMiddle.firstChild.classList.add("animated");
        bottomLeft.firstChild.classList.add("animated");
        won = true;
    }

    if(won){
        // disable all of the buttons
        document.querySelectorAll(".table button").forEach(btn => btn.disabled=true)
    }
    return won;
}

function isTie(){
    return(topLeft.textContent !== "" && topMiddle.textContent !== "" && topRight.textContent !== "" &&
        middleLeft.textContent !== "" && middleMiddle.textContent !== "" && middleRight.textContent !== "" &&
        bottomLeft.textContent !== "" && bottomMiddle.textContent !== "" && bottomRight.textContent !== "");
}