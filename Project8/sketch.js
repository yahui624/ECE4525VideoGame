
let cx = -50;
let cz = 250;
let wood;

function setup() {
    createCanvas(400, 400, WEBGL);
    wood = loadImage('images/seamless-wood.jpg');
}

function draw() {
    background(205, 102, 94);
    angleMode(RADIANS);
    let top_width = 210;
    let top_height = 16;
    let top_depth = 12;
    texture(wood);

    let left_height = 140;
    //   rotateZ(frameCount * 0.01);
    // rotateX(frameCount * 0.01);
    // rotateY(frameCount * 0.01);

    push();
    translate(0, -160, -300);


    for (let i = 0; i < 6; i++) {
        box(top_width - i * 27, top_height - i * 1.2, top_depth - i * 4); // width, height, depth
        if (i === 0) {
            push();
            translate(-(top_width - i * 27) / 2, 8, 0);
            box (top_height-i*1.2, left_height, top_depth - i*4);
            pop();
        }
        translate(0, 24 * 0.95, 0);
    }
    pop();

}

