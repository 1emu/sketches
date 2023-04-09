// import {PI} from "../p5";

let ratio = 2;
let direction = 1
let depth = 1;
let angle = 45;

function setup(){
    let width = 800;
    let height = 800;
    frameRate(25);
    createCanvas(width,height);
}

function drawFractal(ratio, initPointX, initPointY, circleDiameter) {
    const rectWidth = circleDiameter/ratio;
    const rectHeight = 3/4 * circleDiameter;
    const innerCircleDiameter = circleDiameter/(ratio*ratio)*2
    fill(100-ratio*depth*direction, ratio*100*(-direction)+(direction*depth), ratio*200*(direction), ratio);
    ellipse(initPointX, initPointY, circleDiameter, circleDiameter);
    rect(initPointX, initPointY, rectWidth, rectHeight);
    ellipse(initPointX, initPointY, innerCircleDiameter, innerCircleDiameter);
}

function draw(){
    // background(220);
    let width = 800;
    const initPointX = 0;
    const initPointY = 0;
    depth = depth + (1 * direction)
    angle = angle + (1 * direction)
    drawRecursiveFractal(depth, ratio, initPointX, initPointY, width*(ratio));

    if (depth >= 50 ) {
        direction = -1;
    }
    if (depth <= -50 ) {
        direction = 1;
    }
    console.log('depth', depth)
}


function drawRecursiveFractal(depth, ratio, initPointX, initPointY, circleDiameter) {
    drawFractal(ratio, initPointX, initPointY, circleDiameter);

    if (depth > 0) {
        const innerCircleRadius = circleDiameter/(ratio*ratio)
        let nextStartX = initPointX + innerCircleRadius * cos(radians(angle));
        let nextStartY = initPointY + innerCircleRadius * sin(radians(angle));
        let nextDepth = depth/2*direction
        drawRecursiveFractal(nextDepth, ratio, nextStartX, nextStartY,
            innerCircleRadius*ratio);
    }
    if (depth < 0) {
        const innerCircleRadius = circleDiameter/(ratio*ratio)
        let nextStartX = initPointX + innerCircleRadius * cos(radians(angle));
        let nextStartY = initPointY + innerCircleRadius * sin(radians(angle));
        let nextDepth = depth/2
        drawRecursiveFractal(nextDepth, ratio, nextStartX, nextStartY,
            innerCircleRadius*ratio);
    }
}

