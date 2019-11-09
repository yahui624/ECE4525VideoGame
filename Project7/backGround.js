function backGround_Obj(x, y) {
//Creating  the small twinkle stars objects in the background 
    this.x = y;
    this.y = y;

    this.display = function () {
        //Displaying the small twinkle stars 
        push();
        fill(0, 3);
        rect(0, 0, width, height);
        fill(255, 255, 255);
        frameRate(15);
        ellipse(random(width), random(height), 6, 6);
        pop();
    }
}