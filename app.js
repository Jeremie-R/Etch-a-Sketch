// app


// interact with a cell
function cellInteraction() {
    // console.log("cell clicked", this.id); //to see all click

    let cell = document.getElementById(this.id);

    console.log(colourMode);
    if (colourMode = "rainbow") {
        cell.style.backgroundColor = randomColour();

    } else {
        cell.style.backgroundColor = currentColour();
    }

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

    let colourMode = "solid";
    solidClicked();
    
};

//change colour
function currentColour () {

    let colour = document.getElementById("colorPicker").value;
    return colour;
}

//randomize colour mode
function randomColour () {
    let colour = "#" + Math.floor(Math.random()*16777215).toString(16);
    document.getElementById("colorPicker").value = colour;
    return colour;
} 

//input for random colour
let solidButton = document.getElementById("solid");
solidButton.addEventListener("click", solidClicked);

let rainbowButton = document.getElementById("rainbow");
rainbowButton.addEventListener("click", rainbowClicked);




function solidClicked() {
    colourMode = "solid";
    console.log(colourMode);

    solidButton.style.backgroundColor = "#000000";
    solidButton.style.color = "#ffffff";

    rainbowButton.style.backgroundColor = "#EDEDED";
    rainbowButton.style.color = "#000000";
}

function rainbowClicked() {
    colourMode = "rainbow";
    

    rainbowButton.style.backgroundColor = "#000000";
    rainbowButton.style.color = "#ffffff";

    solidButton.style.backgroundColor = "#EDEDED";
    solidButton.style.color = "#000000";
}



//clear board  

let clearButton = document.getElementById("clear");
clearButton.addEventListener("click", clearClicked);

function clearClicked() { updateBoard(slider.value) };