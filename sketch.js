// import {PI} from "./lib/p5";

function setup(){
    let width = 800;
    let height = 800;
    createCanvas(width,height);
}

function draw(){
    background(220);

    const ratio = 2;
    const initPointX = width/ ratio;
    const initPointY = height/ratio;
    const circleRadius = 200;
    ellipse(initPointX, initPointY, circleRadius, circleRadius);
    const rectWidth = circleRadius/2;
    const rectHeight = 150; //(1/PI) * circleRadius;
    rect(initPointX, initPointX, rectWidth, rectHeight);
    ellipse(initPointX, initPointY, circleRadius/ratio, circleRadius/ratio);

    // ellipse(width/2 + innerHeight, height/2 + innerWidth, 200, 200);
    // rect(200, 200, 100, 150);
    // ellipse(width/2, height/2, 100, 100);
}
