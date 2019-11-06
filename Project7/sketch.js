// Project 6 -- Yahui Zhao 10/25/2019
// Lion King Simba and Bumblebee

let gravity;
let fountains = [];
let simba;
let bee;
function preload() {
    gravity = createVector(0, 0.02);
    simba = new simba_Obj(290, 300);
    bee = new bee_Obj(200, 170);

}

function setup() {
  createCanvas(400,400);
}

function set_Fountains() {
    push();
    translate(200, 200);
    for (let i=0; i<=10; i++) {
        rotate(PI/3);
        fountains.push(new fountain_Obj(80, 80));
        fountains[i].execute();
    }
    pop();
}

function draw() {
    background(135,135,246);
    angleMode(RADIANS);
    set_Fountains();

    bee.draw();
    bee.move_work();
    simba.draw();
    simba.move();

}
