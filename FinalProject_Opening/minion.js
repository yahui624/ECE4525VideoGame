function minion_Obj (img, x, y, constant) {
    this.img = img;
    this.position = createVector(x, y);


    this.constant = constant;
    this.angle = 0.0;
    this.offset = this.position.y;
    this.scalar = 40;
    this.speed = 0.05;

    this.draw = function () {
        image(this.img, this.position.x, this.position.y, 60, 80);
    }

    this.animation = function () {
        this.position.y = this.offset + sin(this.angle + this.constant) * this.scalar;
        this.angle += this.speed;

    }


}