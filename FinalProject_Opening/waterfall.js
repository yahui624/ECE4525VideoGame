function waterfall_Obj(x, y) {
    this.monteCarlo = function() {
        var v1 = random(150, 255);
        var v2 = random(150, 255);
        while (v2 > v1) {
            v1 = random(150, 255);
            v2 = random(150, 255);
        }
        return (v1);
    }

    this.position = createVector(x, y);
    this.velocity = createVector(random(-0.05, 0.05), random(0.5, 2));
    this.size = random(3, 4);
    this.position.y -= (18 - this.size);
    this.c1 = this.monteCarlo();
    this.timeLeft = 400;

    this.move = function() {
        this.position.add(this.velocity);
        this.timeLeft--;
    }

    this.draw = function() {
        noStroke();
        fill(this.c1, this.c1, this.c1, this.timeLeft);
        ellipse(this.position.x, this.position.y, this.size, this.size * 2);
    }

}