// app


//build the sketch area

createBoard(8);
let colour = "#000000"

function createBoard(a) {
    let Board = document.getElementById("DrawingArea");

    
    //rows
    for (let idRow = 0; idRow < (a); idRow++) {

        Board.innerHTML += "<div id=row"+idRow+" class='row'></div>";
        let Row = document.getElementById("row"+idRow);

        //pixel in the row
        for (let id = 0; id < (a); id++) {
            let cellID = "row"+idRow+"cell"+id;
            Row.innerHTML += "<div id="+cellID+" class='pixel'></div>";
            cellInteraction(cellID);

        };

    
    };


};

//interact with a cell

function cellInteraction(cellID) {
    
    let cell = document.getElementById(cellID);
    
    cell.addEventListener("click", click(cell, cellID));
    
}

function click(cell, cellID) {
    console.log(cellID);
    cell.style.backgroundColor = "red";
    cell.style.opacity = "0.5";
}

//change colour

//randomize colour

//change size 