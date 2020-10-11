var state =[""];
var counter =0;
function BoardMod(){
    var board = document.getElementById("board")
    var boardSections = board.getElementsByTagName("div");
    for(i=0; i<boardSections.length;i++){
        boardSections[i].className = "square";
    }

}

window.onload = function(){

    BoardMod();
    console.log(board);
    
}
