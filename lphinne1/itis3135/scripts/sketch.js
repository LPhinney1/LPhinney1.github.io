function setup() {
    var canvas = createCanvas(windowWidth - 100, windowHeight - 100);
    canvas.parent('sketch-canvas');
    background('#FAD8EF');
}
function draw() {
    if (mouseIsPressed) 
    { fill('#1C1D21');} 
    else 
    { fill('#FAD8EF'); }
    noStroke();
    square(mouseX, mouseY, 24);
}
