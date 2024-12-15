function setup() {
    createCanvas(800, 800);
}

function draw() {
    if (mouseIsPressed) {  // Si apretamos el botón izquierdo
        noFill(); // Relleno cuando se hace click
      strokeWeight(25);
    } else { // Si no apretamos 
        noFill(); // Relleno cuando no se hace click
    }
    ellipse(mouseX, mouseY, 80, 80);
}

