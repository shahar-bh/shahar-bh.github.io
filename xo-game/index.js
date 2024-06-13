let curPlayer = 'X';

function whosTurn(btnID)
{   
    // put the X or the O on the square that was clicked
    const button = document.getElementById(btnID);
    button.disabled = true;
    button.innerHTML = curPlayer;

    const par = document.getElementById("turnP");
    if (!didWin()){
        // change the turns
        if (curPlayer === 'X') curPlayer = 'O';
        else curPlayer = 'X';

        // cahnge the paragraph according to who's turn is it
        par.innerHTML = "it's " + curPlayer + "'s turn!";   
    }

    // if the game is over
    else{
        par.innerHTML = curPlayer + " won!";
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
    
    if(
        // check the rows for a win
        (topLeft.innerHTML !== "" && topLeft.innerHTML === topMiddle.innerHTML && topLeft === topRight.innerHTML) ||
        (middleLeft.innerHTML !== "" && middleLeft.innerHTML === middleMiddle.innerHTML && middleLeft.innerHTML === middleRight.innerHTML) ||
        (bottomLeft.innerHTML !== "" && bottomLeft.innerHTML === bottomMiddle.innerHTML && bottomLeft.innerHTML === bottomRight.innerHTML) ||
        // check the columns for a win
        (topLeft.innerHTML !== "" && topLeft.innerHTML === middleLeft.innerHTML && topLeft.innerHTML === bottomLeft.innerHTML) ||
        (topMiddle.innerHTML !== "" && topMiddle.innerHTML === middleMiddle.innerHTML && topMiddle.innerHTML === bottomMiddle.innerHTML) ||
        (topRight.innerHTML !== "" && topRight.innerHTML === middleRight.innerHTML && topRight.innerHTML === bottomRight.innerHTML) ||

        // check the diagnols for a win
        (topLeft.innerHTML !== "" && topLeft.innerHTML === middleMiddle.innerHTML && topLeft.innerHTML === bottomRight.innerHTML) ||
        (topRight.innerHTML !== "" && topRight.innerHTML === middleMiddle.innerHTML && topRight.innerHTML === bottomLeft.innerHTML)
    )
    {
        // disable all of the buttons
        topLeft.disabled = true;
        topMiddle.disabled = true;
        topRight.disabled = true;
        middleLeft.disabled = true;
        middleMiddle.disabled = true;
        middleRight.disabled = true;
        bottomLeft.disabled = true;
        bottomMiddle.disabled = true;
        bottomRight.disabled = true;

        return true;
    }

    // else
    return false;

}