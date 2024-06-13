let isX = true;
function whosTurn(btnID){
    const button = document.getElementById(btnID);
    button.disabled = true;

    const par = document.getElementById("turnP");
    isX = !isX;
    if (isX){
        par.innerHTML = "It's X's turn!";
    }
    else if (!isX){
        par.innerHTML = "It's O's turn!";
    }
}