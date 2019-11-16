function ladder_Obj(x, y) {
    this.position = createVector(x,y);

     this.draw = function () {
        image(ladder_img, this.position.x, this.position.y, 60, 80);
    }
}