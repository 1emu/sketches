let red, green, blue, x, y, wormX;
let circleX, circleY;
let extraCanvas;
let padding = 25
let circleWidth = 25;
let spacialY;
let spacialX;

function setup() {
    createCanvas(windowWidth, windowHeight);
    extraCanvas = createGraphics(windowWidth, windowHeight)
    background(0)
    noStroke();
    frameRate(10);
    x = 0
    wormX = 0
    spacialY = random(10);
    spacialX = random(10);

    // / Stars
    extraCanvas2 = createGraphics(windowWidth, windowHeight)
    // let number = random(40)
    // for (let i = 0; i <= windowWidth; i += 50) {
    //     for (let j = 0; j <= windowHeight; j += 50) {
    //         extraCanvas2.noStroke();
    //         extraCanvas2.fill(255, 255, 255, 150);
    //         extraCanvas2.ellipse(i + random(number), j - number, random(2), random(3));
    //     }
    // }
}

function circleColumn(columnStartX, columnWidth, columnHeight, red, green, blue) {
    for (let i = columnStartX; i < columnStartX + columnWidth; i += (circleWidth * 2)) {
        for (let j = (windowHeight - padding); j > (windowHeight - columnHeight); j -= (circleWidth * 2)) {
            fill(red, green, blue, 255);
            ellipse(i, j, circleWidth, circleWidth)
        }
    }
}

function getSineWaveY(amplitude, i) {
    return amplitude * sin(radians(i)) + (windowHeight) / 2;
}

function draw() {
    background(0);
    noStroke()


    stroke(200, 0, 255);
    const amplitude = windowHeight / 5;

    x += 10
    for (let i = -100; i < windowWidth; i++) {
        let sineWaveY = getSineWaveY(amplitude, i);

        // Top Shockwave
        stroke(255, 255, 255, 100)
        line(i, sineWaveY - 150, i + x, 0);

        // Bottom Shockwave
        stroke(255, 255, 255, 100)
        line(i, sineWaveY + 175, i + x, windowHeight);

        // Cover
        extraCanvas.stroke(255, 255, 255, 255)
        extraCanvas.line(i, sineWaveY - 150, i, 0);
        extraCanvas.line(i, sineWaveY + 175, i, windowHeight);
        extraCanvas.stroke(0, 0, 0, 255)
    }

    // Worm
    wormX += 10;
    noStroke()
    fill(0, 0, 10, 255);
    circleWidth = amplitude / 10
    let i = -500
    while (i < windowWidth + 500) {
        let circleY = getSineWaveY(amplitude + 125, i + wormX);
        let abs1 = abs((windowHeight / 2) - circleY);
        fill(255, 255, 255, map(abs1, 0, 300, 0, 255));
        if (tan(i) > 0) {
            ellipse(i + wormX + 20, circleY, sin(i) * circleWidth, sin(i) * circleWidth)
        }
        i += circleWidth
    }
    // if (wormX > windowWidth + 500) wormX = 0;

    noFill()

    // Canvas Placement
    image(extraCanvas2, 0, 0)
    image(extraCanvas, 0, 0)
    extraCanvas.noStroke()
    extraCanvas.fill(0, 0, 0, 2555)
}

