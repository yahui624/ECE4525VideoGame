function bone_Obj(x, y) {
    this.x=x;
    this.y=y;
    this.showImage= true;

    this.draw = function () {
        push();
        noStroke();
        fill(79, 191, 155);
        translate(this.x + 4, this.y);
        ellipse(0, 0, 5, 5);
        ellipse(0, 4, 5, 5);
        ellipse(9, 0, 5, 5);
        ellipse(9, 4, 5, 5);
        rect(0, 0, 9, 5);
        pop();
    }
}