function particle_Obj (x,y) {
    this.position = createVector(x, y);
    this.velocity = createVector(random(-0.3, 0.3), random(-1.3, -1.5));
    this.size = random(2, 4);
    this.position.y -= (18 - this.size);
    this.c1 = monteCarlo_Obj();
    this.timeLeft = 255;

    this.move = function() {
        this.velocity.add(gravity);
        this.position.add(this.velocity);
        this.timeLeft--;
    }

    this.draw = function () {
        noStroke();
        fill(this.c1, this.c1, this.c1, this.timeLeft);
        ellipse(this.position.x, this.position.y, this.size, this.size*2);
    }
}