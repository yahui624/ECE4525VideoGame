function cherryBlossom_Obj(x, y) {
    this.x = x;
    this.y = y;

    this.display = function () {
        push();
        translate(this.x, this.y);
        fill(242, 133, 227);
        ellipse(-10, -8, 10, 13);
        ellipse(0, 0, 10, 13);
        ellipse(-20, 0, 10, 13);
        ellipse(-3, 10, 10, 13);
        ellipse(-15, 10, 10, 13);
        fill(255, 191, 0);
        ellipse(-10, 2, 12, 15);
        pop();
    }
}