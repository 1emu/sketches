// import {PI} from "../p5";

let ratio = 2;
let direction = 1
let depth = 1;
let angle = 45;
let x = 400;
let y = 400;
const width = 900;
const height = 900;
let directionX = 1
let directionY = 1
let opp = 10


function setup(){
    frameRate(1000);
    createCanvas(width, height);
}


function draw(){
    // background(255);
    x += 1.1 * directionX * 20
    y -= 2.2 * directionY * 20
    opp += 1

    ellipse(x, y, 50, 50);
    ellipse(x+100, y, 50, 50);
    fill(255, 255,255, 250);
    ellipse(x+50, y+50, 100, 100);
    fill(0, 0,0, 255);
    ellipse(x+50, y+70, 25, 25);

    if(y < 50 || y > 750){
        directionY = -directionY
    }
    if(x < 50 || x > 750){
        directionX = -directionX
    }

    let red = (100 + directionX * x)
    let green =  (100 + directionY * y)
    let blue = (100 + directionY * x)

    fill(red, green, blue, opp);

}


