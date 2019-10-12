function pikachu_Obj (img, x, y) {
    this.position = createVector(x,y);
    this.img = img;
    this.angle = 0;

    this.draw = function () {
        this.angle = atan2(mouseY - this.position.y, mouseX - this.position.x);

        push();
        translate(this.position.x, this.position.y);
        rotate(this.angle);
        image(this.img, -20, -15, 40, 30); // Larger rectangle is rotating in degrees
        pop();
    }

    this.shoot_Ball = function () {
        console.log(masterBalls_Arr.length);
        for (let i=0; i<masterBalls_Arr.length; i++) {
            masterBalls_Arr[i].updatePosition();
            // masterBalls_Arr[i].updatePosition();
            masterBalls_Arr[i].outOfBoundary();
            masterBalls_Arr[i].draw();



        }
    }

}