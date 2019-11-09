function star_obj(x, y) {
    this.x=x;
    this.y=y; 
    
    this.display = function () { // Display the star icon
        push();
        translate(this.x, this.y);
        fill(255, 255, 196);
        noStroke();
        beginShape();
        vertex(0, -25);
        vertex(7, -10);
        vertex(23.5, -7.5);
        vertex(11.5, 3.5);
        vertex(14.5, 20);
        vertex(0, 12.5);
        vertex(-14.5, 20);
        vertex(-11.5, 3.5);
        vertex(-23.5, -7.5);
        vertex(-7, -10);
        endShape(CLOSE);
        pop();
    }


    this.gameStart = function () {
        if (mouseX >= this.x - 80 && mouseX <= this.x + 100 && mouseY >= this.y - 60 && mouseY <= this.y + 70) {
            cursor(HAND);
            if (mouseIsPressed && mouseButton === LEFT) { //detect the mouse click
                game_obj.gameStart = 1;
            }
        } else {
            cursor(ARROW);
        }
    }
}