// app


// interact with a cell
function cellInteraction() {
    console.log("cell clicked", this.id);

    let cell = document.getElementById(this.id);
    cell.style.backgroundColor = currentColour();


}

// create the initial board
function createBoard(size) {
    let Board = document.getElementById("DrawingArea");

    // rows
    for (let idRow = 0; idRow < size; idRow++) {
        let row = document.createElement("div");
        row.id = "row" + idRow;
        row.className = "row";
        Board.appendChild(row);

        // pixels in the row
        for (let id = 0; id < size; id++) {
            let cellID = "row" + idRow + "cell" + id;
            let cell = document.createElement("div");
            cell.id = cellID;
            cell.className = "pixel";
            row.appendChild(cell);

            cell.addEventListener("click", cellInteraction);
            
        }
    }
}

// update the board with a new size
function updateBoard(newSize) {
    let Board = document.getElementById("DrawingArea");
    Board.innerHTML = "";

    createBoard(newSize);

   
}

// execute code after the DOM has fully loaded
window.onload = function () {
    
    createBoard(8);
    
    
};

//change colour
function currentColour () {

    let colour = document.getElementById("colorPicker").value;
    return colour
}

//randomize colour

//change size 