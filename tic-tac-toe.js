var win = 0;
var w = "";
var state =[""];
var total = [["","",""],["","",""],["","",""]];


window.onload = function(){

    boardMod();
    board.addEventListener("mouseover", hover);
    board.addEventListener("click",makePlay);
    game.addEventListener("click",reset);
}
// the layout of board
function boardMod(){

    var game = document.getElementById("game");
    var board = document.getElementById("board");
    var boardSect = board.getElementsByTagName("div");

    for(i=0; i<boardSect.length;i++){
        boardSect[i].className = "square";
    }
}


// highlights the cells
function hover (e){
    var board = document.getElementById("board");
    var boardSect = board.getElementsByTagName("div");

    switch (e.target.classList.contains("square")){
        case true:
            for(i=0; i<boardSect.length;i++){
                boardSect[i].classList.remove("hover");
            }
            default:               
                e.target.classList.add("hover");
        }
            
    }


// Check rows for win
function rowWin(){
    let sum=0;
    for(i = 0; i <3; i++){
        for(j = 0; j <3; j++){
            switch(total[i][j].textContent){
                case "X":
                    sum+=1;
                    break;
                case "O":
                    sum+=4;


            }
           
        }
        switch (sum){
            case 12:
                win=1;
                return "O";
            case 3:
                win=1;
                return "X";     

        }
        sum = 0;
    }
    return "";
}

//checks column for win

function columnWin(){
    let sum=0;
    for(i = 0; i <3; i++){
        for(j = 0; j <3; j++){
            switch(total[i][j].textContent){
                case "X":
                    sum+=1;
                    break;
                case "O":
                    sum+=4;
            }
           
        }
        switch (sum){
            case 12:
                win=1;
                return "O";
            case 3:
                win=1;
                return "X";     

        }
        sum = 0;
    }
    return "";
}

// check diagonily for win
function diagonalWin(){
    if(total[0][0].textContent== total[1][1].textContent && total[1][1].textContent == total[2][2].textContent){
        if(total[0][0].textContent == "X"){
            win = 1;
            return "X";
        }
        else if(total[0][0].textContent == "O"){
            win = 1;
            return "O";
        }
    }
    else if(total[0][2].textContent == total[1][1].textContent && total[1][1].textContent == total[2][0].textContent){
        if(total[0][2].textContent == "X"){
            win = 1;
            return "X";
        }
        else if(total[0][2].textContent == "O"){
            win = 1;
            return "O";
        }
    }
    return "";

}


function Win(){
     
    if(win == 0){
        w = rowWin();
        if(w == ""){
            w = columnWin();
        }
        if(w == ""){
            w = diagonalWin();
        }

        if(win == 1){
            let status = document.getElementById("status");
            if(w == "X"){
                status.textContent = "Congratulations! X is the Winner!";
            }else{
                status.textContent = "Congratulations! O is the Winner!";
            }
            status.classList.add("you-won");
        }
            
    }
}

function makePlay(e){

    var board = document.getElementById("board")
    var boardSect = board.getElementsByTagName("div");
    let l = 0;

    console.log(e.target.nodeName);
    if(e.target.classList.contains("square") == true){l

        if(state[0] == ""){
            state[0] = "X";
            e.target.textContent = "X";
            e.target.classList.add("X");

        }else if(state[0] == "O" && e.target.textContent == ""){
            state[0] = "X";
            e.target.textContent = "X";
            e.target.classList.add("X");

        }else if(state[0]== "X" && e.target.textContent == ""){
            state[0] = "O";
            e.target.textContent = "O";
            e.target.classList.add("O");
        }

        for(let i = 0; i <3; i++){
            for(let j = 0; j <3; j++){
                total[i][j] = boardSect[l];
                l++;
            }
        }

        Win();
    }
}

function reset(){
    if(e.target.nodeName === 'BUTTON'){
        var game = document.getElementById("game");
    var board = document.getElementById("board");
    var boardSect = board.getElementsByTagName("div");

    for(i=0; i<boardSect.length;i++){
        boardSect[i].className = "square";
    }

    }
    
}



