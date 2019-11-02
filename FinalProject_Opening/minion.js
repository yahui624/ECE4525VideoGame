function minion_Obj (img, x, y){
    this.img = img;
    this.position = createVector(x, y);

    this.draw = function () {
        image(this.img, this.position.x, this.position.y, 60, 80);
    }


}