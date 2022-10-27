const squareContainer = document.getElementById("container");
function generateSketch() {
    let squareNumber   =   prompt('How many squares are there in your grid?')
    while (squareContainer.firstChild) {
            squareContainer.removeChild(squareContainer.firstChild)
        };
    for (let i = 0;i<squareNumber;i++) {
        let square = document.createElement('div');
        square.className += "square";
        squareContainer.appendChild(square);
        square.onmouseover  =   function() {
            square.classList.add('active')
        }
    }
}
