
let cx = -50;
let cz = 250;
let wood;

function setup() {
    createCanvas(500, 500, WEBGL);
    wood = loadImage('images/seamless-wood.jpg');
}

function draw() {
    background(205, 102, 94);
    angleMode(RADIANS);
    let top_width = 210;
    let top_height = 16;
    let top_depth = 12;
    texture(wood);
    noStroke();

    let left_height = 140;
    //   rotateZ(frameCount * 0.01);
    rotateX(frameCount * 0.01);
    rotateY(frameCount * 0.01);

    // the top part of the chair
    push();
    translate(0, -160, -300);
    for (let i = 0; i < 7; i++) {
        box(top_width - i * 28, top_height - i * 1.6, top_depth - i * 5); // width, height, depth
        if (i === 0) {
            push();
            translate(-(top_width) / 2 - 10.3, 97, 0);
            box(top_height * 1.3, top_width, top_depth - i * 4);
            translate(top_width + 19.8, 0, 0);
            box(top_height * 1.3, top_width, top_depth - i * 4);
            pop();
        } else if (i === 1) {
            push();
            translate(-(top_width) / 2 + 10, 85.5, 0);
            box(top_height, top_width - 24, top_depth - i * 4);
            translate(top_width - 20, 0, 0);
            box(top_height, top_width - 24, top_depth - i * 4);
            pop();
        } else if (i === 2) {
            push();
            translate(-(top_width) / 2 + 25, 74.5, 0);
            box(top_height * 0.9, top_width - 49.5, top_depth - i * 4);
            translate(top_width - 51, 0, 0);
            box(top_height * 0.9, top_width - 49.5, top_depth - i * 4);
            pop();
        } else if (i === 3) {
            push();
            translate(-(top_width) / 2 + 39, 62, 0);
            box(top_height * 0.83, top_width - 73, top_depth - i * 4);
            translate(top_width - 79, 0, 0);
            box(top_height * 0.83, top_width - 73, top_depth - i * 4);
            pop();
        } else if (i === 4) {
            push();
            translate(-(top_width) / 2 + 52.5, 51, 0);
            box(top_height * 0.86, top_width - 98.5, top_depth - i * 4);
            translate(top_width - 106, 0, 0);
            box(top_height * 0.86, top_width - 98.5, top_depth - i * 4);
            pop();
        } else if (i === 5) {
            push();
            translate(-(top_width) / 2 + 67.4, 39.5, 0);
            box(top_height * 0.9, top_width - 124, top_depth - i * 4);
            translate(top_width - 135, 0, 0);
            box(top_height * 0.9, top_width - 124, top_depth - i * 4);
            pop();
        } else if (i === 6) {
            push();
            translate(-(top_width) / 2 + 82, 28.9, 0);
            box(top_height * 0.87, top_width - 148, top_depth - i * 4);
            translate(top_width - 164, 0, 0);
            box(top_height * 0.87, top_width - 148, top_depth - i * 4);
            pop();
        }
        translate(0, 25 * 0.95, 0);
    }
    pop();

    // the sitting part of the chair
    push();
    translate(0, 30, -300);
    rotateX(PI / 2);
    for (let i = 0; i < 7; i++) {
        box(top_width - i * 28, top_height - i * 1.6, top_depth - i * 5); // width, height, depth
        if (i === 0) {
            push();
            translate(-(top_width) / 2 - 10.3, 97, 0);
            box(top_height * 1.3, top_width, top_depth - i * 4);
            translate(top_width + 19.8, 0, 0);
            box(top_height * 1.3, top_width, top_depth - i * 4);
            pop();
        } else if (i === 1) {
            push();
            translate(-(top_width) / 2 + 10, 85.5, 0);
            box(top_height, top_width - 24, top_depth - i * 4);
            translate(top_width - 20, 0, 0);
            box(top_height, top_width - 24, top_depth - i * 4);
            pop();
        } else if (i === 2) {
            push();
            translate(-(top_width) / 2 + 25, 74.5, 0);
            box(top_height * 0.9, top_width - 49.5, top_depth - i * 4);
            translate(top_width - 51, 0, 0);
            box(top_height * 0.9, top_width - 49.5, top_depth - i * 4);
            pop();
        } else if (i === 3) {
            push();
            translate(-(top_width) / 2 + 39, 62, 0);
            box(top_height * 0.83, top_width - 73, top_depth - i * 4);
            translate(top_width - 79, 0, 0);
            box(top_height * 0.83, top_width - 73, top_depth - i * 4);
            pop();
        } else if (i === 4) {
            push();
            translate(-(top_width) / 2 + 52.5, 51, 0);
            box(top_height * 0.86, top_width - 98.5, top_depth - i * 4);
            translate(top_width - 106, 0, 0);
            box(top_height * 0.86, top_width - 98.5, top_depth - i * 4);
            pop();
        } else if (i === 5) {
            push();
            translate(-(top_width) / 2 + 67.4, 39.5, 0);
            box(top_height * 0.9, top_width - 124, top_depth - i * 4);
            translate(top_width - 135, 0, 0);
            box(top_height * 0.9, top_width - 124, top_depth - i * 4);
            pop();
        } else if (i === 6) {
            push();
            translate(-(top_width) / 2 + 82, 28.9, 0);
            box(top_height * 0.87, top_width - 148, top_depth - i * 4);
            translate(top_width - 164, 0, 0);
            box(top_height * 0.87, top_width - 148, top_depth - i * 4);
            translate (-20, 23, 0);
            box(top_width+20, top_height, top_depth);
            pop();
        }
        translate(0, 25 * 0.95, 0);
    }
    pop();

    // the legs of the chair
    push();
    translate(-115, 108, -300);
    box(top_height, 150, top_depth*1.6);
    translate(230, 0, 0);
    box(top_height, 150, top_depth*1.6);
    pop();

    push();
    translate(-115, 108, -106);
    box(top_height, 150, top_depth*1.6);
    translate(230, 0, 0);
    box(top_height, 150, top_depth*1.6);
    pop();


}

