function setup(){
    createCanvas(400, 400);
    noStroke();
    colorMode(HSB, 400);
    for (let i = 0; i < 400; i++) {
        for (let j = 0; j < 400; j++) {
            stroke(i, j, 400);
            point(i, j);
        }
    }
    console.log('width', width)
}

