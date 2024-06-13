let curPlayer = 'X';

function whosTurn(btnID)
{   
    // put the X or the O on the square that was clicked
    const button = document.getElementById(btnID);
    button.disabled = true;
    button.innerHTML = curPlayer;

    const par = document.getElementById("turnP");
    if (!didWin){
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
    const topLeft = document.getElementById("topLeft").innerHTML;
    const topMiddle = document.getElementById("topMiddle").innerHTML;
    const topRight = document.getElementById("topRight").innerHTML;

    const middleLeft = document.getElementById("middleLeft").innerHTML;
    const middleMiddle = document.getElementById("middleMiddle").innerHTML;
    const middleRight = document.getElementById("middleRight").innerHTML;

    const bottomLeft = document.getElementById("bottomLeft").innerHTML;
    const bottomMiddle = document.getElementById("bottomMiddle").innerHTML;
    const bottomRight = document.getElementById("bottomRight").innerHTML;
    
    if(
        // check the rows for a win
        (topLeft !== "" && topLeft === topMiddle && topLeft === topRight) ||
        (middleLeft !== "" && middleLeft === middleMiddle && middleLeft === middleRight) ||
        (bottomLeft !== "" && bottomLeft === bottomMiddle && bottomLeft === bottomRight) ||
        // check the columns for a win
        (topLeft !== "" && topLeft === middleLeft && topLeft === bottomLeft) ||
        (topMiddle !== "" && topMiddle === middleMiddle && topMiddle === bottomMiddle) ||
        (topRight !== "" && topRight === middleRight && topRight === bottomRight) ||

        // check the diagnols for a win
        (topLeft !== "" && topLeft === middleMiddle && topLeft === bottomRight) ||
        (topRight !== "" && topRight === middleMiddle && topRight === bottomLeft)
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