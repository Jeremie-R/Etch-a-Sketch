// app


//build the sketch area

createBoard(8);

function createBoard(a) {
    let Board = document.getElementById("DrawingArea");

    
    //goal is to create a list of div that will be the pixels
    for (let id = 0; id < (a*a); id++) {

        Board.innerHTML += "<div id="+id+" class='pixel'></div>";
        
    };



};

//interact with a cell

//change colour

//randomize colour

//change size 