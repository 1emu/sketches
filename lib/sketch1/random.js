let red, green, blue, x, y;
let previousX, previousY;

function setup() {
    createCanvas(windowWidth, windowHeight);
    background(255)
    noStroke();
    frameRate(10)
}

function draw() {
    x = random(width)
    y = random(height)
    red = random(255)
    green = random(255)
    blue = random(255) - red - green
    stroke(red, green, blue, 10)
    line(previousX, previousY, width / 2, height / 2)
    noStroke()
    fill(red, green, blue, 127)
    circle(x, y, 24)
    fill(red, green, blue, 50)
    ellipse(x, y, x / y, y * x, 24)
    previousX = x
    previousY = y
}

