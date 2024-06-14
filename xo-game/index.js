let curPlayer = 'X';

function whosTurn(btnID)
{   
    // put the X or the O on the square that was clicked
    const button = document.getElementById(btnID);
    button.disabled = true;
    button.textContent = curPlayer;

    const par = document.getElementById("turnP");
    if (!didWin()){
        // change the turns
        if (curPlayer === 'X') curPlayer = 'O';
        else curPlayer = 'X';

        // cahnge the paragraph according to who's turn is it
        par.textContent = "it's " + curPlayer + "'s turn!";   
    }

    // if the game is over
    else{
        par.textContent = curPlayer + " won!";
    }

    button.classList.add("animated")
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
        (topLeft.textContent !== "" && topLeft.textContent === topMiddle.textContent && topLeft === topRight.textContent) ||
        (middleLeft.textContent !== "" && middleLeft.textContent === middleMiddle.textContent && middleLeft.textContent === middleRight.textContent) ||
        (bottomLeft.textContent !== "" && bottomLeft.textContent === bottomMiddle.textContent && bottomLeft.textContent === bottomRight.textContent) ||
        // check the columns for a win
        (topLeft.textContent !== "" && topLeft.textContent === middleLeft.textContent && topLeft.textContent === bottomLeft.textContent) ||
        (topMiddle.textContent !== "" && topMiddle.textContent === middleMiddle.textContent && topMiddle.textContent === bottomMiddle.textContent) ||
        (topRight.textContent !== "" && topRight.textContent === middleRight.textContent && topRight.textContent === bottomRight.textContent) ||

        // check the diagnols for a win
        (topLeft.textContent !== "" && topLeft.textContent === middleMiddle.textContent && topLeft.textContent === bottomRight.textContent) ||
        (topRight.textContent !== "" && topRight.textContent === middleMiddle.textContent && topRight.textContent === bottomLeft.textContent)
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