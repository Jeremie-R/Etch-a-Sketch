// app


// interact with a cell
function cellInteraction() {
    // console.log("cell clicked", this.id); //to see all click

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

            // add event listeners for both mousedown and mousemove
            cell.addEventListener("mousedown", function() {
                isMouseDown = true;
                cellInteraction.call(this); 
            });

            cell.addEventListener("mousemove", function() {
                if (isMouseDown) {
                    cellInteraction.call(this); 
                }
            });

            cell.addEventListener("mouseup", function() {
                isMouseDown = false;
            });



        }
    }
}

// collect size input
let slider = document.getElementById("sizeSlider");
slider.addEventListener("click", sliderClicked);

function sliderClicked() {
    
    console.log(slider.value);
    updateBoard(slider.value);

    document.getElementById("currentSize").innerHTML = String(slider.value) + " x " + String(slider.value);
}

// update+clean the board with a new size
function updateBoard(newSize) {

    let Board = document.getElementById("DrawingArea");
    Board.innerHTML = "";

    createBoard(newSize);

   
}

// execute code after the DOM has fully loaded
window.onload = function () {
    
    let boardSize = slider.value;
    createBoard(boardSize);
    
    
};

//change colour
function currentColour () {

    let colour = document.getElementById("colorPicker").value;
    return colour;
}

//randomize colour

//clear board  

let clearButton = document.getElementById("clear");
clearButton.addEventListener("click", clearClicked);

function clearClicked() { updateBoard(slider.value) };