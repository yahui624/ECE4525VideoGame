function branch_Obj(x, y) {
    this.x = x;
    this.y = y;
    
    this.draw = function() {
        push();
        strokeWeight(4);
        translate(this.x, this.y);
        stroke(176, 118, 3);
        line(10, 0, 10, 12);
        strokeWeight(1);
        line(10, 10, 3, 2);
        line(10, 12, 17, 3);
        noStroke();
        fill(247, 158, 158);
        ellipse(4, 3, 4, 7);
        fill(255, 191, 254);
        ellipse(15, 4, 5, 7);
        fill(255, 166, 245);
        ellipse(10, 0, 4, 6);
        pop();
    }
}
