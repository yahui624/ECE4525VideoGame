function fountain_Obj (x, y) {
    this.x =x;
    this.y =y ;
    this.particles = [];

    this.execute = function () {
        if (this.particles.length < 300) {
            this.particles.push(new particle_Obj(this.x, this.y));
            this.particles.push(new particle_Obj(this.x, this.y));
            this.particles.push(new particle_Obj(this.x, this.y));
        }
        for (var i = 0; i < this.particles.length; i++) {
            if ((this.particles[i].timeLeft > 0) &&
                (this.particles[i].position.y < this.y)) {
                this.particles[i].draw();
                this.particles[i].move();
            } else {
                this.particles.splice(i, 1);
            }
        }
        fill(227, 134, 221);
        ellipse(this.x, this.y - 9, 20, 10);
    }
}
