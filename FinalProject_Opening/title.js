function title_Obj (x, y) {

    this.position = createVector(x, y);
    this.velocity = createVector(0, 0);
    this.acceleration = createVector(0, 0.1);
    this.size = 26;
    this.bounceCoeff = -(100 - this.size) / 100;

    this.draw = function () {
        textSize(40);
        // textFont(fontBold);
        text("TOWER BREAK", this.position.x, this.position.y);
    }

    this.animation = function () {
        this.velocity.add(this.acceleration);
        this.position.add(this.velocity);
        if (this.position.y > (120 - this.size / 2)) {
            this.position.y = 120 - this.size / 2;
            this.velocity.y *= this.bounceCoeff;
        }
    }
}