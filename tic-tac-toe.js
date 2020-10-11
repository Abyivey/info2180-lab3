var state =[""];
var counter =0;
function BoardMod(){
    var board = document.getElementById("board")
    var boardSect = board.getElementsByTagName("div");
    for(i=0; i<boardSect.length;i++){
        boardSect[i].className = "square";
    }

}
window.onload = function(){

    boardSetup();
    console.log(board);
    
}
