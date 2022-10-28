const squareContainer = document.getElementById("container");

function generateSketch() {
    let squareNumber   =   prompt('How many squares would you like?')
    while (squareContainer.firstChild) {
            squareContainer.removeChild(squareContainer.firstChild)
        };
    for (let i = 0;i<squareNumber;i++) {
        function randomRgbColor () {
        let r = Math.floor(Math.random() * 255+1);
        let g = Math.floor(Math.random() * 255+1);
        let b = Math.floor(Math.random() * 255+1);
        return "rgb(" + r + ',' + g + ',' + b+ ")"
        }
        let square = document.createElement('div');
        square.className += "square";
        squareContainer.appendChild(square);
        square.onmouseover  =   function() {
            square.classList.add('active');
            let color = randomRgbColor();
            square.style.background    =   color;
        }
    }
}