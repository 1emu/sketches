let red, green, blue, x, y;
let previousX, previousY;
let extraCanvas;

function setup() {
    createCanvas(windowWidth, windowHeight);
    extraCanvas = createGraphics(windowWidth, windowHeight)
    background(200, 255, 100, 150)
    noStroke();
    frameRate(10)
}

function draw() {
    image(extraCanvas, 0, 0)
    extraCanvas.noStroke()
    extraCanvas.fill(red, green, blue / 10, 5)
    extraCanvas.rect(x - 5, y, 5, y)
    // extraCanvas.stroke(red, green, blue, 10)
    // extraCanvas.line(x, 2 * y + 200, width / 2, height / 2)

    x = random(width)
    y = random(height / 2) + 100
    red = random(255) / 20
    green = random(255) - (.6 * x) / x
    blue = (random(255) - red - green) / 200
    stroke(red, green, blue, 10)
    // line(previousX, previousY, width / 2, height / 2)
    noStroke()
    fill(red, green, blue, 100)
    for (let i = 100; i < y; i = i + 10) {
        triangle(x, i, x + 20, i + 10, x, i - 20)
        triangle(x, i, x - 20, i + 10, x, i - 20)
    }
    fill(red, green, blue, 50)


    previousX = x
    previousY = y
}

